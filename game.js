var gamePattern = [];
var userClickedPattern =[];
var randomNumber;
var level = 0;
var started = false;
var wrong = new Audio("sounds/wrong.mp3");
var buttonColours = ['red','blue','green','yellow'];
var i = 0;
//starting game
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    gamePattern = [];
    nextSequence();
    started = true;
  }
})
// game sequence function
 function nextSequence(){
   level++;
   userClickedPattern=[];
   $("#level-title").text("Level "+ level);
   randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   playsound(randomChosenColour);
    gamePattern.push(randomChosenColour);
   animatePress(randomChosenColour);
 }
 // click function
$(".btn").click(function handler(){
  var userChosenColour=$(this).attr("id");
  playsound(userChosenColour);
  userClickedPattern.push(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
});
/*game function
  if (gamePattern=userClickedPattern) {
    userClickedPattern = [0];
    nextSequence();
  } else {
    $("#level-title").text("Game Over.");
    i++;
  }
*/
//answer
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
    console.log(gamePattern);
    console.log(userClickedPattern);
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    console.log("wrong");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startOver();
    $("#level-title").text("Game Over, Press Any Key to Restart");
}
}
//Restart
function startOver(){
      level = 0;
      gamePattern = [];
      started = false;
  }
// different colours sound
function playsound(name){
  var color = new Audio("sounds/"+ name +".mp3");
  color.play();
}
// button press animation
function animatePress(currentColour){
  $('#' + currentColour).animate({opacity:0.5},50);
  $('#' + currentColour).animate({opacity:0},50);
  $('#' + currentColour).animate({opacity:1},50);
}
