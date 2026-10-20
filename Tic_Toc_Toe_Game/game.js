// Access all child
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgScreen = document.querySelector("#msg-screen");
let msgText = document.querySelector("#msg-text");
let newgame = document.querySelector("#new-game");

let turnO = true; //If turnO is true, it's Player O's turn; otherwise, it's Player X's turn.
let count = 0;

// Use of 2d array for store the winning patterns.
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// console.log(winPatterns);

// New game code
const newGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgScreen.classList.add("hide");
};

// reset code
const reset = () => {
  turnO = true;
  count = 0; // count = 9 and than count will reset with the game then count will automaticaly start with zero
  enableBoxes(); //called enable function
  msgScreen.classList.add("hide"); // when game will reset then class hide auto add
};

// Draw Game code
let drawGame = () => {
  msgText.innerText = `Game was a Draw! 🤝`; // Draw message
  setTimeout(() => {
    msgScreen.classList.remove("hide");
  }, 400);
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; // Jo box fill hho gya wo dubara edit nhi hoga
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      drawGame(); // call drwgame
    }
  });
});

// for reset Game
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// enableBox for new game
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Show winner
const showWinner = (winner) => {
  msgText.innerText = `Winner is ${winner}`;
  setTimeout(() => {
    msgScreen.classList.remove("hide"); // 1 second baad screen dikhegi
  }, 400);

  // winnerScreen.classList.remove("hide"); // remove form h2 and displayed the winner text
  disabledBoxes(); // called from the disableBoxed
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);
    //     console.log(pattern[0], pattern[1], pattern[2]); // access individual array for array
    //     // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // access patern from individual box
    //     console.log(
    //       boxes[pattern[0]].innerText,
    //       boxes[pattern[1]].innerText,
    //       boxes[pattern[2]].innerText,
    //     ); // check the value of index

    let posi1Val = boxes[pattern[0]].innerText;
    let posi2Val = boxes[pattern[1]].innerText;
    let posi3Val = boxes[pattern[2]].innerText;

    if (posi1Val != "" && posi2Val != "" && posi3Val != "") {
      if (posi1Val == posi2Val && posi2Val == posi3Val) {
        // console.log("winner", posi1Val);
        showWinner(posi1Val);
        return true;
      }
    }
  }
  return false;
};

resetbtn.addEventListener("click", () => {
  reset();
});
newgame.addEventListener("click", () => {
  newGame();
});
