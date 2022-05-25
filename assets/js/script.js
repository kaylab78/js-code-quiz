var timerEl = document.getElementById("timer");
var startEl = document.getElementById("startBtn");
var introText = document.getElementById("intro");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var scoreText = document.getElementById("scoreText");
var initials = document.getElementById("initials");
var initialsInput = document.getElementById("initialsInput");
var feedback = document.getElementById("feedback");
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
    introText.setAttribute("style", "display: none");
    startEl.setAttribute("style", "display: none");
    // startQuiz();
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

// function startQuiz();

// function renderQuestions();

// function renderChoices();

// function scoreDisplay();

// function saveScore();