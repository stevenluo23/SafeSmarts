// MOVIES_STORE.js

// const MOVIES = [
//     {
//         id: 1,
//         name: "Dune",
//         genre: "Science Fiction",
//         img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
//     },
//     {
//         id: 2,
//         name: "Aliens",
//         genre: "Horror",
//         img: "https://media.posterlounge.com/img/products/720000/714736/714736_poster.jpg",
//     },
//     {
//         id: 3,
//         name: "Three Ninjas",
//         genre: "Action",
//         img: "https://m.media-amazon.com/images/I/51ChaGk0dML._AC_UF894,1000_QL80_.jpg",
//     },
// ];

const modules = [
  {
    title: "Understanding Common Types of Fraud",
    content: `
        Immigrants often face numerous challenges when adjusting to a new country. One of the most significant threats they encounter is fraud. This chapter aims to educate you about the various types of fraud you may encounter and how to recognize them. By understanding these fraudulent schemes, you can better protect yourself and your loved ones.
        
        1. Employment Fraud: Fraudsters offer fake job opportunities to collect personal information or money. These scams often involve promises of high-paying jobs that require upfront fees for processing or training.
        
        2. Romance Scams: Scammers develop fake online relationships to extort money. They typically prey on emotions, pretending to be in distress and in need of financial assistance.
        
        3. Grandparent Scams: This involves fraudsters posing as relatives, usually grandchildren, who claim to be in urgent need of money due to an emergency.
        
        4. Tax Return Scams: Fraudsters file false tax returns using stolen personal information to claim refunds fraudulently. They may also pose as IRS officials demanding immediate payment of taxes to avoid arrest.
        
        5. Immigration Service Scams: Fake lawyers or "notarios" promise to help with immigration processes for high fees but provide no actual service, leaving victims out of money and still in need of legal help.
        
        6. Tech Support Scams: Scammers pose as tech support representatives from well-known companies, claiming your computer is infected and offering to fix it remotely, only to steal your personal information and money.
        `,
  },
  {
    title: "Protective Measures and Resources",
    content: `
        In this chapter, we will discuss practical strategies and resources to protect yourself from becoming a victim of fraud. By adopting these protective measures, you can significantly reduce your risk and safeguard your personal information and finances.
        
        1. Secure Personal Information: Avoid sharing personal details such as your Social Security number, bank account information, or passwords online or over the phone unless you are certain of the recipient's legitimacy.
        
        2. Verify Contacts: Always check the legitimacy of emails, phone numbers, and websites. Use official websites to verify contact information before responding.
        
        3. Use Trusted Services: Seek help from verified and reputable organizations. Avoid dealing with individuals or companies that cannot provide verifiable credentials or references.
        
        Resources for Help:
        1. Consumer Protection Agencies: Contact local consumer protection offices for advice on dealing with fraud and to report scams. Agencies such as the Federal Trade Commission (FTC) in the U.S. provide valuable resources and support.
        
        2. Legal Aid: Utilize free or low-cost legal services provided by nonprofit organizations or community groups to navigate legal challenges and protect your rights.
        
        3. Community Organizations: Engage with immigrant support groups and community organizations that offer information, support, and resources tailored to immigrants.
        `,
  },
  {
    title: "Reporting and Recovering from Fraud",
    content: `
        If you become a victim of fraud, it is crucial to know the steps to report the incident and begin your recovery process. This chapter provides a detailed guide on how to take action against fraudsters and regain control of your finances and personal information.
        
        1. File a Report: Report the fraud to the Federal Trade Commission (FTC) or your local law enforcement agency. Provide as much detail as possible to help them investigate and prevent further scams.
        
        2. Notify Financial Institutions: Inform your bank and credit card companies about the fraud. They can help protect your accounts and prevent further unauthorized transactions.
        
        3. Identity Theft Protection: Enroll in identity theft protection services to monitor your personal information and receive alerts about suspicious activities.
        
        4. Emotional Support: Fraud can have a significant emotional impact. Seek counseling or join support groups to cope with the stress and anxiety resulting from the incident.
        
        5. Restitution: Follow up with authorities and legal aid organizations to pursue restitution if possible. Recovering stolen funds or compensation can help alleviate some of the financial burdens caused by fraud.
        `,
  },
];

const questions = [
  {
    question: "What type of fraud involves fake job opportunities to collect personal information or money?",
    options: ["Employment Fraud", "Romance Scams", "Grandparent Scams"],
    answer: "Employment Fraud",
    movieId: 1,
  },
  {
    question: "What type of scam involves fraudsters developing fake online relationships to extort money?",
    options: ["Tax Return Scams", "Romance Scams", "Tech Support Scams"],
    answer: "Romance Scams",
    movieId: 2,
  },
  {
    question: "Which fraud involves fraudsters posing as relatives in urgent need of money?",
    options: ["Immigration Service Scams", "Grandparent Scams", "Tech Support Scams"],
    answer: "Grandparent Scams",
    movieId: 3,
  },
  {
    question: "What type of scam involves fraudsters filing false tax returns using stolen personal information?",
    options: ["Immigration Service Scams", "Tax Return Scams", "Employment Fraud"],
    answer: "Tax Return Scams",
    movieId: 1,
  },
  {
    question: "Which scam involves fake lawyers or 'notarios' promising to help with immigration processes for high fees?",
    options: ["Immigration Service Scams", "Tech Support Scams", "Romance Scams"],
    answer: "Immigration Service Scams",
    movieId: 2,
  },
  {
    question: "What scam involves scammers posing as tech support representatives to steal personal information?",
    options: ["Employment Fraud", "Tax Return Scams", "Tech Support Scams"],
    answer: "Tech Support Scams",
    movieId: 3,
  },
];

let currentModuleIndex = 0;
let currentQuestionIndex = 0;
let points = 0;

function loadModule() {
  if (currentModuleIndex < modules.length) {
    const module = modules[currentModuleIndex];
    document.getElementById("content").innerHTML = `<h2>${module.title}</h2><p>${module.content.replace(/\n/g, "<br>")}</p>`;
    document.getElementById("next").style.display = "block";
    document.getElementById("start-quiz").style.display = "none";
  } else {
    document.getElementById("content").textContent = "You've read all the modules. Ready to start the quiz?";
    document.getElementById("next").style.display = "none";
    document.getElementById("start-quiz").style.display = "block";
  }
}

function nextModule() {
  currentModuleIndex++;
  loadModule();
}

function startQuiz() {
  document.getElementById("content").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex < lessons.length) {
    const lesson = lessons[currentQuestionIndex];
    document.getElementById("question").textContent = lesson.question;
    const optionsHtml = lesson.options
      .map(
        (option, index) => `
            <label>
                <input type="radio" name="option" value="${option}"> ${option}
            </label><br>
        `
      )
      .join("");
    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("progress").textContent = `Progress: ${currentQuestionIndex + 1}/${lessons.length}`;
    const movie = MOVIES.find((m) => m.id === lesson.movieId);
    document.getElementById("movie-img").src = movie.img;
    document.getElementById("movie-name").textContent = movie.name;
  } else {
    document.getElementById("question").textContent = "Congratulations! You've completed the quiz.";
    document.getElementById("options").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("progress").textContent = `Final Score: ${points}/${lessons.length}`;
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption && selectedOption.value === lessons[currentQuestionIndex].answer) {
    points++;
  }
  currentQuestionIndex++;
  loadQuestion();
}

document.getElementById("next").addEventListener("click", nextModule);
document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("submit").addEventListener("click", checkAnswer);

module.exports = {
  MOVIES,
  modules,
  lessons,
  loadModule,
  nextModule,
  startQuiz,
  loadQuestion,
  checkAnswer,
};
