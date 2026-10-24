// Practice of Class, Ojects and Inheritance.

// Qs. You are creating a website for your college. Create a class User, with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

let DATA= "Secret Information"
class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data = ", DATA);
    }
}
let student1 = new user("Mohit", "mohit@email.com");
let student2 = new user("Deepak", "purohit@email.com");
let teacher1 = new user("dean", "dean@email.com");
console.log(student1);
console.log(student2);
student1.viewData();

// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

let COLLAGEDATA= "Secret Information"
class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data = ", COLLAGEDATA);
    }
}
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        COLLAGEDATA= "Some new info";
    }
}

let admin1 = new Admin("admin", "admin@123.com")
console.log(admin1);
console.log(COLLAGEDATA)
admin1.editData(); // admin can change the data 
console.log(COLLAGEDATA)
