//* Q1.Ans
let myBtn = document.querySelector("body");
let newBtn = document.createElement("button");
newBtn.innerText = "Click On Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
myBtn.prepend(newBtn);
console.log(myBtn);
// document.querySelector("body").prepend(newBtn);

//* Q2- ANs

let para1 = document.querySelector("p");
// console.log(para1);
console.log(para1.getAttribute("class"));
// para1.setAttribute("class", "new-class"); // but it's completely override of myClass/old class.

para1.classList.add("new-class"); // so! we have classChild method for solve this problem.It is add diffrent class in one element.
console.log(para1.classList); //Now! this element  have two different class now.
