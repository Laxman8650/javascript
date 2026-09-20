// * practice of strings

// ? Q1- What will the following print in JavaScript - Console.log( "Moh\"".length)
let str = 'Moh"';
console.log(str.length);

// ? Q2- Explore the includes startsWith & endsWith functions of a string
// * include
//example1
let str2 = "Mohit";
console.log(str2.includes(str2));

// example2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);

// * start with
console.log(str2.startsWith("Ru"));

// * EndsWith
console.log(str2.endsWith("it"));

// ? Write a program to convert a given string to lowercase
let str3 = "PUNJAB";
console.log(str3.toLowerCase());

// ? Q4- Extract the amount out of this String- "Please give Rs 2000"
let str4 = "Please give Rs 2000";
// ! Same output
console.log(str4.slice("Please give me ".length));
console.log(str4.slice(15));

// ? Q5-Try to change 4th character of a aiven string Were you able to do it

let str5 = "Sohan";
str5[2] = "P";
console.log(str5); // change nhi ho skta kyunki string immutable hoti hai
