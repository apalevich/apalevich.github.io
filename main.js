// selecting required HTML elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// required functions declaration
function buildQuiz () {
    // a place to store HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // we will want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){
                // add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="$letter">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            
            // add this question and its answer to the output

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    )

    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults () {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers')

    // let's track user's answers
    let numCorrect = 0;

     // for each question...
     myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name:question'+questionNumber+']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if(userAnswer ===currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }

        });
    // show number of correct answers
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}


//let's display the quiz right now
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// adding some questions
const myQuestions = [
    {
        question: 'Who is the strongest?',
        answers: {
            a: 'Batman',
            b: 'Superman',
            c: 'Aquaman'
        },
        correctAnswer: 'b'
    },
    {
        question: 'When the Santa Claus come?',
        answers: {
            a: 'Summer',
            b: 'Fall',
            c: 'Winter',
            d: 'Spring'
        },
        correctAnswer: 'c'
    }
];

