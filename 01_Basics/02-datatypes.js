// Primitive Datatype
/*
 1st- number -> For numbers type values- such as decimal, positive, negative etc  
 2nd- String -> For Text type values - such as "name", "city" etc
 3rd- Boolean ->For condition type values - such as "True" & "False" 
 4th- undifiend -> The variable has been created, but no value has been assigned to it, Automatically assigned by the JavaScript engine. 
 5th- null -> Value is intentionally set to be empty, Manually assigned by the developer.
 6th- BigInt -> Working with massively large integers safely. Syntax- Add an n to the end of a number: 100n
(Note: You cannot mix standard Numbers and BigInts directly in math equations (e.g., 5n + 2 will throw an error). You must convert them first (5n + BigInt(2)).)
 7th- Symbol -> Creating 100% unique, hidden identifiers for objects. Syntax- Call the function: Symbol('description')
 */

// number
let age = 20;
// Boolean
let adult = true;
// String
let userName = "Ronni";
// Undifiend
let address;
// null
let mobileNumber = null;
// BigInt
const big1 = 9007199254740991n;
// Missing

// TODO: Implement unique Symbol keys for object properties to avoid conflicts
// !const user = {
// ! name: "Rahul",
// !};

console.log(age);
console.log(adult);
console.log(userName);
console.log(address);
console.log(mobileNumber);
console.log(big1 + 1n);
console.log(big1 + 2n);
// Typeof – This operator is used to determine the type of data.
console.log(typeof age);

// TODO: Document and implement non-primitive data types (Objects, Arrays, Functions) later
//* Non-Primitive Data Type
/* 
1st- Object
2nd- Arrays
3rd- function
*/

// *Object
const items = {
  Mohit: true,
  Rahul: false,
  Rohan: undefined,
};
console.log(items["Rahul"]);
