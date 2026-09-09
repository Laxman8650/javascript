console.log("Operators in JavaScript");

// *Arithmetic operators

let a = 10;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Pre-increment operator
console.log("++a =", ++a);
// Post-increment operator
console.log("a++ =", a++);
// Pre-decrement operator
console.log("--a =", --a);
// Post-decrement operator
console.log("a-- =", a--);
console.log("a =", a);

// * Assignment Operators

let r = 10; //* = -> Assignmnet Operator
r += 5; // r = r + 5; same as r += 5
console.log("r += 5 =", r); // value is 15

r -= 3;
console.log("r -= 3 =", r); //value is 15 - 3= 12

r /= 2;
console.log("r /= 2 =", r); //value is 12/2= 6

r *= 3;
console.log("r *= 3 =", r); //value is 3*6= 18

r **= 2;
console.log("r **= 2 =", r); //value is 18 the power 3 = 324

// * Comparison Operators

let comp1 = 10;
let comp2 = "10";
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 != comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is", comp1 !== comp2);
