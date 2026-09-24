// console.log("Arrays in javaScript");

// // * Array- Array is a colection on multiple values. - String , boolean , Number
// // * Ak variable ke diffrent types ki value store kar sakte hai .
// // * Arrays are mutable , arrays can be change.

// let marks_class_10 = [92, 97, 95, 23, "Not Present", true];
// console.log(marks_class_10[0]); //access the value
// marks_class_10[2] = 98; //changing the value an array
// marks_class_10[4] = 53; // assingn the value in not present value
// console.log(
//   "Marks:",
//   marks_class_10,
//   "Length:",
//   marks_class_10.length,
//   "Type of:",
//   typeof marks_class_10,
// );

// //? Print the value an array using for loop

// let fruits = ["Mango", "Apple", "Pineapple", "Grapes"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ! Arrays Methods

// push()-	end mein add
// pop()-	end se remove
// unshift()-	beginning mein add
// shift()-	beginning se remove
// includes()- element check
// indexOf()-	index find
// slice()-	array ka part , new array ko create karta hai
// splice()-	add/remove/replace
// join()-	array → string,add join arrys element
// length-  elements count
// concate()- concat() ka use do ya more arrays ko combine karne ke liye hota hai.
// ! Important- concat() normally original array ko change nahi karta, balki new array return karta hai.
// delete- technically array method nahi, ek JavaScript operator hai. Ye delete element ki jgh par empty space chowd deta hai
// sort() — array ko arrange/sort karna. Ye ak alphabatice order main arrange karta hai, sort() → original array ko modify karta hai, compare function bna skate hain numeric ko ascending,Descending order main karne ke liye
// reverse() — array ko ulta karna. reverse() original array ko modify karta hai.

let num = [1, 5, 34, 2, 6];
let num2 = [7, 8, 15, 16, 17];

let b = num.toString();
console.log(b, typeof b);

let c = num.join("_");
console.log(c, typeof c);

let r = num.pop();
console.log(num, r); // jo element pop hua hai usse return karega

let x = num.push("Apple");
console.log(num, x);

num.shift();
console.log(num);

num.unshift("Mango");
console.log(num);

let w = num.concat(num2); // new array return karega
console.log(w);

delete num[0];
console.log(num, num.length); // not effect arrays length

let compare = (a, b) => {
  //ascending or deascending order
  return b - a;
};
num.sort(compare); // orignal array ko modify kar deta hai
console.log(num);

num2.reverse();
console.log(num2);

let deletedValues = num.splice(2, 3, 1001, 1002, 1003); // first argument- strating index , second argument- how much elemnts remove, third argument- How much elements add
console.log(deletedValues, num); //source arrays ko modify karta hai or deleted items ko return karega

let newNum1 = num.slice(3);
let newNum = num.slice(0, 2);
console.log(newNum1, newNum);

// * Array.form- iterable ya array-like, value ko ek actual Array mein convert karta hai. taki un par arrays method work kar paye
let userName = "Mohit";
let array = Array.from(userName);
console.log(array, typeof array);
