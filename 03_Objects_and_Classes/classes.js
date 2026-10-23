//Class – This is a template or blueprint for objects, used to create similar objects.
// A class is a blueprint for creating objects that contains data (properties) and methods (functions).

class Car {
    constructor(brand,milage){  // Initilaztion ke time par values ko set kar sakte hain any objects ko , constructor se karate hain.
        console.log("object Was Creating");
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("Start");
        
    }
     stop(){
        console.log("Stop");  
    }
    // setBrand(brand){
    //     this.brand=brand; //this.brand is an object property 
    // }
}
let fortuner = new Car("fortuner",10); // Object Creation // constructer call
let lexus = new Car(); // constructer call // brand is undifined
// fortuner.setBrand("fortuner")
console.log(fortuner)
fortuner.start();
fortuner.stop();
lexus.stop();
