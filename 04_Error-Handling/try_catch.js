// Error Handling- Program mein error aane par usse handle karna, taaki program ka execution aage continue ho sake, error handling kehlata hai.
// Error Handling: Error handling is the process of handling errors during program execution so that the program does not stop unexpectedly.

let a = 10; 
let b = 2;
console.log("a = " +a);
console.log("b = " +b);
console.log("a + b = " + (a+b));
console.log("a * b = " + (a*b));
try{
    console.log("a - b = " + (a-c));
}
catch(err){ // err an typeof object 
    console.log(err);
}
// console.log("a + b =," + a-c); //error or neche wala code bhi execute nhi hoga
console.log("a / b = " + (a/b));
console.log("a + b = " + (a+b));
console.log("a - b = " + (a-b));