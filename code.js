function game() {
  const feedback = document.querySelector('.result'); // div that will display selections and results
  const buttons = document.querySelectorAll('.btn');
  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let playerSelection = getPlayerSelection(button);
      let computerChoice = getComputerChoice();
      
      // showcase player and computer selections to the user
      let selections = document.createElement('p');
      selections.textContent = `Player: ${playerSelection} Computer: ${computerChoice}`;
      feedback.appendChild(selections);

      // showcase the outcome of the round to the user
      let outcome = document.createElement('p');
      outcome.textContent = playRound(playerSelection, computerChoice);
      feedback.appendChild(outcome);

      // showcase current score
      let scores = document.createElement('p');
      scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
      feedback.appendChild(scores);

      if (playerScore === 5 || computerScore === 5) {
        const winner = document.createElement('p');
        winner.textContent = (playerScore == 5) ? 'PLAYER WINS' : "COMPUTER WINS";
        feedback.appendChild(winner);
        buttons.forEach(btn => btn.disabled = true);       
      }
    });
  });

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
}

game();