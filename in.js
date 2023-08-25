const quiz = [
  {
    question: "1.who is inventor of javascript?",
    options: ["Brendan Eich", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: 0
  },
  {
    question: "2.How can a datatype be declared to be a constant type?",
    options: ["const", "let", "var", "constant"],
    answer: 0
  },
  {
    question: "3 What keyword is used to check whether a given property is valid or not?",
    options: ["in", "of", "valid", "is in"],
    answer: 0
  }
];
let currentQuestion = 0;
let score = 0;
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  questionElement.textContent = quiz[currentQuestion].question;
  optionsElement.innerHTML = "";
  quiz[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", () => {
      checkAnswer(index);
    });
  });
}
function checkAnswer(selectedOption) {
  if (selectedOption === quiz[currentQuestion].answer) {
    score++;
  }
}
function goToPreviousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}
function goToNextQuestion() {
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    displayQuestion();
  }
}
function submitQuiz() {
  const quizContainer = document.getElementById("quiz");
  const scoreElement = document.getElementById("score");
  quizContainer.classList.add("hidden");
  scoreElement.classList.remove("hidden");
  scoreElement.textContent = `You scored ${score} out of ${quiz.length}`;
}
const previousButton = document.getElementById("previous-btn");
previousButton.addEventListener("click", goToPreviousQuestion);
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", goToNextQuestion);
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", submitQuiz);
displayQuestion();