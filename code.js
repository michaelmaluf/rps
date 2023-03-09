const outcome = document.querySelector('.game-info');
const details = document.querySelector('.score-info');
const playerSign = document.querySelector('#player-sign img');
const computerSign = document.querySelector('#computer-sign img');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const endGameModel = document.querySelector('.modal');
const endGameMsg = document.querySelector('.modal-title');
const overlay = document.querySelector('.overlay');
const restartButton = document.querySelector('.btn-restart');

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => handleClick(button));
});

function handleClick(button) {
  if (isGameOver()) {
    openEndGameModel();
    return;
  }

  let playerSelection = getPlayerSelection(button);
  let computerChoice = getComputerChoice();

  // display if player won or lost round
  outcome.textContent = playRound(playerSelection, computerChoice);

  // display the rounds details
  details.textContent = getDetails(playerSelection, computerChoice);

  // display player and computer selections via images
  playerSign.src = `${playerSelection}.png`;
  
  // flip computer selection to face player selection
  computerSign.classList.add('flip');
  computerSign.src = `${computerChoice}.png`;


  // showcase player and computer score
  playerScoreboard.textContent = `Player: ${playerScore}`;
  computerScoreboard.textContent = `Computer: ${computerScore}`;


  if (isGameOver()) {
    openEndGameModel();
    runEndGameMsg();
  }

}

function getPlayerSelection(button) {
  switch (button.classList.value) {
    case 'btn rock': return 'rock';
    case 'btn paper': return 'paper';
    case 'btn scissors': return 'scissors';
  }
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"]
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock' && computerChoice === 'scissors') ||
    (playerSelection === 'paper' && computerChoice === 'rock') ||
    (playerSelection === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'You lose!';
  }
}

function getDetails(player, computer) {
  if ((player == 'rock' || computer == 'rock') && (player == 'paper' || computer == 'paper')) {
    return 'Paper beats rock!';
  } else if ((player == 'rock' || computer == 'rock') && (player == 'scissors' || computer == 'scissors')) {
    return 'Rock beats scissors!';
  } else if ((player == 'scissors' || computer == 'scissors') && (player == 'paper' || computer == 'paper')) {
    return 'Scissors beats paper!';
  } else {
    return `${player.charAt(0).toUpperCase() + player.slice(1)} ties with ${computer}`;
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function openEndGameModel() {
  endGameModel.classList.add('active');
  overlay.classList.add('active');
}

function runEndGameMsg() {
  return (playerScore > computerScore)
    ? (endGameMsg.textContent = "You win!")
    : (endGameMsg.textContent = "You lose...");
}

restartButton.addEventListener('click', restartGame)

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreboard.textContent = 'Player: 0';
  computerScoreboard.textContent = 'Computer: 0';
  outcome.textContent = 'Choose your weapon';
  details.textContent = 'Frist one to 5 wins!';
  playerSign.src = 'question-mark.png';
  computerSign.classList.remove('flip');
  computerSign.src = 'question-mark.png';
  endGameModel.classList.remove('active');
  overlay.classList.remove('active');
}




