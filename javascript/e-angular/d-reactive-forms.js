// Adding a basic form control

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        // other imports ...
        ReactiveFormsModule
    ],
})
export class AppModule { }

// Generate a new FormControl

import { FormGroup, FormControl } from '@angular/forms';

profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
});

<form [formGroup] = "profileForm"(ngSubmit) = "onSubmit()" >

    // Replacing a form control value

    this.name.setValue('Nancy');

this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
        street: '123 Drew Street'
    }
});

// validation --------------------------------------------

import { Validators } from '@angular/forms';



