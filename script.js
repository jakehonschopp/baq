
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
        a: "Steven Spielberg",
        b: "James Cameron",
        c: "Michael Mann",
        d: "Francis Ford Copola"
      },
      correctAnswer: "a"
    },
    {
      question: "Do sharks have bones?",
      answers: {
        a: "Yes",
        b: "Of course, are you dumb?",
        c: "Tons of the stuff",
        d: "No"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the world's biggest shark?",
      answers: {
        a: "Lemon",
        b: "Great White",
        c: "Tiger",
        d: "Whale"
      },
      correctAnswer: "d"
    },
    {
      question: "Which is the best hockey team?",
      answers: {
        a: "Cincinnati Cyclones",
        b: "Chicago Blackhawks",
        c: "Pittsburgh Penguins",
        d: "San Jose Sharks"
      },
      correctAnswer: "d"
    },
    {
      question: "What is 'The Physical Impossibility of Death in the Mind of Someone Living'?",
      answers: {
        a: "A pretentious name for a piece of art",
        b: "An inspiring work of genius",
        c: "don't pick this answer",
        d: "the answer is a"
      },
      correctAnswer: "a"
    },
    {
      question: "To date, which is the most sold item on the hit show Shark Tank?",
      answers: {
        a: "Bombas socks (and t-shirts)",
        b: "Squatty Potty",
        c: "Ring Doorbell technology",
        d: "Kodiak Kakes"
      },
      correctAnswer: "a"
    },
    {
      question: "Have I, the maker of this quiz, ever eaten shark?",
      answers: {
        a: "Yes, I am a cultured individual and have visited Iceland. It was disgusting.",
        b: "Absolutely not",
        c: "I would never",
        d: "I never leave the house"
      },
      correctAnswer: "a"
    },

    {
      question: "Which animal has virtually a 360 degree field of vision?",
      answers: {
        a: "Puma",
        b: "Peacock",
        c: "Jayhawk",
        d: "Hammerhead shark"
      },
      correctAnswer: "d"
    },
    {
      question: "Which of these was Taylor Lautner's first ever role?",
      answers: {
        a: "Twilight",
        b: "Disney's HOLES",
        c: "The Adventures of Sharkboy and Lava Girl (3D)",
        d: "Grown Ups 2"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is the first DreamWorks Animation film that features no humans?",
      answers: {
        a: "Shark Tale",
        b: "My Shark and Me",
        c: "Shrek",
        d: "Jaws III"
      },
      correctAnswer: "a"
    },
    {
      question: "How much money did THE MEG cinematic film make?",
      answers: {
        a: "No money, this film isn't real.",
        b: "$530 million",
        c: "$100 million",
        d: "$16"
      },
      correctAnswer: "b"
    },
    {
      question: "Could my dog Olive beat up a shark?",
      answers: {
        a: "Of course, she's huge",
        b: "Absolutely",
        c: "Have you seen a shark?",
        d: "She is terrified of water"
      },
      correctAnswer: "d"
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
      answerContainers[questionNumber].style.color = 'darkgreen';
    }

    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}.Thank you for taking the shark quiz :) Fun fact: Sharks have been around for over 400 million years, even longer than dinosaurs.`;
}; 

// function to build the quiz and event listener to show the results upon hitting the submit button
buildQuiz();
submitButton.addEventListener('click', showResults); 