//  Inheritance- Jab Kese derived/child class ke dwara parent class ki property or methods ko inherit kiya jata hai to use inheritance khte hain

class Mohit{
    hello(){
        console.log("Hello")
    }
}
class Sumit extends Mohit {
}
let obj = new Sumit;
obj.hello();

// Exmaple. 

class Person{
    // let we have constructer 
      constructor(){
        this.species="Home Sapience"
      }
    eat(){
        console.log("Eat")
    }
    sleep(){
         console.log("Sleep")
    }
    work(){ // Method overriding- We have same method in parent and child class then child method will be execute.
        console.log("Do Nothing");
        
    }
}
// Multiple class inheritance
class Student extends Person {
    work(){
        console.log("Solve Problem, Build New");    
    }
}
class Doctor extends Person {
    work(){
        console.log("Treat Patients");    
    }
}
let mohitobj = new Student();
let docObj = new Doctor();
let e1 = new Student(); // Species method call
console.log(e1);
mohitobj.work();
mohitobj.eat();
mohitobj.work(); // Solve Problem, Build New, // Do Nothing - not execute
docObj.sleep();

// Super Keyword- call the parent constructer

class Person{
    constructor(name){
        this.name=name;
    }
}
class Child extends Person{
    constructor(name,rollNo){
        super(name);
        this.rollNo=rollNo;
    }
}
let c1=new Child("Mohit", 101);
console.log(c1.name);
console.log(c1.rollNo);

// Expample

class Engineer{
    work(){
        console.log("Build something new");
    }
}
class Engineer2 extends Engineer{
    work(){
        super.work();
        console.log("Do Nothing");
    }
}
let e1 = new Engineer2();
e1.work();