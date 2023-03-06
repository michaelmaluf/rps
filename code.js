

let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  options = ["rock", "paper", "scissors"]
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(player, computer) {
  console.log(`Player: ${player} Computer: ${computer}`)
  if (player == "rock" && computer == "paper") {
    computerScore += 1;
    return "You Lose! paper beats rock";
  } else if (player == "rock" && computer == "scissors") {
    playerScore += 1;
    return "You Win! rock beats scissors!";
  } else if (player == "paper" && computer == "scissors") {
    computerScore += 1;
    return "You Lose! scissors beats paper";
  } else if (player == "paper" && computer == "rock") {
    playerScore += 1;
    return "You Win! paper beats rock!";
  } else if (player == "scissors" && computer == "paper") {
    playerScore += 1;
    return "You Win! scissors beats paper!";
  } else if (player == "scissors" && computer == "rock") {
    computerScore += 1;
    return "You Lose! rock beats paper!"
  } else {
    return "Its a tie!"
  }
}

function compareScores() {
  if (playerScore > computerScore) {
    return `Player score: ${playerScore} Computer score: ${computerScore}\n PLAYER WINS`
  } else if (playerScore < computerScore) {
    return `Player score: ${playerScore} Computer score: ${computerScore}\n COMPUTER WINS`
  } else {
    return `Player score: ${playerScore} Computer score: ${computerScore}\n IT'S A TIE`
  }
}

function game() {
  for (let i = 0; i < 5; i ++) {
    let computerChoice = getComputerChoice();
    let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
      playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    }

    console.log(playRound(playerSelection, computerChoice));
        
  }
  console.log(compareScores());
}


game();