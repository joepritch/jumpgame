$(document).ready(function() {

  var score = 0;

  var ballPos;

  var obstaclePos;

  function scoreCounter() {
    score = (score+=1);
    scoreUpdate(score)
  }

  function scoreUpdate() {
    $(".score").text("Score: " + score);
  }

  function loseCheck(){
    ballPos = document.getElementById("ball").getBoundingClientRect();

    obstaclePos = document.getElementById("first").getBoundingClientRect();
    if (ballPos.x == Math.floor(obstaclePos.x)) {
      console.log("hello")
    }
    else {
      console.log(ballPos.x)
      console.log(Math.floor(obstaclePos.x))
        setTimeout(loseCheck, 1);
    }
  }

  loseCheck();

  $(".gameScreen").click(function() {
    scoreCounter();
    $("#ball").removeClass("fall");
    $("#ball").addClass("jump");
    setTimeout(function(){
      $("#ball").removeClass("jump"); $("#ball").addClass("fall");}, 500);
    });
});
