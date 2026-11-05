// function hello(){
//  console.log("Hello")
// }
//  function greet(callback){
//     console.log("Welcome In Home")
//     callback(); 
//  }
// greet(hello);

// Next Example 

function getData(dataId, getNextData){ // getNextData as a callback function 
    setTimeout(()=>{
        console.log("data", dataId);
       getNextData();
    }, 3000);
    
}
// call back hell- Callback Hell is a situation where multiple callbacks are nested inside each other, making code difficult to read and maintain.
getData(1, ()=>{
    getData(2, ()=>{
         getData(3, ()=>{
         getData(4, ()=>{  
            console.log("data fetched Successfully") 
         });
      });
   });
});