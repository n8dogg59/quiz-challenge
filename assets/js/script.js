var homepageEL = document.getElementById("homepage");
var startButton = document.getElementById("startBtn");
var quizPageEl = document.getElementById("quizPage") 
var timerDiv = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerAButton = document.getElementById("answerA");
var answerBButton = document.getElementById("answerB");
var answerCButton = document.getElementById("answerC");
var answerDButton = document.getElementById("answerD");
var checkAnswer; // this will be the correct answer in the question array and be listed 5th
var completePageEl = document.getElementById("completePage");
var scoreSpan = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var highScores = document.getElementById("highScores");
var highListOl = document.getElementById("highList");
var highInitialsDiv = document.getElementById("highInitials");
var highScoreDiv = document.getElementById("highScore");
var homepageButton = document.getElementById("homepageBtn");
var clearScoresButton = document.getElementById("clearScores");
var timerCountdown = 75;
var correctAnswer;
var score = 0;

// below is the array that holds all the quiz questions
var quizQuestions = [{
    question: "Who won the 1993 NCAA Men's National Championship?",
    pickA: "Duke",
    pickB: "Michigan",
    pickC: "Kentucky",
    pickD: "North Carolina",
    answer: "pickD"},
{
    question: "What year did the NCAA tournament field expand to 64 teams?",
    pickA: "1971",
    pickB: "1979",
    pickC: "1985",
    pickD: "1989",
    answer: "1985"},
{
    question: "In the 1990 NCAA Tourney, #1 seed Michigan State was taken into overtime and almost became the first #1 to lose to a #16.  Who took them to OT?",
    pickA: "Murry State",
    pickB: "Harvard",
    pickC: "Butler",
    pickD: "Hampton",
    answer: "Murry State"}
];

// this function loads the first quiz question and hides the other sections
function runQuiz() {
    homepageEL.style.display = "none";
    completePageEl.style.display = "none";
    highScores.style.display = "none";
    quizPageEl.style.display = "block";
    for (i = 0; i < quizQuestions.length; i++) {
        questionEl.textContent = quizQuestions[i].question;
        answerAButton.textContent = quizQuestions[i].pickA;
        answerBButton.textContent = quizQuestions[i].pickB;
        answerCButton.textContent = quizQuestion[i].pickC;
        answerDButton.textContent = quizQuestions[i].pickD;
        gradeAnswer();
        
    }
}

// sets the timer to 75 seconds
var timerLeft = setInterval(function(){
    timerDiv.textContent = "Time: " + timerCountdown;
    timerCountdown--;},1000);

// checks to see if the answer is correct.
// this function gradeAnswer is called on the clik of one answer button
// if correct then add 1 to the score variable
function gradeAnswer(userAnswer){
    correctAnswer = quizQuestion[i].answer;

    if (correctAnswer === userAnswer && quizQuestions.length !== i) {
        score++;
    }
    
};

startButton.addEventListener("click", runQuiz);