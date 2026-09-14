console.log("Loops in JavaScript");

// * For loop
//! Factorial Program
let n = 1;
for (let i = 1; i <= 5; i++) {
  n *= i;
  console.log(n);
}

// * Program to add first natural number

let sum = 0;
let n = prompt("Enter the number");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log(" Sum of first " + n + " natural number is " + sum);

// * for...of loop
// use for sting and arrays values

let fruits = ["Apple", "Mango", "Orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

//* for...in loop
// Use for itrate object properties/keys

let student = {
  userName: "mohit",
  age: 20,
  course: "JavaScript",
};
for (let key in student) {
  console.log(key);
}
