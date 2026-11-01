// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     resolve("Success");
// });
// console.log(promise);

// let promise = getData(123)
// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             console.log(promise);
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

// console.log(promise);

// then() and catch() function- .then() → Success hone par callback chalata hai., Jab Promise reject hota hai, tab catch() failure ko handle karta hai.

let promise = new Promise((resolve,reject)=>{
   let pizzaDeliverd = false;
   if(pizzaDeliverd){
    resolve("Pizza Deliverd");
   }
   else{
    reject("Pizza not Deliverd")
   }
});


promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// console.log(promise)