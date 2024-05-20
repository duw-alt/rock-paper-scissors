// Selecting elements from the DOM
const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');

const score = document.querySelector('.score');
const outcome = document.querySelector('.outcome');
const gameResult = document.querySelector('.game-result');
const resetBtn = document.querySelector('.reset-btn');

// Initializing game variables
let computerScore = 0;
let humanScore = 0;
let humanChoice;
let gameOver = false;

// Event listeners for player choices
rock.addEventListener('click', () => {
  if (!gameOver) {
    humanChoice = 'rock';
    playGame();
  }
});

paper.addEventListener('click', () => {
  if (!gameOver) {
    humanChoice = 'paper';
    playGame();
  }
});

scissors.addEventListener('click', () => {
  if (!gameOver) {
    humanChoice = 'scissors';
    playGame();
  }
});

// Event listener for game reset
resetBtn.addEventListener('click', () => {
  restartGame();
});

// Hide reset button initially
resetBtn.classList.toggle('hidden');

// Function to get computer's choice
function getComputerChoice() {
  const computerChoice = Math.floor((Math.random() * 3)); // 0 for rock, 1 for paper, 2 for scissors
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  let result;

  // Determine the result of the round
  if (humanChoice === computerChoice) {
    result = 'it\'s a tie.';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'you win.';
    humanScore++;
  } else {
    result = 'you lose.';
    computerScore++;
  } 

  // Update the outcome message
  outcome.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`;

  // Update the score display
  score.innerHTML = `Your score: ${humanScore} <br> Computer score: ${computerScore}`;
}

// Function to play the game
function playGame() {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  // Check for game over conditions
  if (computerScore === 3) {
    gameResult.textContent = 'Computer wins :\'(';
    gameResult.style.color = 'red';
    resetBtn.classList.toggle('hidden');
    gameOver = true;
  } else if (humanScore === 3) {
    gameResult.textContent = 'You win!';
    gameResult.style.color = 'lime';
    resetBtn.classList.toggle('hidden');
    gameOver = true;
  }
}

// Function to reset the game
function restartGame() {
  computerScore = 0;
  humanScore = 0;
  gameOver = false;

  // Reset score and messages
  score.innerHTML = `Your score: ${humanScore} <br> Computer score: ${computerScore}`;
  outcome.textContent = 'Game has been reset.';
  gameResult.textContent = '';

  // Hide reset button again
  resetBtn.classList.toggle('hidden');
}
