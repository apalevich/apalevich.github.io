(function() {
    
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


    // functions declaration
    
    function buildQuiz () {
        // a place to store HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we will want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){
                // add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            
            // add this question and its answer to the output, with slide effect

            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
                
        });

        // combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
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
                if(userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainers[questionNumber].style.color = 'lightgreen';
                } else {
                    answerContainers[questionNumber].style.color = 'red';
                }

            });
        // show number of correct answers
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    }


    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === n) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }
    
    // selecting required HTML elements
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    //let's display the quiz right away
    buildQuiz();
    
    // pagination
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

})();