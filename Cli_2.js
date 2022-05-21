var readlineSync = require("readline-sync");

var score = 0;
function welcome() {
  var userName = readlineSync.question("What's your name? ");
 
   console.log("Welcome "+ userName + " to DO YOU KNOW Riya?");
 }
 

var questions = [{
  question: "How many hours are there in a day?",
  answer: "24 hours"
}, {
  question: " How many minutes are there in an hour?",
  answer: "60 minutes"
},
{
  question: "1 L is equal to how many grams?",
  answer: "1000 ml"
}];




function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);


}


welcome();
game();
showScores();





