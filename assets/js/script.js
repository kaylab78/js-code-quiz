var timerEl = document.getElementById("timer");
var startEl = document.getElementById("startBtn");
var introEl = document.getElementById("intro");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var scoreTextEl = document.getElementById("scoreText");
var initialsEl = document.getElementById("initials");
var initialsInput = document.getElementById("initialsInput");
var feedbackEl = document.getElementById("feedback");
var setInterval;
var timeLeft = 40;
var currentIndex = 0;

// Countdown makes sure that seconds remaining don't go negative.
function countdown() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    if (timeLeft > 0) {
        timeLeft--
    } else if (timeLeft < 0) {
        timeLeft = 0
    } else {
        timerEl.textContent = "You've run out of time. Try again!"
        // scoreDisplay();
    }
};

// The intro text and start button disappear when the start button is clicked.
function timer() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    setInterval = setInterval(countdown, 1000);
    introEl.setAttribute("style", "display: none");
    startEl.setAttribute("style", "display: none");
    startQuiz();
};

startEl.addEventListener("click", timer);

var quizQuestions = [
    {
        question: "Which is NOT a commonly used JavaScript data type?",
        choices: ["String", "Boolean", "Alert", "Number"],
        answer: "Alert"
    },
    {
        question: "The condition in an if/else statement is enclosed in which of the following?",
        choices: ["Quotation Marks", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Curly Brackets"
    },
    {
        question: "Which of the following can be stored in arrays in JavaScript?",
        choices: ["Numbers & Strings", "Booleans", "Other Arrays", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "When being assigned to a variable, which of the following must string values be enclosed with?",
        choices: ["Commas", "Curly Brackets", "Quotation Marks", "Parentheses"],
        answer: "Quotation Marks"
    }
];

function startQuiz() {
    showQuestion();
    // checkAnswer();
};

function showQuestion() {
    for (var i = 0; i < quizQuestions.length; i++) {
        var showQuestion = quizQuestions[i].question;
        var showChoices = quizQuestions[i].choices;
    };

    questionEl.textContent = showQuestion;
    choicesEl.textContent = showChoices;

    choicesEl.addEventListener("click", checkAnswer);
    feedbackEl.setAttribute("style", "display: none");
}

// How do I check to see if they CLICKED the correct answer?
function checkAnswer() {
    var answer = quizQuestions[currentIndex].answer

    if (this.value !== quizQuestions[currentIndex].answer) {
        timeLeft -= 10;
        // feedbackEl.setAttribute("style", "display: block");
        feedbackEl.textContent = "Incorrect!"
    } else {
        // feedbackEl.setAttribute("style", "display: block");
        feedbackEl.textContent = "Correct!"
    }

    currentIndex++
    showQuestion();
};

// function scoreDisplay();

// function saveScore();