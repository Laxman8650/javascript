console.log("Condition Statement in JavaScript");
let a = prompt("what is your age?"); //prompt ask form user , and it always returns a string value.
console.log(typeof a);
a = Number.parseInt(a); //Converting string into number
// Conditional statements alter the flow of program execution.

// If ->If the condition is true → the code will execute.
if (a >= 18) {
  console.log("you are adult");
}

// * else...if
if (a < 18) {
  console.log(
    "You are still a child; don't even think about driving right now.",
  );
} else {
  console.log("You can drive.");
}

// *if...else if...else
let b = prompt("Please, tell me your marks");

if (b >= 90) {
  console.log("Congrats! You are topper");
} else if (b >= 60) {
  console.log("You have passed with a first division.");
} else if (b >= 33) {
  console.log("You have passed with a second division.");
} else {
  console.log("Oh! you are fail");
}

// * Switch Case- A switch statement is used when a single value needs to be compared against multiple possible values.

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
  case 3:
    break;
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}

// *Ternary Operator ? :
let age = 17;
console.log("You are", age >= 18 ? "Adult" : "Minor");
