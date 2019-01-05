// letters
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// defaults
var wins = 0;
var losses = 0;
var guesses = 15;
var guessesLeft = 15;
var guessedLetters = [];

//computer's random choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//15 guesses
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // missed guesses 
  document.querySelector('#guessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Callback function to reset everything
var reset = function() {
  totalGuesses = 15;
  guessesLeft = 15;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


// takes away guesses remaining
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Winner Winner!!");
                reset();
            }
        }else if(guessesLeft == 0){
            // add a loss
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You lost!");
            reset();
        }

};