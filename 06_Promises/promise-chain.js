// function asyncFunc1() {
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data1");
//         resolve("Sucess")
//     }, 4000);
//  })
// }
// function asyncFunc2() {
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data2");
//         resolve("Sucess")
//     }, 4000);
//  })
// }
// // it is print the data at the same time 
// console.log("Fetching Data 1....")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res)
// });
// console.log("Fetching Data 2....")
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res)
// })

// Promise chain 

// console.log("Fetching Data 1....")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log("Fetching Data 2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{});
// })

// More Simplfy

// console.log("Fetching Data 1....")
// asyncFunc1().then((res)=>{
//     console.log("Fetching Data 2....");
//      asyncFunc2().then((res)=>{});
// })

// New example 

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("Success")
        }, 2000)
    })
}
// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res)
// })


// Simpiller Way of chaining
// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res);
        
//     })
// })

// Actual Promise chaining 
console.log("getting Data 1....")
getData(1)
.then((res)=>{
    console.log("getting Data 2....")
    return getData(2);
})
.then((res)=>{
    console.log("getting Data 3....")
    return getData(3);
})
.then((res)=>{
    console.log(res);
});