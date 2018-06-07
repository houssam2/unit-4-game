var targetNum;
var rocketNum, heloNum, trainNum, boatNum;
var currentScore=0;
var wins=0, losses=0, lastWinLoss="i";

init();

function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max-min)) + min);
}
function displayNewRandomNum() {
    var min = 19;
    var max = 120;
    targetNum = getRandomNum(min, max);
    console.log("Target Random Num = " + targetNum);
    $(random_div).text(targetNum);
}
function setVehicleRandomNums() {
    var min = 1;
    var max = 12;
    rocketNum = getRandomNum(min, max); console.log("Rocket Random Num = " + rocketNum);
    heloNum   = getRandomNum(min, max); console.log("Helo Random Num   = " + heloNum);
    trainNum  = getRandomNum(min, max); console.log("Train Random Num  = " + trainNum);
    boatNum   = getRandomNum(min, max); console.log("Boat Random Num   = " + boatNum);
}
function displayWinsLosses() {
    var text = "";
    if (lastWinLoss === "w")   { text += "<p>You Won!</p>"; } 
    else if (lastWinLoss === "l") { text += "<p>You Lost!</p>"; }
    text += "<p>Wins: " + wins + "</p>";
    text += "<p>Losses: " + losses + "</p>";
    $("#wins_losses_div").html(text);

    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
}
function init() {
    displayNewRandomNum();
    displayWinsLosses();
    setVehicleRandomNums();
    currentScore = 0;
    $(current_score_div).text(currentScore);
}
function processSelection() {
    console.log("currentScore = " + currentScore + ",    targetNum = " + targetNum);
    if (currentScore === targetNum) {
        // You win
        console.log("YOU WIN!");
        ++wins;
        lastWinLoss = "w";
        init();
    } else if (currentScore > targetNum) {
        // You lose
        console.log("YOU LOSE!");
        ++losses;
        lastWinLoss = "l";
        init();
    } else {
        // Still playing
        $(current_score_div).text(currentScore);
    }
}
$(document).ready(function() {
    $("#rocket").on("click", function() {
        currentScore += rocketNum;
        console.log("Selected Rocket: " + rocketNum);
        processSelection();
    });
    $("#helo").on("click", function() {
        currentScore += heloNum;
        console.log("Selected Helo: " + heloNum);
        processSelection();
      
    });
    $("#train").on("click", function() {
        currentScore += trainNum;
        console.log("Selected Train: " + trainNum);
        processSelection();
    });
    $("#boat").on("click", function() {
        currentScore += boatNum;
        console.log("Selected Boat: " + boatNum);
        processSelection();      
    });
  });

