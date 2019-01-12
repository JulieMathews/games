var userTotal= 0; 
var wins= 0;
var losses = 0;

// click blue, get random number
var num1 = Math.floor(Math.random()*10)+3

// click green, get random number
var num2 = Math.floor(Math.random()*10)+3

// click purple, get random number
var num3 = Math.floor(Math.random()*10)+3

// click yellow, get random number
var num4 = Math.floor(Math.random()*10)+3

// blue num is the random goal number 
$(document).ready(function(){
    var Random = Math.floor(Math.random()*80)+20
    $('#randomNumber').text(Random);
    console.log(Random)

// pink num is adding each pressed blu, grn, pur, ylw
$('#one').on('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
        }   
  })  
  $('#two').on('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( serTotal > Random){
          loser();
        } 
  })  
  $('#three').on('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
        } 
  })  
  $('#four').on('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
        }
  });   
}); 

// won by equaling goal
$('#numberWins').text(wins);

// lost going over goal
$('#numberLosses').text(losses);

// restart when lost/won
function reset(){
    Random=Math.floor(Math.random()*80)+20;
    console.log(Random)
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random()*10)+3;
    num2 = Math.floor(Math.random()*10)+3;
    num3 = Math.floor(Math.random()*10)+3;
    num4 = Math.floor(Math.random()*10)+3;
    userTotal = 0;
    $('#finalTotal').text(userTotal);
    } 

// tally won
function yay(){
    alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

// tally lost
function loser(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }