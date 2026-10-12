//? Use JavaScript to create a game of snake, water & gun . The game should be able to randomly genrate S, W and G and declare win or loss using alert. Use confirm and prompt requried

let playAgain = confirm("Are you ready to play Snake, Water & Gun?");

while (playAgain) {
  let num;

  // Step 1: User se valid choice lena
  while (true) {
    num = prompt("Choose s: Snake, w: Water, g: Gun");

    // Agar user Cancel click kare
    if (num === null) {
      break;
    }

    num = num.toLowerCase();
    if (num === "s" || num === "w" || num === "g") {
      break;
    }
    alert("Invalid choice! Please enter s, w, or g.");
  }

  // Prompt Cancel karne par round se bahar niklo
  if (num === null) {
    break;
  }

  // Step 2: Computer ka random choice
  let rdWord = Math.floor(Math.random() * 3);

  // 0 = Snake, 1 = Water, 2 = Gun
  let computerChoice;

  if (rdWord === 0) {
    computerChoice = "Snake";
  } else if (rdWord === 1) {
    computerChoice = "Water";
  } else {
    computerChoice = "Gun";
  }

  // Step 3: Computer ki choice dikhana
  alert("Computer chose: " + computerChoice);

  // Step 4: Win, Lose ya Tie check karna
  if (
    (num === "s" && rdWord === 1) ||
    (num === "w" && rdWord === 2) ||
    (num === "g" && rdWord === 0)
  ) {
    alert("Congratulations! You win!");
  } else if (
    (num === "s" && rdWord === 2) ||
    (num === "w" && rdWord === 0) ||
    (num === "g" && rdWord === 1)
  ) {
    alert("You lose! Try again.");
  } else {
    alert("Match tied!");
  }

  // Step 5: Har result ke baad dobara khelne ka option
  playAgain = confirm("Do you want to play again?");
}

alert("Thanks for playing!");
