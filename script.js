
// here's where we grab things we need from the HTML
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// we need a const for our questions in the quiz 
// we use object literals to represent the questions and an array to hold all of them, 
// so that it's easier to iterate over
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


// function for the quiz to be built
// we need a variable to store the HTML output (output), a loop for each question (myQuestions.forEach),
// a variable to store the list of answers (answers), a loop for each possible answer, a radio button
// for them to click on, a place to add the question and its answers to the output, 
// then lastly, we have to combine the output list into one string and put it on the page with output.join
function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
          );
      }; 
      output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
      );
  }
  );


  quizContainer.innerHTML = output.join('');
};  

// this is the function to show the results on the page. We have to gather answer containers, 
// keep track of user's answers, loop through each question with forEach, find the selected answer, 
// if the answer is correct, we add it to the total and mark it green. If it is not, we don't add it
// to the total and mark it red. We then show the correct total number
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
}; 

// function to build the quiz and event listener to show the results upon hitting the submit button
buildQuiz();
submitButton.addEventListener('click', showResults); 