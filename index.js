// problem one1.

// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }
  
//   scopeTest();

  //Answer1: it will give us Reference Error. because let and const are block scope so when run the program then letVariable and constVariable are not find. only var is global scope so varVariable will be fiend. so it will give us a Reference Error.

//   problem two

// Write a function greet that takes two parameters, name and greeting.
// greeting should have a default value of "Hello". If only the name is provided,
// the function should return the greeting followed by the name. If both are provided,
// it should return the custom greeting followed by the name.

// Answer2:
function greet(name, greeting='Hello'){
    return `"${greeting}, ${name}!"`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// problem3
// Write a function sum that takes any number of arguments and returns their sum using the rest parameter.

// Answer3
// solution, use reduce method.
// function sum(...number){
//     return number.reduce((total,EachNumber)=>total + EachNumber,0);
// }

// solving, use for of loop. like class tutorial
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }

    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

//problem4;
// Given the following arrays, use the spread operator to merge them into a new array mergedArray.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Answer4:
const mergedArray =[...array1, ...array2, ...array3]
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// problem5
// Write an object person using the object literal syntax extensions.
// The object should have properties name and age, and a method greet that returns a greeting message.

const name = "John";
const age = 30;

const person = {
    name,
    age,
    greet(){
        return `Hi, I'm ${this.name} and I'M ${this.age} years old.`
    }
}  
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."


// problem 6
// Write a for...of loop to iterate over the following array and print each element to the console.
// Answer6
const fruits = ["apple", "banana", "cherry"];

for(let fruit of fruits){
    console.log(fruit);
}

// problem 7

// Use template literals to create a string that includes variables name and age.
// use fast letter UpperCase because avoid naming conflict.

const Name = "Alice";
const Age = 25;

// Your code here
const message = `My name is ${Name} and I am ${Age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."


// problem 8
// You have an array of objects representing students and their grades.
// Use a for...of loop to iterate over the array and print each student's name and grade.
// Answer8
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`${student.name} grade is: ${student.grade}`);
  };


  console.log('*****************');// for divided.
 
//   problem 9
//  You have a nested array of numbers. Use a `for...of` loop to iterate over each inner array and print the sum of its elements.

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let totalSum = 0; 
  let arrayNumber = 1;
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const num of innerArray) {
      sum += num;
      totalSum += num;
    }
    console.log(`Sum of array no ${arrayNumber}: ${sum}`);
    arrayNumber++;
  }
  
  console.log(`Total sum of all arrays: ${totalSum}`);
  
// problem 10
console.log('******************');// for divided.
// Use template literals to create a string that includes variables a and b, as well as the result of their addition.
// Answer10:

const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."


// End