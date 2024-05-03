const rock = document.querySelector('.rock-btn')
const paper = document.querySelector('.paper-btn')
const scissors = document.querySelector('.scissors-btn')

const score = document.querySelector('.score')
const outcome = document.querySelector('.outcome')
const gameResult = document.querySelector('.game-result')
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', () => {
  restartGame()
})

resetBtn.classList.toggle('hidden')


let computerScore = 0;
let humanScore = 0;
let humanChoice;


rock.addEventListener('click', () => {
  humanChoice = 'rock'
  playGame()
})

paper.addEventListener('click', () => {
  humanChoice = 'paper'
  playGame()
})

scissors.addEventListener('click', () => {
  humanChoice = 'scissors'
  playGame()
})


function getComputerChoice() {
  let computerChoice = Math.floor((Math.random() * 3)); // returns a number between 0 and 2

  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice === computerChoice) {
    result = 'it\'s a tie.';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
    result = 'you win.';
    humanScore++;
  } else {
    result = 'you loose.'
    computerScore++;
  } 

  outcome.textContent = `You chose ${humanChoice} computer chose ${computerChoice} ${result}`

  score.textContent = ` Your score: ${humanScore}\n Computer score: ${computerScore}`;
}


function playGame() {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  if (computerScore === 3) {
    gameResult.textContent = 'Computer wins :\'(';
    gameResult.style.color = 'red'
    resetBtn.classList.toggle('hidden')
  } 
  else if (humanScore === 3) {
    gameResult.textContent = 'You win!';
    gameResult.style.color = 'lime'
    resetBtn.classList.toggle('hidden')
  }
}

function restartGame() {
  computerScore = 0;
  humanScore = 0;

  score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
  outcome.textContent = 'Game has been reset.';
  gameResult.textContent = '';

  resetBtn.classList.toggle('hidden')

}