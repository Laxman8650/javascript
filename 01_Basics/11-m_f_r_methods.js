// Map, Filter & Reduce Methods in js
// ! Note: forEach() → each element par action
// ! Note: map() → each element ko transform karke NEW ARRAY

// *1- map() — map() array ke har element par function chalata hai aur ek naya array return karta hai.
let num = [2, 3, 4, 5, 6];
let newArray = num.map((value, index, array) => {
  // callback function ke parameters
  console.log(value, index, array);
  //   return value + 1;
  return value + index;
});
console.log(newArray, num); // value 1 incress hogi har element main

// *filter() array ke har element ko condition ke against check karta hai aur sirf condition satisfy karne wale elements ka naya array return karta hai.

let arr = [1, 3, 45, 30, 4, 5, 11, 9];
let a2 = arr.filter((value) => {
  //   return value < 15;
  return value % 2 == 0;
});
console.log("The even numbers are: " + a2, arr);

// * reduce() — reduce() array ke multiple elements ko process karke ek single final value return karta hai.

let arr2 = [1, 2, 4, 2, 3, 5];
let newArray2 = arr2.reduce((m1, m2) => {
  return m1 + m2;
});
console.log(newArray2); // Single value produce karega

//* Callback function-Jo function kisi doosre function/method ko argument ke roop mein diya jata hai aur woh doosra function use baad mein call karta hai, use callback function kehte hain.
example;
//! let num = [10, 20, 30];

//! num.forEach(function(value, index, array) { //call back function
//!   console.log(value, index, array);
// });
