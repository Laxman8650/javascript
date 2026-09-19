console.log("function in JavaScript");

// A JavaScript function is a reusable block of code designed to perform a specific task or calculate a value
// Parameter ko function banate waqt () mein hota hai, aur argument function call karte waqt () mein diya jata hai.
function names(name) {
  console.log(name);
}
names("Mohit");
names("Rahul"); // function call
/* name       → parameter
"Mohit"    → argument
"Rahul"    → argument
*/

function myName(name) {
  //function decleration
  console.log(" Hello " + name); // Function body
}
myName("Mohit"); //Function Calls ya Function Invocation

// * Average calculation program

function onePlusAvg(x, y) {
  console.log("True");
  return 1 + (x + y) / 2;
}

let a = 2;
let b = 10;
let c = 5;

console.log(" One plus average of a and b is ", onePlusAvg(a, b));
console.log(" One plus average of a and b is ", onePlusAvg(b, c));
console.log(" One plus average of a and b is ", onePlusAvg(a, c));

// Arrow Function
const sum = (p, q) => {
  return p + q;
};
console.log(12 + 4);

//* without argument program
const myIntro = () => {
  return "My name is laxman singh"; // Agar return nhi hota to V undifiend hota
};
console.log("Hello My friends !");
let v = myIntro();
console.log(v);
console.log(typeof v);

// * Types

// 1. Function Declaration - Isme function keyword use hota hai.
function greet() {
  console.log("Hello");
}
greet();

// 2. Function Expression- Function ko ak variable main store karna
const greet = function () {
  console.log("Hello");
};
greet();

// 3. Arrow Function
const greet = () => {
  console.log("Hello");
};
greet();
