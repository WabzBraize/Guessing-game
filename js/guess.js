const submitBtn = document.getElementById('submit');
const prevGuesses = document.getElementById('prevGuesses');
const leftGuesses = document.getElementById('leftGuesses');
const inputField = document.getElementById('inputField');
const hint = document.getElementById('hint');
const msgContainer = document.querySelector('.msg-container');
var leftGuess = 10;
var prevGuess = 0;

leftGuesses.innerText = leftGuess;
prevGuesses.innerText = prevGuess;

submitBtn.addEventListener('click', () => {
    let userInput = Number(inputField.value);
    let guessNumber = Math.floor(Math.random() * 11);
    if (inputField.value.length === 0) return;
    hint.innerHTML = `    <span>Your Guess: ${userInput}</span><br>Random Guess: ${guessNumber}<span></span>`
    leftGuess--;
    prevGuess++;


    if (userInput < guessNumber) {
        msgContainer.classList.add('error');
        msgContainer.innerHTML = `
       <p id="msg"><i class="fas fa-exclamation-triangle"></i> Too Low! Try again!</p>
       `
    } else if (userInput > guessNumber) {
        msgContainer.classList.add('error');
        msgContainer.innerHTML = `
    <p id="msg"><i class="fas fa-exclamation-triangle"></i> Too High! Try again!</p>
    `
    } else {
        msgContainer.classList.add('success');
        msgContainer.innerHTML = `
    <p id="msg"><i class="fas fa-exclamation-circle"></i> Congs! You have guessed it right</p>
    `
        submitBtn.classList.add('disable');
        inputField.classList.add('disable');
    }

    leftGuesses.innerText = leftGuess;
    prevGuesses.innerText = prevGuess;

    if (leftGuess <= 0) {
        submitBtn.classList.add('disable');
        inputField.classList.add('disable');
    }

    inputField.value = "";
});