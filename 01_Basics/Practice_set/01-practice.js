// Variables And Data types practice

//? Q1- Create a variable of type string and try to Add a number to it

let a = "Dheradun";
a = 5;
console.log(a);

// ? Q2- Use typeof operator to find the datatype of the string in last question

console.log(typeof a);

// ?Q3- Create a const object in javascript. can you change it to hold a number later?

const bioData = {
  name: " mohit",
  age: 20,
  branch: "CSE",
};

// *No we can not change it because it locks the reference to the const variable.
// bioData = "rahul"; //!It is wrong because of const ka object ko debara reassign nhi kar sakte

// ?Q4- Try to add a new key to the Const obejct in Problem 3 . Were you able to do it ?

bioData.courseYear = "2nd year";
bioData.yourAddress = "Tharali";
bioData.state = "uttarakhand";
console.log(bioData);

// ?Q5- Write Js program to Create a word-meaning dictionary of 5 words.

let wordDictionary = {
  Meticulous: "Showing great attention to detail; very careful and precise",
  Resilient: "Able to recover quickly from tough conditions.",
  Pragmatic: " Dealing with things in a sensible, realistic way.",
  Ubiquitous: "Found everywhere at the same time.",
};
wordDictionary.Ephemeral = " Lasting for a very short time.";
console.log(wordDictionary);
