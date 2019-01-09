
var random_result;
var lost;
var win;

for(var i = 0; i < 4; i++){
    
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');

    $(".crystals").append(crystal);
}

// a game with 4 crystals and random result
// every crystal needs to have a random number 1-12
// a new random number should be generated every single time we win or lose
// when clicking any crystal, it should add with the previous
// until it equals total score
// if it is greater than, lose and start over
// if it equals, win and start over