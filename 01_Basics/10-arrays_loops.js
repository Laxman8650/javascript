console.log("Arrays Loops");
let marks = [92, 57, 43, 88, 91];

//* For loop
for (let i = 0; i < marks.length; i++) {
  //   console.table(marks);
  console.log(i, marks[i]); // i= index of array
}

//* For...of loop
for (let mark of marks) {
  console.log(mark); // values return karta hai
}

//* For...in loop
for (mark in marks) {
  console.log(mark); // index/key return karta hai
}

//* forEach() loop- array ke har element par ek function ko ek baar execute karta hai.

let num = [2, 5, 6, 8, 9];
num.forEach(function (num) {
  //! first num- array ka name, Second anum- current element ko temporarily hold karne wala parameter
  console.log(num, num * num);
});
