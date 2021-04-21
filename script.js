'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ="you win 🎉"

// document.querySelector('.number').textContent =23;
// document.querySelector('.score').textContent =12;
// document.querySelector('.guess').value = 43;

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value) ;
console.log(`${guess} = ${typeof(guess)}`);

if(!guess) {
    document.querySelector('.message').textContent =" ⛔ enter a number > 0"
}
}) 
