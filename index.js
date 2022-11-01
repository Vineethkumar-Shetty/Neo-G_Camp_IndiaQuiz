var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Welcome to 'Basic quiz regarding INDIA!!!... " + " Please tell your name? ");
console.log("Hello " + userName + "\nNote -: plese enter corret spellings to get your answer right, wrong spelling is considered as wrong answer..." + " \nlets begin!!");
function play(questions, answers) {
  var userAnswer = readlineSync.question(questions);
  if (userAnswer.toUpperCase() === answers.toUpperCase()) {
    console.log("You are right!!!");
    score = score + 1;
  } else {
    console.log("OOPS..!..you are wrong!!!");
  }
  console.log("your score is: " + score);
  console.log("_______________________________")
};




var quizItems = [
  {
    question: "1. What is the number of states in India? ",
    answer: "28"
  },
  {
    question: "2. Which is the first state to be formed on the basis of language? ",
    answer: "Andra Pradesh"
  },
  {
    question: "3. When did India become a republic? ",
    answer: '1950'
  },
  {
    question: "4. How was Tamil Nadu known before? ",
    answer: 'Madras'
  },
  {
    question: "5. capital of Kerala? ",
    answer: 'Thiruvananthapuram'
  },
  {
    question: "6. Nagaland was separated from which state? ",
    answer: 'Assam'
  },
  {
    question: "7. Which is the smallest state in terms of area? ",
    answer: 'Goa'
  },
  {
    question: "8. Which state was known as North East Frontier Agency? ",
    answer: 'Arunachal Pradesh'
  },
  {
    question: "9. Which country came into existence after Indo-Pak War of 1971? ",
    answer: 'Bangladesh'
  },
  {
    question: "10. Capital of Bihar? ",
    answer: 'Patna'
  }
]


for (i = 0; i < quizItems.length; i++) {
  var currentQuestions = quizItems[i];
  play(currentQuestions.question, currentQuestions.answer);
}
