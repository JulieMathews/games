'use strict';

//============
// GLOBAL VARS
//============


console.log(Math.floor(Math.random() * WORDS.length))
var WORD = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase().split('');

var WORD_BLANKS_ELM = document.getElementById('word-blanks');

var WORD_PLACEHOLDER = [];
// Populate word placeholders array.
for (var i=0;i<WORD.length;i++) {
  console.log(WORD[i])
  if (WORD[i] === ' ') {
    WORD_PLACEHOLDER[i] = ' ';
  } else {
    WORD_PLACEHOLDER[i] = '_';
  }
}
console.log(WORD)


// Html word blanks:
WORD_BLANKS_ELM.textContent = WORD_PLACEHOLDER.join(' ');

// Counter items
var COUNTER = {
  guessesLeft: 9,
  guesses: [],
  guessesWrong: [],
  guessesCorrect: [],
  wins: 0,
  loss: 0
};

//==========
// Functions
//==========

// Loop over word characters to see if guess is contained.
function checkGuess(guess) {

  // Make guess Uppercase.
  guess = guess.toUpperCase();

  var isGuessFound = false;
  // No more guesses remain.
  // console.log(COUNTER.guessesLeft);
  if (COUNTER.guessesLeft === 0) {
    triggerLoss();
    return;// exit function
  }
  COUNTER.guesses.push(guess);
  WORD.forEach(function(char, idx){
    if (char === guess) {
      WORD_PLACEHOLDER[idx] = guess;
      isGuessFound = true;
    }
  });

  // Update placeholder html:
  triggerPlaceholder();

  // Make placeholder and word strings and see if they're equal:
  if (WORD_PLACEHOLDER.join('') === WORD.join('')) {
    triggerWin();
  }

  // If guess found.
  if (isGuessFound) {

  } else {
    // Decremint remaining guesses by 1.
    COUNTER.guessesLeft--;
    COUNTER.guessesWrong.push(guess);

  }
  // Update guess html.
  triggerGuess();

}


function triggerPlaceholder() {
  document
    // get the placeholder element
    .getElementById('word-blanks')
    // Join placeholder with single spaces to spread out the letters:
    .textContent = WORD_PLACEHOLDER.join(' ');
}

// Guess html.
function triggerGuess() {
  document.getElementById('guesses-left')
    .textContent = COUNTER.guessesLeft;
  document.getElementById('guesses-wrong')
    .textContent = COUNTER.guessesWrong.length;
  document.getElementById('guesses-wrong-display')
    .textContent = "Not found: " + COUNTER.guessesWrong.join(',');
}

// Display win.
function triggerWin() {
  document.getElementById('game-won').classList.remove('hide');
}
// Display loss.
function triggerLoss() {
  document.getElementById('game-lose').classList.remove('hide');  
}

function isValidGuess(guess) {
    return /^[A-Za-z]$/.test(guess)
}

//=======
// Script
//=======

// Listen to key press event.
document.onkeydown = function(e) {
  if (isValidGuess(e.key)) {
    checkGuess(e.key);
  }
}