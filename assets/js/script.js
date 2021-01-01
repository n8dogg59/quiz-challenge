var homepageEL = document.getElementById("homepage");
var startButton = document.getElementById("startBtn");
var quizPageEl = document.getElementById("quizPage") 
var timerDiv = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerAButton = document.getElementById("answerA");
var answerBButton = document.getElementById("answerB");
var answerCButton = document.getElementById("answerC");
var answerDButton = document.getElementById("answerD");
var rightWrongEl = document.getElementById("rightWrong");
var checkAnswer; // this will be the correct answer in the question array and be listed 5th
var completePageEl = document.getElementById("completePage");
var scoreSpan = document.getElementById("score");
var submitScore = document.getElementById("initialBtn");
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
var questionArrayIndex = 0;

// below is the array that holds all the quiz questions
// questions are taken off of https://www.tutorialspoint.com/javascript/ and https://www.topzenith.com/2020/04/javascript-quiz-with-questions-and-answers.html
var quizQuestions = [{
    question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    pickA: "last()",
    pickB: "put()",
    pickC: "push()",
    pickD: "none of the above",
    answer: "pickC"},
{
    question: "Which built-in method returns the string representation of the number's value?",
    pickA: "toValue()",
    pickB: "toNumber()",
    pickC: "toString",
    pickD: "none of the above",
    answer: "pickC"},
{
    question: "Which of the following function of String object extracts a section of a string and returns a new string?",
    pickA: "slice()",
    pickB: "split()",
    pickC: "replace()",
    pickD: "search()",
    answer: "pickA"},
    {
    question: "Which of the following function of String object returns the calling string value converted to upper case?",
    pickA: "toLocaleUpperCase()",
    pickB: "toUpperCase()",
    pickC: "toString()",
    pickD: "substring()",
    answer: "pickB"},
/*    {
    question: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
    pickA: "indexOf()",
    pickB: "join()",
    pickC: "lastIndexOf()",
    pickD: "map()",
    answer: "pickA"},
    {
    question: "Which of the following function of Array object adds and/or removes elements from an array?",
    pickA: "toSource()",
    pickB: "sort()",
    pickC: "upshift()",
    pickD: "splice()",
    answer: "pickD"},
    {
    question: "What is the HTML tag under which one can write javaScript code?",
    pickA: "<javascript>...</javascript>",
    pickB: "<script>...</script>",
    pickC: "<scripted>...</scripted>",
    pickD: "<js>...</js>",
    answer: "pickB"},
    {
    question: "Which of the following is the correct syntax to display 'purduesports.com' in an alert box?",
    pickA: "alertbox('purduesports.com')",
    pickB: "msgbox('purduesports.com')",
    pickC: "alert('purduesports.com')",
    pickD: "msg('purduesports.com')",
    answer: "pickC"},
    {
    question: "What is the difference between '==' and '==='?",
    pickA: "Both B & C",
    pickB: "Both operators are the same",
    pickC: "'==' checks only for equality in value whereas '===' is a strictre equality test",
    pickD: "None of the above",
    answer: "pickC"},
    {
    question: "What is the output of below? 33 == 33.0",
    pickA: "True",
    pickB: "33",
    pickC: "False",
    pickD: "None of the above",
    answer: "pickA"},
    {
    question: "Javascript is ______________ language.",
    pickA: "an interpreted",
    pickB: "a compiled",
    pickC: "a translated",
    pickD: "none of the above",
    answer: "pickA"},
    {
    question: "What is the correct file extension for javaScript files?",
    pickA: ".java",
    pickB: ".js",
    pickC: ".javascript",
    pickD: ".script",
    answer: "pickB"},    */
];

var quizLength = quizQuestions.length;
console.log(quizLength);
function iterateQuizArray () {
    var currentQuestion = quizQuestions[questionArrayIndex];
    questionEl.textContent = currentQuestion.question;
    answerAButton.textContent = currentQuestion.pickA;
    answerBButton.textContent = currentQuestion.pickB;
    answerCButton.textContent = currentQuestion.pickC;
    answerDButton.textContent = currentQuestion.pickD;
}

// this function loads the first quiz question and hides the other sections
function runQuiz() {
    homepageEL.style.display = "none";
    completePageEl.style.display = "none";
    highScores.style.display = "none";
    quizPageEl.style.display = "block";
    // sets the timer to 75 seconds
    var timerLeft = setInterval(function(){
        timerDiv.textContent = "Time: " + timerCountdown;
        timerCountdown--;},1000);
    iterateQuizArray();
}


function quizComplete() {
    homepageEL.style.display = "none";
    quizPageEl.style.display = "none";
    completePageEl.style.display = "block";
    highScores.style.display = "none";
    scoreSpan.textContent = score;
}

submitScore.addEventListener("click", function submitUserScore() {
    debugger;
    if (initialsInput.value === "") {
        alert("You must enter your initials.")
        return false;
    }
})

function gradeAnswer(userAnswer){
    correctAnswer = quizQuestions[questionArrayIndex].answer;
    console.log(correctAnswer);
    console.log(userAnswer);
    console.log(quizLength);
    if (correctAnswer === userAnswer){
        score++;
        console.log(score);
        rightWrongEl.textContent = "CORRECT";
        questionArrayIndex++;
    } 
    else {
        console.log(score);
        rightWrongEl.textContent = "INCORRECT!"
        questionArrayIndex++;
    }
    
    if (quizLength !== questionArrayIndex) {
        console.log(questionArrayIndex);
        iterateQuizArray();
    }
    else {
        quizComplete();
    }
};

startButton.addEventListener("click", runQuiz);