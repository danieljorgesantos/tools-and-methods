// 1. ES6 Basics

// ES6 Arrow functions 
const addNumbers = (a, b) => {
    return a + b
};
console.log('addNumbers()', addNumbers(1, 2))

// -----------------------------------------------------------------------------------------------------------

// Object oriented programming
class Rectangle {
    // method run once when the object is bieng created to setup
    constructor(_width, _height, _color) {
        // Instance property
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    // Instance Method
    getArea() {
        return this.width * this.height;
    }

    // Getter methods are used to retrieve the values of properties
    get area() {
        // example
    }

    // A setter method allows you to set the value of a property 
    set area(area) {
        // example
    }
}

let Rectangle1 = new Rectangle(3, 2, 'blue');

// -----------------------------------------------------------------------------------------------------------

// callback functions

//  a function that is passed as an argument to another function and is intended to be called at a later point in time or under
//  certain conditions. The function receiving the callback can then invoke it to perform additional actions or provide a result.

// The concept of a callback function is based on the ability of JavaScript to treat functions as first-class citizens, 
// meaning functions can be assigned to variables, passed as arguments, and returned from other functions.

function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

calculate(3, 5, displayResult);


// -----------------------------------------------------------------------------------------------------------

// For Loops

// It can be used with any iterable object, including arrays. It provides more control over the iteration process,
//  allowing you to access the current index and manually control the loop flow.

// The for loop allows you to use break and continue statements to control the loop flow.
// You can break out of the loop or skip to the next iteration based on certain conditions.

const iterable = ['a', 'b', 'c'];

for (const [index, element] of iterable.entries()) {
    console.log('For loop index, element', index, element)
}

const array20 = [1, 2, 3, 4, 5];

for (const element of array20) {
    console.log(element);
}

const array21 = [1, 2, 3, 4, 5];

for (let i = 0; i < array21.length; i++) {
    console.log(array21[i]);
}

// -----------------------------------------------------------------------------------------------------------

// For Each

// forEach: It is specifically designed for arrays.
// It automatically iterates over each element in the array and executes the provided callback function.

// The forEach method does not support break or continue statements. Once the iteration starts,
//  it will execute the callback function for every element in the array.

const arr20 = [1, 2, 3, 4, 5]

let callback = (el) => {
    console.log(el)
}

arr.forEach(callback);


const fruits = ['apple', 'banana', 'orange'];
function logFruit(fruit, index, array) {
    console.log('Index:', index, 'Fruit:', fruit, 'Array:', array);
}
fruits.forEach(logFruit);

// -----------------------------------------------------------------------------------------------------------

// while
let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// -----------------------------------------------------------------------------------------------------------

// Switch case
const fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Selected fruit is apple");
        break;
    case "banana":
        console.log("Selected fruit is banana");
        break;
    case "orange":
        console.log("Selected fruit is orange");
        break;
    default:
        console.log("Selected fruit is not in the list");
        break;
}

// -----------------------------------------------------------------------------------------------------------

// setTimeout to execute a callback function after the specified delay.

const delay = 2000;

setTimeout(() => {
    console.log(`This message will be displayed after a delay of ${delay} milliseconds.`);
}, delay);

// -----------------------------------------------------------------------------------------------------------

// setInterval to repeatedly execute a callback function

let counter = 0;

const intervalId = setInterval(() => {
    console.log(`Counter: ${counter}`);
    counter++;

    if (counter === 5) {
        clearInterval(intervalId);
        console.log('Interval stopped.');
    }
}, 1000);

// -----------------------------------------------------------------------------------------------------------

// ES6 methods

// .push() 
// -- The push() method adds the element to the end of the array
let arr = [];
arr.push(4, 5, 6);
console.log('.push()', arr)

// -----------------------------------------------------------------------------------------------------------

// .unshift()
// -- The unshift() method adds one or more elements to the beginning of an array
let arr2 = [];
arr2.unshift(2, 4, 6);
console.log('.unshift()', arr2)

// -----------------------------------------------------------------------------------------------------------

// .map()
// -- It maps the elements of an array based on a mapping function, and creates a new array automatically. 
// The original array becomes unchanged.
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map((number) => number * 2);
console.log('.map()', doubledNumbers);

// -----------------------------------------------------------------------------------------------------------

// .filter()
// -- It allows you to create a new array by filtering the elements of the original array based on a condition.
//  You can return true, or false inside the condition to add elements to the new array.
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((number) => number % 2 === 0);
console.log('.filter()', evenNumbers);

// -----------------------------------------------------------------------------------------------------------

// .find()
// -- Finds the first element in an array that satisfies a given condition, once the element is found the method 
// returns it, and stops the iteration.If nothing is found, it returns undefined.
const numbers4 = [1, 2, 3, 4, 5];
const evenNumber = numbers4.find((number) => number % 2 === 0);
console.log('.find()', evenNumber);

// -----------------------------------------------------------------------------------------------------------

// indexOf()
// -- returns the first index at which the specified element is found, or -1 if the element is not found.

var fruits2 = ['apple', 'banana', 'orange', 'grape'];
var index = fruits.indexOf('watermelon');
console.log(index);  // Output: -1


// -----------------------------------------------------------------------------------------------------------

// .split()
// -- used to split strings according to a delimiter.
const str = "Hello, World! How are you?";
const delimiter = "!"; // seperates in the ! no included
const delimiter2 = "!"; // seperates in the ! no included
const substrings = str.split(delimiter);
console.log('.split()', substrings);

const string = "Hello";
const characters = string.split(""); // [ "H", "e", "l", "l", "o" ]
console.log(characters);

// -----------------------------------------------------------------------------------------------------------

// .entries()
const arr5 = ["a", "b", "c"];
const iterator1 = arr5.entries();

console.log('iterator1.next().value', iterator1.next().value); // [0, "a"]
console.log('iterator1.next().value', iterator1.next().value); // [1, "b"]
console.log('iterator1.next().value', iterator1.next().value); // [2, "c"]

// -----------------------------------------------------------------------------------------------------------

// .next()
// -- used to get values from es6 iterators, like .entries(), values(), or keys()

const arr6 = ["a", "b", "c"];
const iterator2 = arr6.values(); // Returns an iterator for the array values

const firstValue = iterator2.next();
console.log(firstValue.value); // "a"
console.log(firstValue.done); // false

const secondValue = iterator2.next();
console.log(secondValue.value); // "b"
console.log(secondValue.done); // false

// -----------------------------------------------------------------------------------------------------------

// .join()
// -- The join() method is commonly used to convert an array of strings or elements into a single string representation


const arr7 = ['Hello', 'World', '!'];
const result = arr7.join('');

console.log(result); // "HelloWorld!"

// -----------------------------------------------------------------------------------------------------------

// .includes()
// -- It lets you check if a string or array contains a specific element. It returns true if the element is found, 
// and false otherwise.

//for arrays:
const numbers5 = [1, 2, 3, 4, 5];
const searchElement = 3;
const containsThree = numbers5.includes(searchElement);
console.log(containsThree); // Output: true

//for strings:
const str2 = 'Hello, world!';
const searchValue = 'world';
const containsWorld = str2.includes(searchValue);
console.log(containsWorld); // Output: true

// -----------------------------------------------------------------------------------------------------------

// .concat()
// -- In JavaScript, the .concat() method is used to concatenate two or more arrays, creating a new array that
// contains the combined elements. The original arrays remain unchanged. 

// Create two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// -----------------------------------------------------------------------------------------------------------

// .toLowerCase()
// -- The .toLowerCase() method in JavaScript is a string method that converts a string to lowercase.

const str3 = 'Hello World';
const lowercaseStr = str3.toLowerCase();
console.log(lowercaseStr); // Output: 'hello world'

// -----------------------------------------------------------------------------------------------------------

// .toUpperCase()
// -- The .toLowerCase() method in JavaScript is a string method that converts a string to lowercase.

const str4 = 'Hello World';
const uppercaseStr = str4.toUpperCase();
console.log(uppercaseStr); // Output: 'HELLO WORLD'

// -----------------------------------------------------------------------------------------------------------

// .pop()
// -- is used to remove the last element from an array and return that element.
var myArray = [1, 2, 3, 4, 5];
var lastElement = myArray.pop();

console.log(myArray);      // Output: [1, 2, 3, 4]
console.log(lastElement);  // Output: 5

// -----------------------------------------------------------------------------------------------------------

// .shift()
// -- removes the first element from an array and shifts all other elements to a lower index.
//  It can be used to remove the first element of an array.

const array30 = [1, 2, 3, 4, 5];
const removedElement = array30.shift();


// -----------------------------------------------------------------------------------------------------------

// .splice()
// --  allows you to modify an array by removing, replacing, or adding elements.
// To remove an element at a specific index, you can use splice() with the index and the number
//  of elements to remove as arguments.

const array = [1, 2, 3, 4, 5];
array.splice(index, 1);



// -----------------------------------------------------------------------------------------------------------


// .reverse()
// -- is used to reverse the order of elements in an array. It modifies the original array in place, without creating a new array.

let myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray);  // Output: [5, 4, 3, 2, 1]

// -----------------------------------------------------------------------------------------------------------

// regex

// Step 1: Define the regex pattern
const pattern = /hello/;

// Step 2: Create a RegExp object with the pattern
let regex = new RegExp(pattern);

// Step 3: Test the regex pattern against a string
let text = "Hello, world!";
let result2 = regex.test(text);

// Step 4: Check the result
console.log(result2);  // Output: true

// -----------------------------------------------------------------------------------------------------------


// regex patterns

// regular expression (regex) for matching numbers
const patternNumbers = /\d+/;
const patternPin = /^\d{4}$/;
const patternPinBothWith4or6 = /^\d{4}(?:\d{2})?$/;

// -----------------------------------------------------------------------------------------------------------

