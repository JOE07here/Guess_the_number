'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input or wrong input
  if (guess < 0 || !guess) {
      displayMessage('⛔ enter a number greater than 0')

    //when guess is correct
  } else if (guess === secretNumber) {
      displayMessage(' Hurray, correct number🎉🥳')
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage( guess > secretNumber ? ' Too high 🙀 !!' : ' Too low ⏬ !!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage( ' You lost 😭');
      document.querySelector('body').style.backgroundColor = '#fb3640';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
