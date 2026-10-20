let userScore = 0;
let compScore = 0;

// Access all image div

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// Access score-board
const userScBoard = document.querySelector("#user-score");
const compScBoard = document.querySelector("#comp-score");

// Computer choice function
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomInd = Math.floor(Math.random() * 3);
  return options[randomInd];
};

// game drw function
const drawGame = () => {
  // console.log("Game was draw");
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "blue";
};

//User chioice
const playGame = (userChoice) => {
  // console.log("The user choice = ", userChoice);
  // Computer choice
  const compChoice = genCompChoice();
  // console.log("The Comp choice = ", compChoice);

  // Win decide function
  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScBoard.innerText = userScore;
      msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScBoard.innerText = compScore;
      msg.innerText = `You loss!, ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

  // draw game
  if (userChoice === compChoice) {
    drawGame();
    //Win and Lose Decide
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // comp have two choice paper,scissor
      userWin = compChoice === "paper" ? false : true;
      // comp have two choice rock,scissor
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    // console.log(choiceId);
    playGame(choiceId);
  });
});
