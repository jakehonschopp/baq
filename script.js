
const output = [];
const answers = [];

const answerContainers = quizContainer.querySelectorAll('.answers');
let numCorrect = 0;

const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [



function buildQuiz() {
  myQuestions.forEach((currentQuestion, questionNumber) => { 
    for(letter in currentQuestion.answers){
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

        
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

    
  quizContainer.innerHTML = output.join('');
} 

function showResults() {

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    if(userAnswer === currentQuestion.correctAnswer){
       
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
    }
      
    else{
        
      answerContainers[questionNumber].style.color = 'red';
    }
  });

    
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


{
  question: "Who directed the movie Jaws?",
  answers: {
    a: "Spielberg",
    b: "Cameron",
    c: "Mann",
    d: "Copola"
  },
  correctAnswer: "a"
},
{
  question: "How many Harry Potter movies are there?",
  answers: {
    a: "5",
    b: "7",
    c: "8",
    d: "6"
  },
  correctAnswer: "c"
},
{ 
  question: "What is the highest grossing R rated movie of all time?",
  answers: {
    a: "Joker",
    b: "Jaws",
    c: "Hangover",
    d: "Hangover 2"
  },
  correctAnswer: "a"
}
]; 

  
buildQuiz();
submitButton.addEventListener('click', showResults);