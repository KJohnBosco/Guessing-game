//Global variables
let counter = 10;
let currentScore = counter;
let highestScore = 0;
document.querySelector(".current-score").textContent = currentScore;
document.querySelector(".high-score").textContent = highestScore;

// Generate Quest Number
let quest = Math.trunc(Math.random() * 20);
const gameMessage = document.querySelector(".game-message");
const resultPanel = document.querySelector(".panel2");

// Functions
function reset() {
  counter = 10;
  let currentScore = counter;
  document.querySelector(".current-score").textContent = currentScore;
  document.querySelector(".chest").textContent = "?";
  document.querySelector(".guess").value = "";
  gameMessage.textContent = "Start Game!";
  gameMessage.style.backgroundColor = "#05000e";
  gameMessage.style.color = "#fff";
  resultPanel.style.backgroundColor = "#05000e";
}

function randomNumber() {
  return Math.trunc(Math.random() * 20);
}

// Check Guessed Number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Check
  if (guess === quest) {
    gameMessage.textContent = "Win 🏆";
    gameMessage.style.backgroundColor = "lime";
    resultPanel.style.backgroundColor = "lime";
    document.querySelector(".chest").textContent = quest;

    // Check high score
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    document.querySelector(".high-score").textContent = highestScore;
  }
  // Empty input
  else if (!guess) {
    gameMessage.textContent = "Empty Input...";
    gameMessage.style.backgroundColor = "red";
    gameMessage.style.color = "#05000e";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  // Too High
  else if (guess >= quest + 5) {
    gameMessage.textContent = "Too High...";
    gameMessage.style.backgroundColor = "red";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  // Too Low
  else if (guess < quest - 5) {
    gameMessage.textContent = "Too Low...";
    gameMessage.style.backgroundColor = "red";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  // In Range
  else if (guess < quest + 5 && guess > guess - 5 && guess !== quest) {
    gameMessage.textContent = "In Range...";
    gameMessage.style.backgroundColor = "lime";
    gameMessage.style.color = "#05000e";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  } else {
    gameMessage.textContent = "Wrong input...";
    gameMessage.style.backgroundColor = "red";
    gameMessage.style.color = "#05000e";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  currentScore = counter;
  document.querySelector(".current-score").textContent = currentScore;
});

// Play Agi=ain Event Listener
document.querySelector(".again").addEventListener("click", function () {
  reset();
  quest = randomNumber();
});

// New Game Event Listener
document.querySelector(".new-game").addEventListener("click", function () {
  reset();
  highestScore = 0;
  document.querySelector(".high-score").textContent = highestScore;
  quest = randomNumber();
});
