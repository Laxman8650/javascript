// * Arrays Practice

// ? Q1- Create an array of numbers and take input from the user to add numbers to this array.

let num = [12, 23, 14, 15, 13, 45];
let a = prompt("Enter the Number");
a = Number.parseInt(a);
num.push(a);
console.log(a, num);

//? Q2- Keep adding numbers to the array in Q1 Until O is added to The array

let num2 = [12, 23, 14, 15, 13, 45];
let a2;
do {
  a2 = prompt("Enter the Number");
  a2 = Number.parseInt(a2);
  num2.push(a2);
} while (a2 != 0); // a=0 than 0!=0 is false the value added in array
{
  console.log(num2);
}

// ? Q3. Filer for numbers diviable by 10 from a given array

let arr = [20, 35, 45, 40, 50, 46, 70, 98];
let number = arr.filter((value) => {
  return value % 10 == 0;
});
console.log("Divisable by 10 number are : " + number);

//? Q4- Create an Array of Square of given number

let arr2 = [2, 4, 6, 7, 9, 3, 5, 12];
let square = arr2.map((squ) => {
  return squ * squ * squ;
});
console.log("Square of Numbers :" + square);

//? Q5- Use reduce to calculate factorial of a given number from an array of frst n natural numbers. (n being the number whose factorial needs to be calculated).

let arr3 = Array.from[5];
let factorial = arr3.reduce((h1, h2) => {
  return h1 * h2;
});
console.log(factorial);
