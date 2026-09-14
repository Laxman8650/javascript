// *while loop
// while loop tab tak code execute karta hai jab tak given condition true hoti hai.
let i = 0; //Initilazition loop ke bahar
let n = prompt("Enter the number");
n = Number.parseInt(n);
while (i < n) {
  console.log(i);
  i++; // update loop ke andr
}

// * do...while loop
// do...while loop mein code block kam se kam ek baar execute hota hai, uske baad condition check hoti hai.

let x = 10;
let y = prompt("Enter the number");
y = Number.parseInt(y);
do {
  console.log(i);
  i++; // update loop ke andr
} while (i < y);
{
}
