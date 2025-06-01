// Application State
const appState = {
    currentSection: 'dashboard',
    currentTheme: 'theme1',
    flashcards: [],
    currentCardIndex: 0,
    filteredCards: [],
    quiz: {
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        isActive: false
    },
    progress: {
        flashcardsStudied: 0,
        quizzesCompleted: 0,
        averageScore: 0,
        plannerProgress: 0
    }
};

// Comprehensive Flashcards Data
const flashcardsData = [
    // Definitions
    { front: "What is opportunity cost?", back: "The value of the next best alternative forgone when making a choice", category: "definitions" },
    { front: "Define scarcity", back: "The fundamental economic problem where unlimited wants exceed limited resources", category: "definitions" },
    { front: "What is a positive externality?", back: "A benefit to a third party not involved in the economic transaction, leading to under-consumption/production", category: "definitions" },
    { front: "What is a negative externality?", back: "A cost imposed on a third party not involved in the economic transaction, leading to over-consumption/production", category: "definitions" },
    { front: "Define market failure", back: "When the free market mechanism fails to allocate resources efficiently, leading to welfare loss", category: "definitions" },
    { front: "What is government failure?", back: "When government intervention leads to a more inefficient allocation of resources than the free market", category: "definitions" },
    { front: "Define consumer surplus", back: "The difference between what consumers are willing to pay and what they actually pay", category: "definitions" },
    { front: "What is producer surplus?", back: "The difference between the market price and the lowest price producers are willing to accept", category: "definitions" },
    { front: "Define inflation", back: "A sustained increase in the general price level of goods and services in an economy", category: "definitions" },
    { front: "What is structural unemployment?", back: "Unemployment caused by a mismatch between skills workers have and skills demanded by employers", category: "definitions" },
    { front: "Define fiscal policy", back: "Government use of spending and taxation to influence the economy", category: "definitions" },
    { front: "What is monetary policy?", back: "Central bank use of interest rates and money supply to influence the economy", category: "definitions" },
    
    // Formulas
    { front: "Formula for Price Elasticity of Demand (PED)", back: "PED = % change in quantity demanded / % change in price", category: "formulas" },
    { front: "Formula for Price Elasticity of Supply (PES)", back: "PES = % change in quantity supplied / % change in price", category: "formulas" },
    { front: "Formula for Income Elasticity of Demand (YED)", back: "YED = % change in quantity demanded / % change in income", category: "formulas" },
    { front: "Formula for Cross Elasticity of Demand (XED)", back: "XED = % change in Qd of good A / % change in price of good B", category: "formulas" },
    { front: "Components of Aggregate Demand", back: "AD = C + I + G + (X-M) where C=Consumption, I=Investment, G=Government spending, X=Exports, M=Imports", category: "formulas" },
    { front: "Multiplier formula", back: "Multiplier = 1/(1-MPC) = 1/MPS where MPC = marginal propensity to consume, MPS = marginal propensity to save", category: "formulas" },
    { front: "Real GDP formula", back: "Real GDP = Nominal GDP / Price Index × 100", category: "formulas" },
    { front: "Unemployment rate formula", back: "Unemployment rate = (Number of unemployed / Labour force) × 100", category: "formulas" },
    
    // Policies and Applications
    { front: "How does an indirect tax affect supply?", back: "Shifts supply curve leftward/upward, increasing price and decreasing quantity, creating tax revenue rectangle", category: "policies" },
    { front: "How does a subsidy affect supply?", back: "Shifts supply curve rightward/downward, decreasing price and increasing quantity, costs government money", category: "policies" },
    { front: "Effect of minimum wage above equilibrium", back: "Creates unemployment as quantity supplied of labor exceeds quantity demanded", category: "policies" },
    { front: "Effect of maximum price below equilibrium", back: "Creates shortage as quantity demanded exceeds quantity supplied", category: "policies" },
    { front: "How does increasing interest rates affect AD?", back: "Reduces consumption (higher saving incentive), reduces investment (higher borrowing costs), strengthens currency (reduces net exports)", category: "policies" },
    { front: "How does expansionary fiscal policy work?", back: "Increase government spending or cut taxes → increase AD → increase real GDP and employment (but may increase inflation)", category: "policies" },
    { front: "Supply-side policy examples", back: "Education and training, infrastructure investment, deregulation, reducing corporation tax, improving labor mobility", category: "policies" },
    { front: "Examples of market-based environmental policies", back: "Carbon taxes, tradeable pollution permits, congestion charging, removing fossil fuel subsidies", category: "policies" },
    
    // Key Concepts and Methods
    { front: "KAAE Method for exam answers", back: "Knowledge (define terms), Application (use data/examples), Analysis (chains of reasoning with diagrams), Evaluation (balanced judgement)", category: "definitions" },
    { front: "What is the multiplier effect?", back: "When an initial injection into the economy leads to a larger final increase in national income through rounds of spending", category: "definitions" },
    { front: "Characteristics of public goods", back: "Non-excludable (can't prevent consumption) and non-rival (one person's consumption doesn't reduce availability to others)", category: "definitions" },
    { front: "Functions of the price mechanism", back: "Signaling (information about shortages/surpluses), Incentivising (rewards for efficient production), Rationing (allocating scarce resources)", category: "definitions" },
    { front: "Types of unemployment", back: "Cyclical (economic downturns), Structural (skills mismatch), Frictional (job searching), Seasonal (time-dependent work)", category: "definitions" },
    { front: "Factors shifting LRAS rightward", back: "Improved technology, increased labor force, better education/training, improved infrastructure, discovery of natural resources", category: "policies" },
    
    // Real-world Examples
    { front: "UK Sugar Tax example", back: "Indirect tax on soft drinks with high sugar content - reduced consumption by 30% and improved public health outcomes", category: "policies" },
    { front: "COVID-19 supply shock example", back: "Pandemic disrupted global supply chains, shifting SRAS leftward, causing inflation and reduced output", category: "policies" },
    { front: "2008 Financial Crisis and AD", back: "Banking crisis reduced confidence and credit availability, shifting AD leftward, causing recession and unemployment", category: "policies" },
    { front: "UK Brexit and exchange rate", back: "Uncertainty reduced pound value, making exports cheaper but imports more expensive, affecting net exports component of AD", category: "policies" }
];

// Comprehensive Quiz Questions
const quizQuestionsData = [
    {
        question: "Which of the following would cause a rightward shift in the demand curve for normal goods?",
        options: ["A decrease in the price of the good", "An increase in consumer income", "An increase in the price of substitutes", "Both B and C"],
        correct: 3,
        explanation: "Both an increase in income for normal goods and an increase in the price of substitutes would shift the demand curve rightward. A decrease in price causes movement along the curve, not a shift.",
        theme: "theme1"
    },
    {
        question: "What type of unemployment occurs due to structural changes in the economy?",
        options: ["Cyclical unemployment", "Frictional unemployment", "Structural unemployment", "Seasonal unemployment"],
        correct: 2,
        explanation: "Structural unemployment occurs when there's a long-term mismatch between workers' skills and job requirements due to technological change or industrial restructuring.",
        theme: "theme2"
    },
    {
        question: "If the Price Elasticity of Demand (PED) for a good is -0.3, the demand is:",
        options: ["Perfectly elastic", "Elastic", "Inelastic", "Perfectly inelastic"],
        correct: 2,
        explanation: "PED of -0.3 means demand is inelastic because the absolute value (0.3) is less than 1. Consumers are relatively unresponsive to price changes.",
        theme: "theme1"
    },
    {
        question: "Which component of aggregate demand is most volatile?",
        options: ["Consumption (C)", "Investment (I)", "Government spending (G)", "Net exports (X-M)"],
        correct: 1,
        explanation: "Investment is the most volatile component of AD because it's highly sensitive to business confidence, interest rates, and economic expectations.",
        theme: "theme2"
    },
    {
        question: "A negative externality in production would cause:",
        options: ["Overproduction and welfare loss", "Underproduction and welfare loss", "Overproduction and welfare gain", "Underproduction and welfare gain"],
        correct: 0,
        explanation: "Negative externalities in production (like pollution) lead to overproduction because producers don't account for external costs, creating deadweight welfare loss.",
        theme: "theme1"
    },
    {
        question: "The multiplier effect is strongest when:",
        options: ["MPC is low", "MPS is high", "MPC is high", "Income is low"],
        correct: 2,
        explanation: "The multiplier = 1/(1-MPC). When MPC (marginal propensity to consume) is high, people spend more of additional income, creating larger multiplier effects.",
        theme: "theme2"
    },
    {
        question: "Which policy would be most effective for reducing inflation caused by excess demand?",
        options: ["Increasing government spending", "Reducing taxes", "Increasing interest rates", "Increasing money supply"],
        correct: 2,
        explanation: "Increasing interest rates reduces consumption and investment, shifting AD leftward and reducing demand-pull inflation.",
        theme: "theme2"
    },
    {
        question: "Public goods suffer from the free rider problem because they are:",
        options: ["Excludable and rival", "Non-excludable and rival", "Excludable and non-rival", "Non-excludable and non-rival"],
        correct: 3,
        explanation: "Public goods are non-excludable (can't prevent consumption) and non-rival (one person's use doesn't reduce availability), leading to free riding and under-provision.",
        theme: "theme1"
    },
    {
        question: "A supply-side policy aimed at increasing long-run economic growth would include:",
        options: ["Increasing income tax", "Reducing government spending", "Investing in education and training", "Increasing interest rates"],
        correct: 2,
        explanation: "Education and training improve human capital, increasing productivity and shifting LRAS rightward for sustainable long-term growth.",
        theme: "theme2"
    },
    {
        question: "When the government sets a maximum price below market equilibrium, the result is:",
        options: ["A surplus", "A shortage", "No change in quantity", "Increased producer surplus"],
        correct: 1,
        explanation: "A maximum price (price ceiling) below equilibrium creates shortage because quantity demanded exceeds quantity supplied at the controlled price.",
        theme: "theme1"
    },
    {
        question: "Which indicator best measures the standard of living?",
        options: ["Nominal GDP", "Real GDP", "Real GDP per capita", "Inflation rate"],
        correct: 2,
        explanation: "Real GDP per capita adjusts for both inflation and population size, providing the best measure of average living standards in a country.",
        theme: "theme2"
    },
    {
        question: "The UK's inflation target set by the Bank of England is:",
        options: ["1%", "2%", "3%", "4%"],
        correct: 1,
        explanation: "The Bank of England targets 2% inflation using CPI, believing this provides price stability while allowing for economic growth.",
        theme: "theme2"
    },
    {
        question: "Merit goods are typically:",
        options: ["Over-consumed due to positive externalities", "Under-consumed due to positive externalities", "Over-consumed due to negative externalities", "Consumed at efficient levels"],
        correct: 1,
        explanation: "Merit goods (like education, healthcare) generate positive externalities but are under-consumed because individuals don't fully value the external benefits.",
        theme: "theme1"
    },
    {
        question: "Which elasticity concept explains why farmers might oppose minimum wage increases?",
        options: ["Price elasticity of demand", "Price elasticity of supply", "Income elasticity of demand", "Cross elasticity of demand"],
        correct: 1,
        explanation: "If labor supply is inelastic (PES low), minimum wage increases lead to significant unemployment, which farmers want to avoid.",
        theme: "theme1"
    },
    {
        question: "Quantitative Easing (QE) involves:",
        options: ["Increasing government spending", "Reducing taxes", "Central bank buying government bonds", "Increasing interest rates"],
        correct: 2,
        explanation: "QE involves central bank purchasing government bonds to increase money supply and lower long-term interest rates when conventional monetary policy is ineffective.",
        theme: "theme2"
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadProgress();
    updateDashboard();
});

function initializeApp() {
    // Initialize flashcards
    appState.flashcards = [...flashcardsData];
    appState.filteredCards = [...flashcardsData];
    
    // Initialize quiz questions
    appState.quiz.questions = [...quizQuestionsData];
    
    // Set initial card
    if (appState.filteredCards.length > 0) {
        updateFlashcard();
    }
    
    // Update UI elements
    updateCardCounter();
    updateProgress();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav__item, [data-section]').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.dataset.section;
            if (section) {
                navigateToSection(section);
            }
        });
    });
    
    // Theme switching in notes
    document.querySelectorAll('.theme-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTheme(this.dataset.theme);
        });
    });
    
    // Flashcard controls
    document.getElementById('shuffle-cards').addEventListener('click', shuffleCards);
    document.getElementById('flip-card').addEventListener('click', flipCard);
    document.getElementById('next-card').addEventListener('click', nextCard);
    document.getElementById('prev-card').addEventListener('click', prevCard);
    document.getElementById('card-theme').addEventListener('change', filterCards);
    document.getElementById('flashcard').addEventListener('click', flipCard);
    
    // Quiz controls
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('prev-question').addEventListener('click', prevQuestion);
    document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
    
    // Planner checkboxes
    document.querySelectorAll('.day-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updatePlannerProgress);
    });
}

// Navigation Functions
function navigateToSection(sectionName) {
    // Update active section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('section--active');
    });
    
    document.querySelectorAll('.nav__item').forEach(item => {
        item.classList.remove('nav__item--active');
    });
    
    document.getElementById(sectionName).classList.add('section--active');
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('nav__item--active');
    
    appState.currentSection = sectionName;
    
    // Special handling for certain sections
    if (sectionName === 'flashcards' && appState.filteredCards.length > 0) {
        updateFlashcard();
    }
}

function switchTheme(themeName) {
    document.querySelectorAll('.theme-tab').forEach(tab => {
        tab.classList.remove('theme-tab--active');
    });
    
    document.querySelectorAll('.theme-content').forEach(content => {
        content.classList.remove('theme-content--active');
    });
    
    document.querySelector(`[data-theme="${themeName}"]`).classList.add('theme-tab--active');
    document.getElementById(`${themeName}-content`).classList.add('theme-content--active');
    
    appState.currentTheme = themeName;
}

// Flashcard Functions
function updateFlashcard() {
    if (appState.filteredCards.length === 0) {
        document.getElementById('card-front').textContent = 'No cards available for this filter';
        document.getElementById('card-back').textContent = 'Try selecting a different category';
        return;
    }
    
    const currentCard = appState.filteredCards[appState.currentCardIndex];
    document.getElementById('card-front').textContent = currentCard.front;
    document.getElementById('card-back').textContent = currentCard.back;
    
    // Reset flip state
    document.getElementById('flashcard').classList.remove('flipped');
    
    updateCardCounter();
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (appState.filteredCards.length === 0) return;
    
    appState.currentCardIndex = (appState.currentCardIndex + 1) % appState.filteredCards.length;
    updateFlashcard();
    
    // Track progress
    appState.progress.flashcardsStudied++;
    saveProgress();
    updateDashboard();
}

function prevCard() {
    if (appState.filteredCards.length === 0) return;
    
    appState.currentCardIndex = appState.currentCardIndex === 0 
        ? appState.filteredCards.length - 1 
        : appState.currentCardIndex - 1;
    updateFlashcard();
}

function shuffleCards() {
    appState.filteredCards = shuffleArray([...appState.filteredCards]);
    appState.currentCardIndex = 0;
    updateFlashcard();
}

function filterCards() {
    const selectedCategory = document.getElementById('card-theme').value;
    
    if (selectedCategory === 'all') {
        appState.filteredCards = [...appState.flashcards];
    } else {
        appState.filteredCards = appState.flashcards.filter(card => card.category === selectedCategory);
    }
    
    appState.currentCardIndex = 0;
    updateFlashcard();
}

function updateCardCounter() {
    document.getElementById('current-card').textContent = appState.filteredCards.length > 0 ? appState.currentCardIndex + 1 : 0;
    document.getElementById('total-cards').textContent = appState.filteredCards.length;
}

// Quiz Functions
function startQuiz() {
    const questionCount = parseInt(document.getElementById('question-count').value);
    const selectedTheme = document.getElementById('quiz-theme').value;
    
    // Filter questions based on theme
    let availableQuestions = [...appState.quiz.questions];
    if (selectedTheme !== 'all') {
        availableQuestions = availableQuestions.filter(q => q.theme === selectedTheme);
    }
    
    // Randomly select questions
    const selectedQuestions = shuffleArray(availableQuestions).slice(0, Math.min(questionCount, availableQuestions.length));
    
    // Initialize quiz state
    appState.quiz.questions = selectedQuestions;
    appState.quiz.currentQuestionIndex = 0;
    appState.quiz.score = 0;
    appState.quiz.answers = [];
    appState.quiz.isActive = true;
    
    // Show quiz content
    document.getElementById('quiz-menu').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    // Update UI
    document.getElementById('total-questions').textContent = selectedQuestions.length;
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = appState.quiz.questions[appState.quiz.currentQuestionIndex];
    
    // Update question text
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    // Update progress
    document.getElementById('question-number').textContent = appState.quiz.currentQuestionIndex + 1;
    const progressPercent = ((appState.quiz.currentQuestionIndex + 1) / appState.quiz.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = progressPercent + '%';
    
    // Update score display
    document.getElementById('current-score').textContent = appState.quiz.score;
    document.getElementById('possible-score').textContent = appState.quiz.currentQuestionIndex;
    
    // Create answer options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', function() {
            selectAnswer(index);
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset controls
    document.getElementById('submit-answer').disabled = true;
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('prev-question').disabled = appState.quiz.currentQuestionIndex === 0;
    document.getElementById('feedback').style.display = 'none';
}

function selectAnswer(answerIndex) {
    // Remove previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Mark selected answer
    document.querySelector(`[data-index="${answerIndex}"]`).classList.add('selected');
    
    // Enable submit button
    document.getElementById('submit-answer').disabled = false;
    
    // Store selected answer
    appState.quiz.answers[appState.quiz.currentQuestionIndex] = answerIndex;
}

function submitAnswer() {
    const currentQuestion = appState.quiz.questions[appState.quiz.currentQuestionIndex];
    const selectedAnswer = appState.quiz.answers[appState.quiz.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    // Update score
    if (isCorrect) {
        appState.quiz.score++;
    }
    
    // Show feedback
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.style.display = 'block';
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackElement.innerHTML = `
        <h4>${isCorrect ? 'Correct!' : 'Incorrect'}</h4>
        <p>${currentQuestion.explanation}</p>
    `;
    
    // Highlight correct/incorrect answers
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        if (index === currentQuestion.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Update controls
    document.getElementById('submit-answer').style.display = 'none';
    
    if (appState.quiz.currentQuestionIndex < appState.quiz.questions.length - 1) {
        document.getElementById('next-question').style.display = 'block';
    } else {
        document.getElementById('next-question').textContent = 'Finish Quiz';
        document.getElementById('next-question').style.display = 'block';
    }
    
    // Update score display
    document.getElementById('current-score').textContent = appState.quiz.score;
    document.getElementById('possible-score').textContent = appState.quiz.currentQuestionIndex + 1;
}

function nextQuestion() {
    if (appState.quiz.currentQuestionIndex < appState.quiz.questions.length - 1) {
        appState.quiz.currentQuestionIndex++;
        loadQuestion();
        
        // Reset submit button
        document.getElementById('submit-answer').style.display = 'block';
        document.getElementById('submit-answer').textContent = 'Submit Answer';
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (appState.quiz.currentQuestionIndex > 0) {
        appState.quiz.currentQuestionIndex--;
        loadQuestion();
        
        // Reset submit button
        document.getElementById('submit-answer').style.display = 'block';
        document.getElementById('submit-answer').textContent = 'Submit Answer';
        
        // If answer was already submitted, show feedback
        if (appState.quiz.answers[appState.quiz.currentQuestionIndex] !== undefined) {
            submitAnswer();
        }
    }
}

function finishQuiz() {
    appState.quiz.isActive = false;
    
    const finalPercentage = Math.round((appState.quiz.score / appState.quiz.questions.length) * 100);
    
    // Update results display
    document.getElementById('final-score').textContent = appState.quiz.score;
    document.getElementById('final-total').textContent = appState.quiz.questions.length;
    document.getElementById('final-percentage').textContent = finalPercentage;
    
    // Performance message based on score
    let performanceMessage = '';
    if (finalPercentage >= 90) {
        performanceMessage = 'Excellent! You have mastered this material.';
    } else if (finalPercentage >= 70) {
        performanceMessage = 'Good work! Review the topics you missed.';
    } else if (finalPercentage >= 50) {
        performanceMessage = 'Keep studying! Focus on your weak areas.';
    } else {
        performanceMessage = 'More revision needed. Go back to the notes.';
    }
    
    document.getElementById('performance-message').textContent = performanceMessage;
    
    // Hide quiz content and show results
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    // Update progress tracking
    appState.progress.quizzesCompleted++;
    const totalScore = appState.progress.averageScore * (appState.progress.quizzesCompleted - 1) + finalPercentage;
    appState.progress.averageScore = Math.round(totalScore / appState.progress.quizzesCompleted);
    
    saveProgress();
    updateDashboard();
}

function restartQuiz() {
    // Reset quiz state
    appState.quiz.isActive = false;
    appState.quiz.currentQuestionIndex = 0;
    appState.quiz.score = 0;
    appState.quiz.answers = [];
    
    // Show quiz menu and hide results
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-menu').style.display = 'block';
}

// Progress and Dashboard Functions
function updateDashboard() {
    // Update progress percentage
    const totalProgress = calculateOverallProgress();
    document.querySelector('.progress-bar__fill').style.width = totalProgress + '%';
    document.getElementById('progress-percent').textContent = totalProgress;
    
    // Update flashcards count
    document.getElementById('flashcards-count').textContent = appState.progress.flashcardsStudied;
    
    // Update quiz score
    document.getElementById('quiz-score').textContent = appState.progress.averageScore;
}

function calculateOverallProgress() {
    const flashcardProgress = Math.min((appState.progress.flashcardsStudied / 50) * 100, 100);
    const quizProgress = Math.min(appState.progress.quizzesCompleted * 20, 100); // Each quiz worth 20%
    const plannerProgress = appState.progress.plannerProgress;
    
    return Math.round((flashcardProgress + quizProgress + plannerProgress) / 3);
}

function updatePlannerProgress() {
    const checkboxes = document.querySelectorAll('.day-checkbox input[type="checkbox"]');
    const checkedCount = document.querySelectorAll('.day-checkbox input[type="checkbox"]:checked').length;
    
    appState.progress.plannerProgress = Math.round((checkedCount / checkboxes.length) * 100);
    
    saveProgress();
    updateDashboard();
}

function saveProgress() {
    // Note: Local storage is not available in the sandbox environment, 
    // so we'll just keep progress in memory for this session
    console.log('Progress saved:', appState.progress);
}

function loadProgress() {
    // Note: Local storage is not available in the sandbox environment
    // Progress will reset each session
    console.log('Progress loaded:', appState.progress);
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateProgress() {
    // This function can be expanded to handle more complex progress tracking
    updateDashboard();
}