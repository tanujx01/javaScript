const choices = document.querySelectorAll(".choice");
const player1ChoiceDisplay = document.querySelector(".player1-choice");
const player2ChoiceDisplay = document.querySelector(".player2-choice");
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ScoreDisplay = document.getElementById("player2-score");
const resetBtn = document.getElementById("reset-btn");

let player1Choice = null;
let player2Choice = null;
let player1Score = 0;
let player2Score = 0;

function getWinner(p1, p2) {
  if (p1 === p2) return "draw";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const player = button.getAttribute("data-player");
    const choice = button.textContent.trim().split(" ")[1].toLowerCase(); // Extract choice (rock, paper, scissors)

    if (player === "1" && !player1Choice) {
      player1Choice = choice;
      player1ChoiceDisplay.textContent = button.textContent.trim();
    } else if (player === "2" && !player2Choice) {
      player2Choice = choice;
      player2ChoiceDisplay.textContent = button.textContent.trim();
    }

    if (player1Choice && player2Choice) {
      let winner = getWinner(player1Choice, player2Choice);

      setTimeout(() => {
        if (winner === "player1") {
          player1Score++;
          alert("🎉 Player 1 Wins!");
        } else if (winner === "player2") {
          player2Score++;
          alert("🎉 Player 2 Wins!");
        } else {
          alert("😲 It's a Draw!");
        }

        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;

        player1Choice = null;
        player2Choice = null;
        player1ChoiceDisplay.textContent = "❔";
        player2ChoiceDisplay.textContent = "❔";
      }, 500);
    }
  });
});

resetBtn.addEventListener("click", () => {
  player1Choice = null;
  player2Choice = null;
  player1Score = 0;
  player2Score = 0;
  player1ChoiceDisplay.textContent = "❔";
  player2ChoiceDisplay.textContent = "❔";
  player1ScoreDisplay.textContent = "0";
  player2ScoreDisplay.textContent = "0";
});
