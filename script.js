
function buildQuiz() {
    
	const output = [];

    
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        
        const answers = [];

        
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

    
    const answerContainers = quizContainer.querySelectorAll('.answers');

    
    let numCorrect = 0;

    
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
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

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
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