const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const result = document.querySelector('.result > p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userChoiceDisplay = document.getElementById('user-choice').querySelector('img');
const computerChoiceDisplay = document.getElementById('computer-choice').querySelector('img');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound = document.getElementById('draw-sound');

let userScoreCount = 0;
let computerScoreCount = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function displayChoices(userChoice, computerChoice) {
  userChoiceDisplay.src = `${userChoice}.png`;
  computerChoiceDisplay.src = `${computerChoice}.png`;
}

function win(userChoice, computerChoice) {
  userScoreCount++;
  userScore.innerHTML = userScoreCount;
  result.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
  document.getElementById(userChoice).classList.add('winner');
  winSound.play();
  setTimeout(() => document.getElementById(userChoice).classList.remove('winner'), 1000);
}

function lose(userChoice, computerChoice) {
  computerScoreCount++;
  computerScore.innerHTML = computerScoreCount;
  result.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
  document.getElementById(userChoice).classList.add('winner');
  loseSound.play();
  setTimeout(() => document.getElementById(userChoice).classList.remove('winner'), 1000);
}

function draw(userChoice, computerChoice) {
  result.innerHTML = `It's a draw!`;
  document.getElementById(userChoice).classList.add('winner');
  drawSound.play();
  setTimeout(() => document.getElementById(userChoice).classList.remove('winner'), 1000);
}

function game(userChoice) {
  result.innerHTML = "Computer is thinking...";
  setTimeout(() => {
    const computerChoice = getComputerChoice();
    displayChoices(userChoice, computerChoice);
    switch (userChoice + computerChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        win(userChoice, computerChoice);
        break;
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        lose(userChoice, computerChoice);
        break;
      default:
        draw(userChoice, computerChoice);
        break;
    }
  }, 1000); // 1 second delay
}

function main() {
  rock.addEventListener('click', () => game('rock'));
  paper.addEventListener('click', () => game('paper'));
  scissors.addEventListener('click', () => game('scissors'));
}

main();