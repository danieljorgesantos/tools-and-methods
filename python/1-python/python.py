# python class
class Person:
    # Class definition goes here

    # The __init__ method takes at least one argument, which is typically named self. The self parameter represents the
    # instance of the class itself and is used to access the instance's attributes and methods.
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print("Hello, my name is", self.name)

    def celebrate_birthday(self):
        self.age += 1
        print("Happy birthday! Now I am", self.age, "years old.")

# Create objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Access attributes and call methods
print(person1.name)
person2.say_hello()
person1.celebrate_birthday()

# -----------------------------------------------------------------------------------------------------------

# classes parent and child in python, and super()
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print("The vehicle starts.")

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model

    def start(self):
        super().start()
        print(f"The {self.brand} {self.model} starts.")

# Create an instance of Car
my_car = Car("Toyota", "Corolla")

# Call the start method
my_car.start()

# -----------------------------------------------------------------------------------------------------------

# python function
def add_numbers(a, b):
    sum = a + b
    return sum

result = add_numbers(3, 4)
print(result)  # Output: 7

# -----------------------------------------------------------------------------------------------------------

#Tuple

#A tuple is an immutable sequence, meaning its elements cannot be modified once it is created.
#Tuples are defined using parentheses ().
#Elements in a tuple are ordered and can be of different data types.
#Tuples are generally used to store a collection of related values that should not be changed, such as coordinates or data records.
#Tuples are faster to store than lists.
my_tuple = (1, 2, 3, 'a', 'b', 'c')

# -----------------------------------------------------------------------------------------------------------

#List

#A list is a mutable sequence, allowing its elements to be modified after creation.
#Lists are defined using square brackets [].
#Elements in a list are ordered and can be of different data types.
#Lists are commonly used to store collections of items that may need to be modified, such as a list of names or numbers.
#Lists are slower to store than tuples, they take two data blocks.
my_list = [4, 5, 6, 'd', 'e', 'f']


# -----------------------------------------------------------------------------------------------------------

# for loops

sequence = [1, 2, 3]

for item in sequence:
    # code to be executed for each item
    print(item)

for i in range(1, 6):
    # code to be executed for each item
    print(i)

# -----------------------------------------------------------------------------------------------------------

# conditional statements

x = 5
if x > 0:
    print("x is positive")
elif x == 0:
    print("x is zero")
else:
    print("x is negative")

# -----------------------------------------------------------------------------------------------------------


# Slicing allows you to extract a portion of a string by specifying the start and end indices.

string = "Hello, World!"
new_string = string[1:]  # Extracts the string from index 1 to the end
print(new_string)

string = "Hello, World!"
new_string = string[:-1]  # Extracts the string from the beginning to the second-to-last character
print(new_string)

string = "Hello, World!"
new_string = string[1:-1]  # Extracts the string from the beginning to the second-to-last character, Extracts the string from index 1 to the end
print(new_string)

# -----------------------------------------------------------------------------------------------------------

# list()
# the list() function is used to create a new list object from an iterable or to convert other data types into a list.

string = "Hello"
string_list = list(string)
print(string_list) # output: ['H', 'e', 'l', 'l', 'o']


# -----------------------------------------------------------------------------------------------------------

# len()
# The len() function in Python is used to get the length or number of elements in a sequence or collection.

string = "Hello, World!"
length = len(string)
print(length)

# -----------------------------------------------------------------------------------------------------------


# str()
# The str() function converts the given argument into a string representation.

num = 42
num_str = str(num)
print(num_str)

# -----------------------------------------------------------------------------------------------------------

# int()
# Integer conversion: If you have a string representing an integer, you can use the int() function to convert it to an integer.

num_str = "42"
num_int = int(num_str)
print(num_int)

binary_str = "10101"
decimal_num = int(binary_str, 2)
print(decimal_num)


# -----------------------------------------------------------------------------------------------------------

# float()
# Floating-point conversion: If you have a string representing a floating-point number, you can use the float() function to convert it to a float.

num_str = "3.14"
num_float = float(num_str)
print(num_float)

# -----------------------------------------------------------------------------------------------------------


# sum()
# To sum all the elements in an array (or list) in Python, you can use either a for loop or the sum() function.

arr = [1, 2, 3, 4, 5]
sum = sum(arr)

print(sum)

# -----------------------------------------------------------------------------------------------------------

# join()
#  The join() method in Python is used to concatenate elements of an iterable (such as a list, tuple, or string)
#  into a single string. It joins the elements together using a specified delimiter.

# delimiter.join(iterable)

fruits = ['apple', 'banana', 'orange']
result = ', '.join(fruits)
print(result) # output: apple, banana, orange

numbers = (1, 2, 3, 4, 5)
result = ' '.join(map(str, numbers))
print(result) # output: 1 2 3 4 5


# -----------------------------------------------------------------------------------------------------------
