
function computerPlay() {
    const RBS = ["Rock", "Paper", "Scissors"];
    return RBS[Math.floor(Math.random() * 3)];
}

function playRound(playerSection, computerSection) {
    if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "rock") || 
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "paper") ||
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "scissors") ) {
    
        return -1;
    } ;
     if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "scissors") ||
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "paper") ||
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "rock") ) {
      
          return 1;
      };
    if( (playerSection.toLowerCase() == "rock" && computerSection.toLowerCase() == "paper") || 
      (playerSection.toLowerCase() == "paper" && computerSection.toLowerCase() == "scissors") || 
      (playerSection.toLowerCase() == "scissors" && computerSection.toLowerCase() == "rock") ) {
        return 0;
    };
}

const rock = document.querySelector('#b1');
const paper = document.querySelector('#b2');
const scissors = document.querySelector('#b3');

let playerSection = '';

rock.addEventListener('click', () => {
   playerSection = 'Rock';
});

paper.addEventListener('click', () => {
  playerSection = 'Paper';
})

scissors.addEventListener('click', () => {
  playerSection = 'Scissors';
})

const buttons = document.querySelectorAll('button');


const div = document.createElement('div');
let computerScore = 0;
let yourScore = 0;
const YScoreRecorder = document.createElement('div');
const CScoreRecorder = document.createElement('div');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    let computerSection = computerPlay();
    let result = playRound(playerSection, computerSection);
    if (result === 1) {
      yourScore += 1;
      div.textContent = playerSection + ' beats ' + computerSection + '. Well-Chosen sir.'
    } else if (result === 0) {
      computerScore += 1;
      div.textContent = playerSection + ' is beaten by ' + computerSection + '. You Loser.'
    } else if (result === -1) {
      div.textContent = 'A draw for this round';
    };
    YScoreRecorder.innerText = 'Your score: ' + yourScore;
    CScoreRecorder.innerText = 'Computer score: ' + computerScore;

    if (yourScore == 5 || computerScore == 5) {
      if (yourScore > computerScore) alert('you won!')
      else return alert('you lost!');
    }
  });
});


document.body.appendChild(div);
document.body.appendChild(YScoreRecorder);
document.body.appendChild(CScoreRecorder);





