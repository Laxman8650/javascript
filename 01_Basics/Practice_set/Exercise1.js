//? Q> Write a javaScript program to generate a random number and store it in a variable. The program then takes a input from the user to tell then wether the guess was correct, grater or lasser than the orignal number.
// ! Rules
/* 1- 100 -(number of guesses) is the score of the user.
2- The program is expected to terminate once the number is guessed.
3- Number should be between 1 -100.------*/

let randomNumber = Math.floor(Math.random() * 100) + 1;
let a = 0;
let chance = 0;
while (a != randomNumber) {
  a = prompt("Guess the Number");
  a = Number.parseInt(a);
  chance++;
  if (a > randomNumber) {
    console.log("Your Number is Grater, Try again");
  } else if (a == randomNumber) {
    console.log("Congrates! You are win " + a + "=" + randomNumber);
  } else {
    console.log("Opps! Your number is less");
  }
}
console.log("Score :" + (100 - chance));
console.log("You are gussed in " + chance + " attempts.");
