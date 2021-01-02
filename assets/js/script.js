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
var highScoresPage = document.getElementById("highScores");
var highListEl = document.getElementById("highList");
var highListItemEl = document.getElementById("highListItem");
var highInitialsDiv = document.getElementById("highInitials");
var highScoreDiv = document.getElementById("highScore");
var homepageButton = document.getElementById("homepageBtn");
var clearScoresButton = document.getElementById("clearScores");
var timerCountdown = 75;
var correctAnswer;
var score = 0;
var questionArrayIndex = 0;

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
    highScoresPage.style.display = "none";
    quizPageEl.style.display = "block";
    // sets the timer to 75 seconds
    var timerLeft = setInterval(function(){
        timerDiv.textContent = "Time: " + timerCountdown;
        timerCountdown--;
        if (timerCountdown === 0) {
            quizComplete();
        }},1000);
    iterateQuizArray();
}


function quizComplete() {
    homepageEL.style.display = "none";
    quizPageEl.style.display = "none";
    completePageEl.style.display = "block";
    highScoresPage.style.display = "none";
    scoreSpan.textContent = score;
    console.log(score);
}

submitScore.addEventListener("click", function submitUserScore() {
    if (initialsInput.value === "") {
        alert("You must enter your initials.")
    }
    else {
        var highScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];
        var currentName = initialsInput.value.trim();
        var currentEntry = {
            name : currentName,
            score : score
        };
        highScoreList.push(currentEntry);
        debugger;
        localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
        debugger;
        homepageEL.style.display = "none";
        quizPageEl.style.display = "none";
        completePageEl.style.display = "none";
        highScoresPage.style.display = "block";
        highScorePageList();        
    }
});

function highScorePageList() {
    debugger; 
    highListEl.innerHTML = "";
    var scores = JSON.parse(localStorage.getItem("highScoreList")) || [];
    for (i = 0; i < scores.length; i++) {
        var newInitialsDiv = document.createElement("div");
        var newScoreDiv = document.createElement("div");
        newInitialsDiv.textContent = scores[i].currentName;
        newScoreDiv.textContent = scores[i].score;
        highInitialsDiv.appendChild(newInitialsDiv);
        highScoreDisplayScore.appendChild(newScoreDiv);
    }
}

function gradeAnswer(userAnswer){
    correctAnswer = quizQuestions[questionArrayIndex].answer;
    console.log(correctAnswer);
    console.log(userAnswer);
    console.log(quizLength);
    if (correctAnswer === userAnswer){
        score++;
        console.log(score);
        rightWrongEl.textContent = "CORRECT!";
        questionArrayIndex++;
    } 
    else {
        console.log(score);
        rightWrongEl.textContent = "INCORRECT!"
        questionArrayIndex++;
        timerCountdown -= 10;
    }
    
    if (quizLength !== questionArrayIndex) {
        console.log(questionArrayIndex);
        iterateQuizArray();
    }
    else {
        quizComplete();
    }
}

function clearAllScores() {
    localStorage.removeItem("highScoreList");
    highListEl.innerHTML = "";
}

function goHomepage() {
    homepageEL.style.display = "block";
    quizPageEl.style.display = "none";
    completePageEl.style.display = "none";
    highScoresPage.style.display = "none";
}

startButton.addEventListener("click", runQuiz);
clearScoresButton.addEventListener("click", clearAllScores);
homepageButton.addEventListener("click", goHomepage);