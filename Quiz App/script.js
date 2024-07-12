const questions = [
  {
    question: "What is the first pillar of Islam?",
    options: ["Salat", "Zakat", "Shahada", "Hajj"],
    correctAnswer: "Shahada",
  },
  {
    question: "How many times a day are Muslims required to pray?",
    options: ["Three", "Four", "Five", "Six"],
    correctAnswer: "Five",
  },
  {
    question: "Which month do Muslims fast during the daylight hours?",
    options: ["Muharram", "Ramadan", "Dhul-Hijjah", "Rajab"],
    correctAnswer: "Ramadan",
  },
  {
    question: "What is the holy book of Islam?",
    options: ["Torah", "Bible", "Quran", "Gita"],
    correctAnswer: "Quran",
  },
  {
    question: "Who is the last prophet in Islam?",
    options: [
      "Prophet Moses",
      "Prophet Jesus",
      "Prophet Abraham",
      "Prophet Muhammad",
    ],
    correctAnswer: "Prophet Muhammad",
  },
  {
    question: "In which city was the Prophet Muhammad born?",
    options: ["Medina", "Jerusalem", "Mecca", "Baghdad"],
    correctAnswer: "Mecca",
  },
  {
    question: "What is the second largest religion in the world?",
    options: ["Christianity", "Hinduism", "Islam", "Buddhism"],
    correctAnswer: "Islam",
  },
  {
    question: "What is the meaning of 'Islam'?",
    options: ["Peace", "Submission", "Faith", "Charity"],
    correctAnswer: "Submission",
  },
  {
    question: "How many chapters (Surahs) are there in the Quran?",
    options: ["114", "120", "110", "108"],
    correctAnswer: "114",
  },
  {
    question: "What is the Arabic term for charity or almsgiving?",
    options: ["Sawm", "Hajj", "Zakat", "Salat"],
    correctAnswer: "Zakat",
  },
];
const question = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
// currentQuestionIndex++;
console.log(questions[currentQuestionIndex].question);

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currQuestion.question;
  currQuestion.options.forEach((answer) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer;
    answerBtns.appendChild(button);

    if (answer === currQuestion.correctAnswer) {
      let correct = currQuestion.correctAnswer;
      button.dataset.correct = correct;
    }
    button.addEventListener("click", selectedAnswer);
  });
};
const selectedAnswer = (e) => {
  let selected = e.target;
  console.log(selected.innerText);
  if (selected.innerText === questions[currentQuestionIndex].correctAnswer) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    let correct = questions[currentQuestionIndex].correctAnswer;

    if (button.dataset.correct === correct) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};
const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
const showScore = () => {
  resetState();
  question.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
};
startQuiz();
