// Condition or operators practice

// ? Q1- Use logical operators to find whether the age of a person Lies between 10 and 20.
// *This program run in browser console

let age = prompt("what is your age?");
if (age > 10 && age < 20) {
  console.log("Yes! This age lies in 10 and 20");
} else {
  console.log("Not lies");
}

// ? Q2- Demonstrate the use of switch case statement in javascript

// * A switch statement evaluates a given expression (only once) and compares the expression's result to a series of case values using strict equality (===). When a match is found, the code block associated with that case is executed.
// *The `break` keyword is used to stop the code so that the next `case` does not execute.
// ! Exmaple:

let year = prompt("What is your age?");
switch (year) {
  case "12":
    console.log("You are 12 years old");
    break;
  case "13":
    console.log("You are 13 years old");
    break;
  case "14":
    console.log("You are 14 years old");
    break;
  default:
    console.log("Your data is not found");
}

// ?03- Write a JavaScript program to find Whether a number is Divisible by 2 and 3.
// * prompt() browser ka built-in function hai
let num = prompt("Yours Number");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log("This number divisible by 2 and 3");
} else {
  console.log("This number not divisible");
}
