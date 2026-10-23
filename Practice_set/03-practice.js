//  Practice of function ow while loops

// ? Q1. Write a program to print the marks of a student in an object using for loop

let marks = {
  Mohit: 90,
  Rahul: 20,
  Karan: 70,
  Pujja: 40,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  // *Object.keys(marks).length - object ke sare keys ko array main convert karega or uski length dega
  // !Object.keys - built in function in javascript
  //! Length- Array ki property hai jo jo elements bta rhi hai.
  console.log(
    " The Marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]],
  );
}

// ? Q2. Write the program of Q1, using for...in loop

for (key in marks) {
  console.log("The Marks of " + key + " are " + marks[key]);
}

// ? Q3. Write a program to print try again until the user enters the correct number.
// in node. js prompt

let cn = 20;
let n;
while (n != cn) {
  console.log("Try again");
  n = prompt("Enter the your number");
}
console.log("This is correct number");

// ? Q4. Write a function to find mean of 5 number

let x = 0;
for (let i = 1; i <= 5; i++) {
  x += i / 5;
}
console.log("The mean of number is " + x);
