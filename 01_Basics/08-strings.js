// console.log("Strings in javScript");

// // String - text/characters ka collection.
// // String - mainly 3 type se create hote hai "Hello" 'Hello' `Hello`

// let userName = "Mohit";
// console.log(userName);
// console.log(userName.length); // length of string
// console.log(userName[0]); // printing value using index of string
// console.log(userName[1]); // printing value using index of string
// console.log(userName[2]); // printing value using index of string
// console.log(userName[3]); // printing value using index of string
// console.log(userName[4]); // printing value using index of string

// // String concatenation

// let firstName = "Rohan";
// let lastName = "singh";

// console.log("Yours full name is " + firstName + " " + lastName);

// // String interpolation - String ke andar directly kisi variable ya expression ki value insert karna.
// // * JavaScript mein string interpolation ke liye template literals use hote hain, jisme backticks ` lagte hain.
// // * ${}

// let boy1 = "Nikhil";
// let boy2 = "Rahul";

// console.log(`${boy1} and ${boy2} is best friend`);

// // *2 Exm.
// let myName = "Mohit";
// let age = 20;

// console.log(`My name is ${myName} and I am ${age} years old.`);

// ? Strings Methods
// Method = kisi value/object ka built-in function jo us value par specific kaam karta hai.
// .length - it is property
// .toLocaleUpperCase()- convert capital letters
// .toLocaleLowerCase()- convert small letters
// .slice()- string ka ek part nikalna
// .replace()- text replace karna
// .concate()- strings ko join karna
// .trim()- starting aur ending ke spaces remove
// .includes- check karta hai text present hai ya nahi
// .startsWith()- beginning value check
// .endsWith()- ending value check
// .indexOf()- position/index find karta hai

let c = "Rahul";
console.log(c.length);
console.log(c.toLocaleUpperCase());
console.log(c.toLocaleLowerCase());
console.log(c.slice(2, 4)); // index 2 se start or index 4 se phle stop ho jaao
console.log(c.replace("Rah", "Par"));

let f = "Pujja";
console.log(c.concat(" is a boyfriend ", f, " ok "));
console.log(f.indexOf("ujja")); // string ka index jhan se start hoga uski first index value return p=0, u=1

let f2 = "   Mohan    ";
console.log(f2);
console.log(f2.trim());
console.log(f2.includes("mohit"));

// * Escape Sequence Characters
// * Iska main purpose hai aise characters ko represent karna jo directly likhne par special meaning/conflict create kar sakte hain, ya formatting control karna.
// \n	New line
// \t	Tab
// \"	Double quote
// \'	Single quote
// \\	Backslash
// \b	Backspace
// \r	Carriage return
console.log("Hello\nMohit");
console.log('Hello "Mohit"');
