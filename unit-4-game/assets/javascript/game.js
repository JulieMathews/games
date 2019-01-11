var userTotal= 0; 
var wins= 0;
var losses = 0;

// click blue, get random number
var num1= Math.floor(Math.random()*11+1)

// click green, get random number
var num2= Math.floor(Math.random()*11+1)

// click purple, get random number
var num3= Math.floor(Math.random()*11+1)

// click yellow, get random number
var num4= Math.floor(Math.random()*11+1)

// pink num is the random goal number 
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);

// blue num is adding each pressed blu, grn, pur, ylw
$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
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
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
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