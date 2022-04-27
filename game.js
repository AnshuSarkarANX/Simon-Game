var gamePattern = [];
var randomNumber;
var blue_a = new Audio("sounds/blue.mp3");
var red_a = new Audio("sounds/red.mp3");
var green_a = new Audio("sounds/green.mp3");
var yellow_a = new Audio("sounds/yellow.mp3");
var wrong_a = new Audio("sounds/wrong.mp3");
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
$(".btn").click( handler());
function handler(evt){
  console.log(evt);
}
