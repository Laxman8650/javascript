let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
// Create variable for first refrence

let currMode = "light";

modeBtn.addEventListener("click", () => {
  //   console.log("You trying to chnage display mode");

  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";  // for background black
    body.classList.add("dark"); // using of classList
    body.classList.remove("light");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
