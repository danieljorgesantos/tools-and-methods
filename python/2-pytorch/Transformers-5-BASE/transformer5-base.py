import torch

DEVICE = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")

from torchtext.models import T5Transform

padding_idx = 0
eos_idx = 1
max_seq_len = 512
t5_sp_model_path = "https://download.pytorch.org/models/text/t5_tokenizer_base.model"

transform = T5Transform(
    sp_model_path=t5_sp_model_path,
    max_seq_len=max_seq_len,
    eos_idx=eos_idx,
    padding_idx=padding_idx,
)

from torchtext.models import T5_BASE_GENERATION

t5_base = T5_BASE_GENERATION
transform = t5_base.transform()
model = t5_base.get_model()
model.eval()
model.to(DEVICE)

from torchtext.prototype.generate import GenerationUtils

sequence_generator = GenerationUtils(model)

# -----------------------------------------------------------------------------------------------------

# Datasets

from functools import partial

from torch.utils.data import DataLoader
from torchtext.datasets import CNNDM

cnndm_batch_size = 5
cnndm_datapipe = CNNDM(split="test")
task = "summarize"


def apply_prefix(task, x):
    return f"{task}: " + x[0], x[1]


cnndm_datapipe = cnndm_datapipe.map(partial(apply_prefix, task))
cnndm_datapipe = cnndm_datapipe.batch(cnndm_batch_size)
cnndm_datapipe = cnndm_datapipe.rows2columnar(["article", "abstract"])
cnndm_dataloader = DataLoader(cnndm_datapipe, batch_size=None)

# -----------------------------------------------------------------------------------------------------

def batch_prefix(task, x):
    return {
     "article": [f'{task}: ' + y for y in x["article"]],
     "abstract": x["abstract"]
    }

cnndm_batch_size = 5
cnndm_datapipe = CNNDM(split="test")
task = 'summarize'

cnndm_datapipe = cnndm_datapipe.batch(cnndm_batch_size).rows2columnar(["article", "abstract"])
cnndm_datapipe = cnndm_datapipe.map(partial(batch_prefix, task))
cnndm_dataloader = DataLoader(cnndm_datapipe, batch_size=None)

# -----------------------------------------------------------------------------------------------------


batch = next(iter(cnndm_dataloader))
input_text = batch["article"]
target = batch["abstract"]
beam_size = 1

model_input = transform(input_text)
model_output = sequence_generator.generate(model_input, eos_idx=eos_idx)
output_text = transform.decode(model_output.tolist())

for i in range(cnndm_batch_size):
    print(f"Example {i+1}:\n")
    print(f"prediction: {output_text[i]}\n")
    print(f"target: {target[i]}\n\n")