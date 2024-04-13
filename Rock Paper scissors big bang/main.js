const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = '';

if (playerChoice === computerChoice) {
result = "It's a tie";
} else {
switch (playerChoice) {
case 'rock':
result = computerChoice === 'scissors' ? 'You win' : 'You loose';
break;
case 'paper':
result = computerChoice === 'rock' ? 'You win' : 'You loose';
break;
case 'scissors':
result = computerChoice === 'paper' ? 'You win' : 'You loose';
break;
}
}

playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;

switch (result) {
case 'You win':
playerScoreDisplay.classList.add('blueText');
playerScore++;
playerScoreDisplay.textContent = playerScore;
break;
case 'You loose':
computerScoreDisplay.classList.add('redText');
computerScore++;
computerScore.textContent = computerScore;
break;
}
}