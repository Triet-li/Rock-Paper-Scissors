
function computerPlay() {
    const RBS = ["Rock", "Paper", "Scissors"];
    return RBS[Math.floor(Math.random() * 3)];
}

function playerSection() {
  return prompt("Choose your weapon to fight against the AI: Rock, Paper or Scissors");
}
function playRound(playerSection, computerSection) {
    if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "rock") || 
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "paper") ||
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "scissors") ) {
    
        return "A draw for this round.";
    } ;
     if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "scissors") ||
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "paper") ||
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "rock") ) {
      
          return "You win this round.";
      };
    if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "paper") || 
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "scissors") || 
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "rock") ) {
        return "You lost this round";
    };
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let humanWon = "You win this round.";
  let draw = "A draw for this round.";
  let humanLost = "You lost this round";
  let RoundResult;

  for(let i = 0; i < 5; i++) {
    RoundResult = playRound(playerSection(), computerPlay());
    console.log("Round " + ( i+1 ));
    
    if( humanWon == RoundResult) {
      console.log(humanWon);
      playerScore += 1;
    } else if ( humanLost == RoundResult) {
      console.log(humanLost);
      computerScore += 1;
    } else if (draw == RoundResult) {
      console.log(draw);
    }
  }

  if(playerScore > computerScore) return "You finally a winner of this game."
  else if(playerScore < computerScore) return "You finally got beaten by a computer."
  else return "Game result: DRAW!!";
}

console.log(game()); 