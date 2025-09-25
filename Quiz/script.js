const questionSets = {
    math: [
        { question: "What is 7 + 8?", options: ["13", "15", "14", "16"], answer: 1 },
        { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: 2 },
        { question: "What is 12 × 12?", options: ["124", "144", "134", "154"], answer: 1 },
        { question: "What is 100 divided by 4?", options: ["20", "25", "30", "40"], answer: 1 },
        { question: "What is 9 × 9?", options: ["81", "72", "99", "90"], answer: 0 },
        { question: "What is 15% of 200?", options: ["20", "30", "25", "35"], answer: 1 },
        { question: "What is the value of π (pi) to 2 decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], answer: 1 },
        { question: "What is 5 squared?", options: ["10", "20", "25", "15"], answer: 2 },
        { question: "What is 0 divided by 5?", options: ["0", "5", "Undefined", "1"], answer: 0 },
        { question: "What is the next prime after 7?", options: ["9", "10", "11", "13"], answer: 2 }
    ],
    science: [
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
        { question: "What is H2O commonly known as?", options: ["Oxygen", "Hydrogen", "Water", "Salt"], answer: 2 },
        { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo", "Marie Curie"], answer: 1 },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Skin", "Liver", "Brain"], answer: 1 },
        { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
        { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Gd", "Go"], answer: 0 },
        { question: "Which organ pumps blood?", options: ["Liver", "Heart", "Kidney", "Lung"], answer: 1 },
        { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: 2 },
        { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], answer: 1 }
    ],
    brain: [
        { question: "What comes next in the sequence: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], answer: 2 },
        { question: "Which word is the odd one out? Apple, Banana, Carrot, Grape", options: ["Apple", "Banana", "Carrot", "Grape"], answer: 2 },
        { question: "If you rearrange the letters 'CIFAIPC', you get the name of a(n):", options: ["City", "Animal", "Ocean", "Country"], answer: 2 },
        { question: "Which is heavier: 1kg of feathers or 1kg of iron?", options: ["Feathers", "Iron", "Both weigh the same", "None"], answer: 2 },
        { question: "What is the next number in the series: 1, 1, 2, 3, 5, ?", options: ["8", "7", "6", "9"], answer: 0 },
        { question: "Which shape has 6 sides?", options: ["Pentagon", "Hexagon", "Octagon", "Triangle"], answer: 1 },
        { question: "What is the antonym of 'brave'?", options: ["Coward", "Strong", "Bold", "Smart"], answer: 0 },
        { question: "Which is not a primary color?", options: ["Red", "Blue", "Green", "Yellow"], answer: 2 },
        { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: 1 },
        { question: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: 1 }
    ],
    history: [
        { question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"], answer: 1 },
        { question: "In which year did India gain independence?", options: ["1945", "1947", "1950", "1952"], answer: 1 },
        { question: "Who led the Dandi March?", options: ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Lal Bahadur Shastri"], answer: 2 },
        { question: "Which empire built the Taj Mahal?", options: ["Mughal", "Maurya", "Gupta", "Chola"], answer: 0 },
        { question: "Who was known as the Iron Man of India?", options: ["Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad", "B.R. Ambedkar"], answer: 1 },
        { question: "Which movement did Mahatma Gandhi start in 1942?", options: ["Non-Cooperation", "Quit India", "Swadeshi", "Civil Disobedience"], answer: 1 },
        { question: "Who wrote the book 'Discovery of India'?", options: ["Jawaharlal Nehru", "Rabindranath Tagore", "Sarojini Naidu", "C.V. Raman"], answer: 0 },
        { question: "Which city was the capital of British India before Delhi?", options: ["Mumbai", "Kolkata", "Chennai", "Hyderabad"], answer: 1 },
        { question: "Who was the last Governor-General of independent India?", options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Robert Clive"], answer: 1 },
        { question: "Which battle marked the beginning of British rule in India?", options: ["Battle of Plassey", "Battle of Panipat", "Battle of Buxar", "Battle of Haldighati"], answer: 0 }
    ],
    mythology: [
        { question: "Who is the king of gods in Hindu mythology?", options: ["Vishnu", "Shiva", "Indra", "Brahma"], answer: 2 },
        { question: "Who wrote the Mahabharata?", options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"], answer: 1 },
        { question: "Who is the wife of Lord Rama?", options: ["Radha", "Sita", "Draupadi", "Parvati"], answer: 1 },
        { question: "Which demon was killed by Lord Krishna?", options: ["Kansa", "Ravana", "Bali", "Vritra"], answer: 0 },
        { question: "Who is the elephant-headed god?", options: ["Kartikeya", "Ganesha", "Hanuman", "Agni"], answer: 1 },
        { question: "Who is the mother of Ganesha?", options: ["Lakshmi", "Parvati", "Saraswati", "Radha"], answer: 1 },
        { question: "Who is the main goddess in Durga Puja?", options: ["Lakshmi", "Saraswati", "Durga", "Parvati"], answer: 2 },
        { question: "Who is the son of Arjuna in Mahabharata?", options: ["Abhimanyu", "Karna", "Bhima", "Nakula"], answer: 0 },
        { question: "Who is the river goddess in Hindu mythology?", options: ["Ganga", "Yamuna", "Saraswati", "Narmada"], answer: 0 },
        { question: "Who is the monkey god in Ramayana?", options: ["Hanuman", "Sugriva", "Vali", "Jambavan"], answer: 0 }
    ],
    cricket: [
        { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Kapil Dev"], answer: 1 },
        { question: "Which country won the first Cricket World Cup?", options: ["India", "Australia", "West Indies", "England"], answer: 2 },
        { question: "Who was the captain of India in 1983 World Cup?", options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Ravi Shastri"], answer: 0 },
        { question: "Who has scored the most runs in international cricket?", options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Brian Lara"], answer: 1 },
        { question: "Which bowler has the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Glenn McGrath"], answer: 0 },
        { question: "Who hit six sixes in an over in T20 World Cup?", options: ["Yuvraj Singh", "MS Dhoni", "Rohit Sharma", "Virender Sehwag"], answer: 0 },
        { question: "Which stadium is known as the 'Mecca of Cricket'?", options: ["Eden Gardens", "Lords", "MCG", "Wankhede"], answer: 1 },
        { question: "Who is the fastest Indian bowler to 100 ODI wickets?", options: ["Jasprit Bumrah", "Mohammed Shami", "Irfan Pathan", "Zaheer Khan"], answer: 1 },
        { question: "Who won the IPL 2020?", options: ["Mumbai Indians", "Delhi Capitals", "Chennai Super Kings", "Royal Challengers Bangalore"], answer: 0 },
        { question: "Who is the only Indian to score a triple century in Test cricket?", options: ["Virender Sehwag", "Sachin Tendulkar", "Rahul Dravid", "VVS Laxman"], answer: 0 }
    ]
};

let questions = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;
let selectedOption = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');
const timerEl = document.getElementById('time');
const scoreBox = document.getElementById('score-box');
const scoreEl = document.getElementById('score');
const quizBox = document.getElementById('quiz-box');
const restartBtn = document.getElementById('restart-btn');
const sectionSelect = document.getElementById('section-select');
const sectionBtns = document.querySelectorAll('.section-btn');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function pickRandomQuestions(array, count) {
    return shuffle([...array]).slice(0, count);
}

sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
        questions = pickRandomQuestions(questionSets[section], 10);
        currentQuestion = 0;
        score = 0;
        sectionSelect.style.display = 'none';
        quizBox.style.display = 'block';
        scoreBox.style.display = 'none';
        showQuestion();
    });
});

function startTimer() {
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false, true);
            nextBtn.disabled = false;
            disableOptions();
        }
    }, 1000);
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    nextBtn.disabled = true;
    selectedOption = null;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx, btn);
        optionsEl.appendChild(btn);
    });
    startTimer();
}

function selectOption(idx, btn) {
    if (selectedOption !== null) return;
    selectedOption = idx;
    disableOptions();
    const q = questions[currentQuestion];
    if (idx === q.answer) {
        btn.classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        btn.classList.add('incorrect');
        optionsEl.children[q.answer].classList.add('correct');
        showFeedback(false);
    }
    clearInterval(timer);
    nextBtn.disabled = false;
}

function disableOptions() {
    Array.from(optionsEl.children).forEach(btn => {
        btn.disabled = true;
    });
}

function showFeedback(isCorrect, timeUp = false) {
    if (timeUp) {
        feedbackEl.textContent = "Time's up!";
        optionsEl.children[questions[currentQuestion].answer].classList.add('correct');
    } else {
        feedbackEl.textContent = isCorrect ? "Correct!" : "Incorrect!";
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    quizBox.style.display = 'none';
    scoreBox.style.display = 'block';
    scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.onclick = () => {
    sectionSelect.style.display = 'block';
    quizBox.style.display = 'none';
    scoreBox.style.display = 'none';
};
