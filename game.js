var gamePattern = [];
var userClickedPattern =[];
var randomNumber;
var level = 0;
var started = false;
var wrong = new Audio("sounds/wrong.mp3");
var buttonColours = ['red','blue','green','yellow'];
 function nextSequence(){
   level++;
   $("#level-title").text("Level "+ level);
   randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   playsound(randomChosenColour);
    gamePattern.push(randomChosenColour);
   console.log(randomNumber);
   $('#' + randomChosenColour).animate({opacity:0.5},50);
   $('#' + randomChosenColour).animate({opacity:0},50);
   $('#' + randomChosenColour).animate({opacity:1},50);
 }
$(".btn").click(function handler(){
  var userChosenColour=$(this).attr("id");
  playsound(userChosenColour);
  userClickedPattern.push(userChosenColour);
animatePress(userChosenColour);
});
function playsound(name){
  var color = new Audio("sounds/"+ name +".mp3");
  color.play();
}
function animatePress(currentColour){
  $('#'+currentColour).addClass("pressed ");
  setTimeout(function (){
  $('#'+currentColour).removeClass("pressed");
  }, 100);
}
//starting game
$(document).keypress(function(){
  if(!started){

    $("#level-title").text("Level "+ level);
    nextSequence();
    started = true;

  }
})
