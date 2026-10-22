// Objects in JavaScript 
// In javascript, Object is an entity having state and behavior(Methods/Properties)
// let student={
//     // Properties 
//     name:"Mohit",
//     marks:95,
//     //Method
//     printMarks:function(){
//       console.log("marks =", this.marks)// this keyword refer to student object
//     }
// }
// student.printMarks();
// console.log(student.name)
// console.log(student.marks);

// // console.log({}=={});, console.log({}==={}); output?

// console.log({}=={}); //false
// console.log("{}"==="{}");//false 

// let a ={};
// b=a;
// console.log({}=={}); //true 
// console.log({}==={}); //true

// Prototype in javaScript
// It's a special type of property in javaScript having some methods and properties. Type = Object
// Prototype ek object hai jiske through JavaScript doosre object ki properties aur methods access kar sakta hai
const employee={
  calTax(){
    console.log("Tax rate is 10%");
  }
}
//Empolee - inherit by prototype chain
const mohitSingh={
  salary:50000,
}
const mohitSingh2={
  salary:50000,
}
const mohitSingh3={
  salary:50000,
  calTax(){
    console.log("tax rate 20%")// Method overriding behviour hoga or khud ka method call hoga
  }
}


console.log(mohitSingh);
mohitSingh.__proto__ = employee;// set the prototype 
mohitSingh2.__proto__ = employee;
mohitSingh3.__proto__ = employee;
mohitSingh.calTax();
mohitSingh2.calTax();
mohitSingh3.calTax();
Object.getPrototypeOf(mohitSingh);
console.log(Object.getPrototypeOf(mohitSingh)); //actual prototype dekhna hai to object ka

