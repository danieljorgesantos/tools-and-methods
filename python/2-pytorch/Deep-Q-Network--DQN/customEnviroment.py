class customEnviroment:
    def __init__(self):
        
        # action space
        #In this context, a discrete action space means that the possible actions are distinct and enumerable. 
        # The number x indicates that there are x possible actions available to an agent in
        # this particular environment.
        self.action_space = gym.spaces.Discrete(2)
        
        # Define your environment's observation space
        self.observation_space = spaces.Discrete(10)
     

        def reset(self, seed=None, options=None):
            # Define the reset logic for your environment
            pass


        def step(self, action):
            # Map the action (element of {0,1,2,3}) to the direction we walk in
            pass


# Create an instance of your custom environment
env = customEnviroment()

# Reset the environment
observation = env.reset()

done = False
while not done:
    # Sample a random action from the action space
    action = env.action_space.sample()

    # Take a step in the environment
    next_observation, reward, done, info = env.step(action)

    # Print the results
    print("Observation:", next_observation)
    print("Reward:", reward)
    print("Done:", done)
    print("Info:", info)
