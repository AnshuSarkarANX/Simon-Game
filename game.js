var gamePattern = [];
var randomNumber;
var blue_a = audio ("sounds\blue.mp3");
var red_a = audio ("sounds\red.mp3");
var green_a = audio ("sounds\green.mp3");
var yellow_a = audio ("sounds\yellow.mp3");
var wrong_a = audio ("sounds\wrong.mp3");
var buttonColours = ['red','blue','green','yellow'];
 function nextSequence(){
   randomNumber = Math.floor(Math.random()*4);
   console.log(randomNumber);
 }
 var randomChosenColour = buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);
function playgame(event){
   console.log(event.key);
  nextSequence();
  randomChosenColour_a.play();
$('#' + randomChosenColour).animate({opacity:0.5},50);
$('#' + randomChosenColour).animate({opacity:0},50);
$('#' + randomChosenColour).animate({opacity:1},50);
}
