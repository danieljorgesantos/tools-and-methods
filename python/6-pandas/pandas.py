# pandas

import pandas as pd


# Creating a DataFrame from a list of dictionaries:

data = [
    {'Name': 'John', 'Age': 28, 'City': 'New York'},
    {'Name': 'Emily', 'Age': 32, 'City': 'Chicago'},
    {'Name': 'Mike', 'Age': 45, 'City': 'San Francisco'}
]

df = pd.DataFrame(data)


# -----------------------------------------------------------------------------

# Creating a DataFrame from a NumPy array:

import numpy as np

data = np.array([
    ['John', 28, 'New York'],
    ['Emily', 32, 'Chicago'],
    ['Mike', 45, 'San Francisco']
])

df = pd.DataFrame(data, columns=['Name', 'Age', 'City'])

# -----------------------------------------------------------------------------

# Creating a DataFrame from a CSV file:

df = pd.read_csv('data.csv')

# -----------------------------------------------------------------------------

# table operations

# Filter rows based on a condition
young_people = df[df['Age'] < 30]

# Filter rows using multiple conditions
new_york_people = df[(df['City'] == 'New York') & (df['Age'] < 40)]

# Apply a function to a column and create a new column
df['Age_in_10_years'] = df['Age'].apply(lambda x: x + 10)

# Apply a function to multiple columns and create a new column
df['Name_Age'] = df.apply(lambda row: row['Name'] + ' is ' + str(row['Age']), axis=1)

# -----------------------------------------------------------------------------




