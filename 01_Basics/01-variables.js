// Variables in JavaScript

const accountId = 1234;
let accountEmail = "mohit12@gmail.com";
var accountPassword = "121212";
accountCity = "tharali";

// Chaangin Values
// not allowed -> accountId = 2;
accountEmail = "mohitrawat@gmail.com";
accountPassword = "23456";
accountCity = "tungeshwar";

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// Practice
// -------------Var--------------
// *Var can be update and re-declare
var a = 10;
var a = 20;
// It's not good programming
console.log(a);

// 'Rahul' will be printed in both places.
var userName = "Mohit";
{
  var userName = "Rahul";
  console.log(userName);
}
console.log(userName);

//------------ let---------------
// *let can be update but not re-declaring.
let c = 10;
// It's wrong
let a = "pujja";
// It's correct
c = "pujja";
console.log(c);

// *`let` is used to declare a block-scoped variable.
let myName = "mohit";
{
  let myName = "rahul";
  console.log(myName);
}
console.log(myName);
