// It is External event handling

// btn.onclick = () => {
//   console.log("Button Clicked!");
//   let a = 25;
//   a++;
//   console.log(a);
// };
// if we are performe different task in same element with same function then second function completely overwriting function first.
// btn.onclick = () => {
//   console.log("Button Was Clicked!");
//   let a = 23;
//   a++;
//   console.log(a);
// };

let div = document.querySelector("div");
div.onmouseover = (e) => {
  div.innerText = "My Name is Mohit";
  div.title = "DOM Events Handler";
  console.log(e);
  console.log(e.type);
  console.log(e.target);
};

// * Events Object-

let btn2 = document.querySelector("button");
btn2.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

// *Method 3 -- Event Handling(addEventListener, removeEventListener)

let btn = document.querySelector(".BtnEle");

btn.addEventListener("click", () => {
  console.log("I have pressed it first time");
});

btn.addEventListener("click", (e) => {
  console.log("I have pressed it second time");
  console.log(e.type);
});

// btn.addEventListener("click", () => {
//   console.log("I have pressed it third times");
// });

// *If remove the item - callback refrence should be same to remove.
const press3 = () => {
  console.log("I have pressed it third times");
};
btn.addEventListener("click", press3);
btn.removeEventListener("click", press3);

btn.addEventListener("click", () => {
  console.log("I have pressed it four times");
});
