// async function hello(){
//     return "Hello" // behave return Promise.resolve("Hello");
// }
// let result = hello()

// console.log(result);

// Example-
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("wether data")
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWetherData(){
//    console.log(await api());
//    console.log(await api());
// }
// getWetherData();

// // New Example 

function getData(dataId){
 return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("data", dataId)
        resolve("success")
    }, 2000)
 })
}

// async function getAllData(){
//     console.log("Getting data1 ....")
//     await getData(1);
//      console.log("Getting data2 ....")
//      await getData(2);
//       console.log("Getting data3 ....")
//       await getData(3);
//        console.log("Getting data4 ....")
//        await getData(4);
//         console.log("Getting data5 ....")
//         await getData(5);
// }
// let result = getAllData();

// console.log(result); // Pending

// result.then(() => {
//     console.log(result); 
// });

// Using of IIFE - Immediately Invoked Function Expersion  
let result = (async function (){
    console.log("Getting data1 ....")
    await getData(1);
     console.log("Getting data2 ....")
     await getData(2);
      console.log("Getting data3 ....")
      await getData(3);
       console.log("Getting data4 ....")
       await getData(4);
        console.log("Getting data5 ....")
        await getData(5);
})();

console.log(result);
result.then(() => {
    console.log(result);
});
// use of await with normal values
// async function test() {
//     let result = await 10;
//     console.log(result);
// }

// test();