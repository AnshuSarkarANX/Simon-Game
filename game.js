var gamePattern = [];
var userClickedPattern =[];
var randomNumber;
var wrong = new Audio("sounds/wrong.mp3");
var buttonColours = ['red','blue','green','yellow'];
 function nextSequence(){
   randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
   console.log(randomNumber);
   var color = new Audio("sounds/"+ randomChosenColour +".mp3");
   color.play();
   $('#' + randomChosenColour).animate({opacity:0.5},50);
   $('#' + randomChosenColour).animate({opacity:0},50);
   $('#' + randomChosenColour).animate({opacity:1},50);
 }
$(".btn").click(function handler(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

});
