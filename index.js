
let container_main = document.querySelector('.main')
let container_start = document.querySelector('.start')

let start_button = document.querySelector('.start-btn');
let question_field = document.querySelector('.question');
let answer_buttons = document.querySelectorAll('.answer');
let countQuestion = 0;

container_main.style.display = 'none'
container_start.style.display = 'flex'


class Question {
    constructor(question, correct, answer_1, answer_2, answer_4, answer_5) {
        this.question = question;
        this.correct = correct;
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ];
    }
    
    display() {
        // Для перемішування запитань
        const shuffledAnswers = this.answers.slice().sort(() => Math.random() - 0.5);
        
        // показуємо запитання + відповіді
        question_field.innerHTML = this.question;
        for (let i = 0; i < shuffledAnswers.length; i += 1) {
            answer_buttons[i].innerHTML = shuffledAnswers[i];
            console.log(shuffledAnswers[i]);
        }
    }
}

let spisok_questions = [
    new Question("Коли створили Roblox", "2004 р", "2006 р", "2010 р", "2009 р", "2024 р"),
    new Question("Коли з'явився біг", "776р до н.е", "778р до н.е", "800р до н.е", "770р до н.е", "775р до н.е"),
    new Question("Якого року Майнкрафт ", "2009 р", "2006", "2004", "2012", "2008"),
    new Question("Якого року з'явився шоколад ", " 1995 р", "1990 р", "1987", "1996", "1989"),
    new Question("Яка столиця України?", "Київ", "Харків", "Одеса", "Львів", "Дніпро"),
    new Question("Яка найбільша річка в світі?", "Амазонка", "Ніл", "Міссісіпі", "Янцзи", "Волга"),
];
let total_answers_given = 0;

let current_question;

start_button.addEventListener('click', function() {
    container_main.style.display = 'flex'
    container_start.style.display = 'none'

    current_question = spisok_questions[total_answers_given];
    current_question.display();

})

for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно");
            answer_buttons[i].classList.add('right');
            setTimeout(function() {
                answer_buttons[i].classList.remove('right');
            }, 100); // видаляємо клас 
        } else {
            console.log("Неправильно");
            answer_buttons[i].classList.add('wrong');
            setTimeout(function() {
                answer_buttons[i].classList.remove('wrong');
            }, 100); // видаляємо клас 
        }

        total_answers_given += 1;
        if (total_answers_given === spisok_questions.length) {
            total_answers_given = 0; // обнуляємо індекс запитання
        }
        current_question = spisok_questions[total_answers_given];
        current_question.display();
    });
}