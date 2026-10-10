// console.log("MY JS FILE IS RUNNING");
// console.dir(document); // The document looks like a JavaScript object.
// console.log(document); // representation of HTML DOM Structure
// console.dir(document.body);

// * DOM Manipulation

// Select with Id
let heading = document.getElementById("heading");
console.dir(heading);

// Select with class Name

// let myValues = document.getElementsByClassName("domManipulation");
// console.dir(myValues);

// Select with tag

// let withTag = document.getElementsByTagName("p");
// console.dir(withTag);

// Query Selector

let firstELe = document.querySelector(".domManipulation");
console.dir(firstELe);

let firstEle = document.querySelectorAll(".domManipulation");
console.dir(firstEle);
// console.log(firstEle[0].innerText) - this line show the text in inner of node 1 ya class first

// * Properties - for get & update elements

// tagName- returns the tag name

let tag = document.querySelector("div");
console.dir(tag);
console.log(tag.lastElementChild.tagName);
console.log(tag.firstElementChild.tagName);

// innerText - return text content and all its children

let content = document.querySelector(".newclass");
console.dir(content);
console.log(content.innerText);

// its Children
console.log(document.querySelector(".newclass").children[0]); // direct access
console.log(content.lastElementChild); // assetice print html of elements
console.log(content.lastElementChild.children[2].innerText); // We can print of childrens of last child

// parent -> child -> Siblings -> descendent order= Not a direct child of newClass but descendent of newclass.

//* InnnerHtml - return text with html tags.

console.log(content.innerHTML);

// textContent - return textual content from hidden elements

let newVariable = document.querySelector("h4");
newVariable.style.visibility = "hidden";
// console.log(newVariable);

// Print hidden output in a page with another elements
let content1 = document.querySelector("#heading4").textContent;
document.querySelector("#output").textContent = content1;

// Attributes

// id Attribute
let heading2 = document.querySelector("#myID");
console.log(heading2.getAttribute("id"));

// Get class Attribute
let heading3 = document.querySelector(".myclass");
console.log(heading3.getAttribute("class"));

//Change the value of class, set the new class

let valueChange = document.querySelector(".myclass");
valueChange.setAttribute("class", "newClass");
console.log(valueChange);

// Insert the value

let el = document.createElement("button");
let newPara = document.createElement("p");
newPara.innerText = "This is Js course";
el.innerText = "Click on Me";
document.body.append(el);
document.body.prepend(newPara);
// console.log(el);

let valueInsert = document.querySelector(".box1");
let newHeading = document.createElement("h3");
newHeading.innerText = "Some Create New";
valueInsert.append("My name is laxman", newHeading);
// valueInsert.before(newHeading); add element just before the div box

// Delete Methods
let para = document.querySelector(".box1");
console.log(para);
// para.remove();
// para.children[1].remove();
// para.children[2].remove(); //
para.removeChild(para.children[1]);
// para.replaceChildren(); // remove all child but parent will be safe
