var gamePattern = [];
var buttonColours = ['red','blue','green','yellow'];
 function nextSequence(){
   var randomNumber = Math.floor(Math.random()*4);
   return randomNumber;
 }
 randomChosenColour = buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);
