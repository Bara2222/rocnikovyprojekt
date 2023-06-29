const questions = [
    {
        question:"Termín pro funkci, která umožňuje tisknout obrázky a dokumenty přímo ze zařízení?",
        answers: [
            {text: "Energy Star", correct: false},
            {text: "Picture Bridge", correct: true},
            {text: "Dot per inch", correct: false},
            {text: "Cost per page", correct: false},
        ]
    },
    {
        question:"Co nepatří do typu zastaralých tiskáren?",
        answers: [
            {text: "Bubnová", correct: false},
            {text: "Řetězová", correct: false},
            {text: "Znaková", correct: false},
            {text: "Laserová", correct: true},
        ]
    },
    {
        question:"Tiskárna je ......... zařízení?",
        answers: [
            {text: "Levé", correct: false},
            {text: "Výstupní", correct: true},
            {text: "Vstupní", correct: false},
            {text: "Spodní", correct: false},
        ]
    },    
    {
        question:"Kdo vynalezl první počítačovou tiskárnu?",
        answers: [
            {text: "Charles Babbage", correct: true},
            {text: "Emile Berliner", correct: false},
            {text: "Antonio Meucci", correct: false},
            {text: "Johnem Vincentem Atanasoffem", correct: false},
        ]
    },
    {
        question:"V kterém století byla vynalezena první tiskárna?",
        answers: [
            {text: "V 20. století", correct: false},
            {text: "V 19. století", correct: true},
            {text: "V 17. století", correct: false},
            {text: "V 18. století", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();