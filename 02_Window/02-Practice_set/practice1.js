//* Ans of Q1.
// let heading = document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText = heading.innerText + " This is DOM Manipulation ";

//* Ans of Q2.

let divBox = document.getElementsByClassName("box");
console.dir(divBox); // by throw of html collection

// document.querySelectorAll(".box")[0].style.display = "flex"; //! fast Access use in console

// * Object type se by throw of node collection
Object.assign(document.querySelectorAll(".box")[0], {
  innerText: "This is first div",
  style:
    "display: flex; justify-content: center; align-items: center; background-color: black; color:white",
});

Object.assign(document.querySelectorAll(".box")[1].style, {
  //   innerText: "This is box 1", //innerText not working in style
  display: "flex",
  color: "Red",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
});

// ! Line by Line
// divBox[0]; // access the box 1
// divBox[0].innerText = "This Is first box";
// divBox[0].style.display = "flex";
// divBox[0].style.justifyContent = "center";
// divBox[0].style.alignItems = "center";
