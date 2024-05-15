 window.localStorage.removeItem("quizAnswers")
 window.localStorage.removeItem("score")
// Define a function constructor for questions
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;                       //function cons for question
  this.answer = answer;
}
// Define a function constructor for the quiz
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;                  //for the quiz
  this.currentQuestionIndex = 0;
  this.answers = {}; // Store user's answers
}

// Define a method to get the current question
Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex];    //index of current question
};
Quiz.prototype.getSpecificQuestion = function(index) {
  return this.questions[index]; 
}

// Define a method to check the answer
Quiz.prototype.checkAnswer = function (answer) {
  const currentQuestion = this.getCurrentQuestion();
  // if (currentQuestion.answer === answer) {
  //   this.score++;
  // }
  this.answers[currentQuestion.text] = answer; // Store the user's answer
}
Quiz.prototype.calcScore = function (questions){
   for(var i =0; i<questions.length; i++){
    if(questions[i].answer===Quizobj.answers[questions[i].text]){
        this.score++;
    }
   }
}

// Define a method to check if the quiz has ended
Quiz.prototype.hasEnded = function () {
  return this.currentQuestionIndex >= this.questions.length;
};

// array of questions objs
var questions = [
  new Question(
    "What does DOM stand for in JavaScript?",
    [
      "Document Object Model",
      "Display Object Management",
      "Data Object Model",
      "Document Orientation Model",
    ],
    "Document Object Model"
  ),
  new Question(
    "How can you access an element by its ID in the DOM?",
    [
      "document.getElement('id')",
      "document.getElementById('id')",
      "document.querySelector('#id')",
      "Both b and c",
    ],
    "Both b and c"
  ),
  new Question(
    "What does the querySelector method do in the DOM?",
    [
      "Finds the first element that matches a specified CSS selector",
      "Queries all elements in the document",
      "Creates a new CSS selector",
      "Returns the entire DOM structure",
    ],
    "Finds the first element that matches a specified CSS selector"
  ),
  new Question(
    "Which property is used to access the HTML content of an element?",
    [
      "element.htmlContent",
      "element.innerHTML",
      "element.contentHTML",
      "element.setHTML",
    ],
    "element.innerHTML"
  ),
    new Question(
      "How can you remove an element from the DOM?",
      [
        "element.remove()",
        "document.removeElement(element)",
        " element.delete()",
        "document.deleteElement(element)",
      ],
      "element.remove()"
    ),
    new Question(
      "What does the getElementById method return if no element found?",
      ["An empty string",
       "A new element",
       "null",
       "undefined"
      ],
      "null"
    ),
    new Question(
      "How can you access the style properties of an element in the DOM?",
      ["element.value",
      "element.getStyle()",
      "element.css",
      "element.style"
      ],
      "element.style"
    ),
    new Question(
      "How can you select all <div> elements in the DOM?",
      [
        "document.getElementsByTagName('div')",
        "document.querySelectorAll('div')",
        "document.div",
        "Both a and b",
      ],
      "Both a and b"
    ),
    new Question(
      "How does block scope work in JavaScript?",
      [
        "Variables are confined within a function",
        "Variables are confined within a block of code, such as loops or conditionals",
        "Variables are accessible globally",
        "Variables are confined within the entire script",
      ],
      "Variables are confined within a block of code, such as loops or conditionals"
    ),
    new Question(
      "What happens to a variable declared with var inside a function?",
      [
        "It becomes block scoped",
        "It becomes globally scoped",
        "It becomes function scoped",
        "It is not scoped",
      ],
      "It becomes function scoped"
    ),
];
//to sort array randomly
questions.sort(() => 0.5 - Math.random());

var Quizobj = new Quiz(questions);

// Get references to the HTML elements
var questionText = document.getElementById("questionText");
var choicesDiv = document.getElementById("choicesDiv");
var choicesForm = document.getElementById("choicesForm");
var countDownContainer = document.getElementById("countDownContainer");

// Function to update the question and choices on the page
function displayQuestion() {
  
  var currentQuestion = Quizobj.getCurrentQuestion();
  var questionNo=document.getElementById("questionNo");
  questionNo.innerHTML=`QUESTION ${Quizobj.currentQuestionIndex + 1} OF ${Quizobj.questions.length}`
  questionText.textContent = `${Quizobj.currentQuestionIndex + 1}) ${currentQuestion.text}`; 
  
  
  // Clear previous choices
  localStorage.setItem("quizAnswers",{})
  choicesDiv.innerHTML = "";

  // Create radio buttons for choices
  currentQuestion.choices.forEach(function (choice, index) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    
    radio.type = "radio";
    radio.name = "choice";
    radio.value = choice;

    radio.addEventListener("change",function(e){
       if(radio.select){
        Quizobj.checkAnswer(radio.value)
       }
       
    })

    label.appendChild(radio);
    choice = `  ${choice}`;
    label.appendChild(document.createTextNode(choice));
    choicesDiv.appendChild(label);
    choicesDiv.appendChild(document.createElement("br"));
  });

  //diplay the previous and next button consistent to their currrent index
  if (Quizobj.currentQuestionIndex === 0) {
    previousbtn.style.display = "none";
  } else {
    previousbtn.style.display = "inline";
  }

  if (Quizobj.currentQuestionIndex === Quizobj.questions.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline";
  }
}

//Str

//next button
 
var nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function () {
 
    if (!Quizobj.hasEnded()) {   
      Quizobj.currentQuestionIndex++
      displayQuestion();

    // Get the next question and its selected choice if exist
    var nextQuestion = Quizobj.questions[Quizobj.currentQuestionIndex];
    var selectedChoice = Quizobj.answers[nextQuestion.text];
    
    // If a choice was previously selected, mark it as checked
    if (selectedChoice) {
      var radioButtons = document.getElementsByName("choice");
      radioButtons.forEach(function (radio) {
        if (radio.value === selectedChoice) {
          radio.checked = true;
        }
      });
    }   
  
} 
 
});

 

       


//countDown
countDown(150);
//submit button
var submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", function () {
   
      Quizobj.calcScore(questions);
      localStorage.setItem("quizAnswers", JSON.stringify(Quizobj.answers)); // Save answers to local storage
      localStorage.setItem("score",Quizobj.score);
      window.location.replace("result.html")
    
  });


//previous button
var previousbtn = document.getElementById("previousbtn");
previousbtn.addEventListener("click", function () {
 

  if (Quizobj.currentQuestionIndex > 0) { // Ensure there are previous questions
    
   
    Quizobj.currentQuestionIndex--;
    displayQuestion();

    // Get the previous question and its selected choice
    var previousQuestion = Quizobj.questions[Quizobj.currentQuestionIndex];
    var selectedChoice = Quizobj.answers[previousQuestion.text];
    
    // If a choice was previously selected, mark it as checked
    if (selectedChoice) {
      var radioButtons = document.getElementsByName("choice");
      radioButtons.forEach(function (radio) {
        if (radio.value === selectedChoice) {
          radio.checked = true;
        }
      });
    }
  }

  
});

//markbutton
var lastMarkedQuestionIndex = -1;
var markerContainer = document.getElementById("markerContainer");

var markButton = document.getElementById("markButton");
markButton.addEventListener("click", function () {
  var currentQuestionNumber = Quizobj.currentQuestionIndex + 1;
  var markerId = Quizobj.currentQuestionIndex; //"questionMarker" + currentQuestionNumber; 
  var marker = document.getElementById(markerId);
  var userAnswer = document.querySelector('input[name="choice"]:checked');
   if(userAnswer){
      Quizobj.checkAnswer(userAnswer.value)
   }
   if (!marker) {
    // Create a div to contain the marker li and the delete span
    var markerDiv = document.createElement("div");

    // Create the marker li
    var markerLi = document.createElement("div");
    markerLi.id = markerId;
    markerLi.textContent = `Question Number ${currentQuestionNumber}`;
    markerLi.classList.add("marker"); // Add marker class to marker li
    markerLi.style.display = "inline-block"; // Set marker li to display inline


    var inpGo = document.createElement("input");
    inpGo.type="button";
    inpGo.value="go";
    inpGo.id= markerId;
    inpGo.setAttribute("class","goBtn");
    inpGo.addEventListener("click",e=>{
    Quizobj.currentQuestionIndex=markerId;
    displayQuestion();

    // Get the mark question and its selected choice
    var markQuestion = Quizobj.questions[Quizobj.currentQuestionIndex];
    var selectedChoice = Quizobj.answers[markQuestion.text];
    
    // If a choice was previously selected, mark it as checked
    if (selectedChoice) {
      var radioButtons = document.getElementsByName("choice");
      radioButtons.forEach(function (radio) {
        if (radio.value === selectedChoice) {
          radio.checked = true;
        }
      });
    }
    
    })
    // Create the delete span with a trash icon
    var delSpan = document.createElement("span");
    delSpan.innerHTML = `<i class='bx bx-x' ></i>`;
    delSpan.classList.add("delete-span"); // Add a class to the delete span for styling or identification
    delSpan.addEventListener("click", function () {
      markerDiv.remove(); // Remove the marker div when the delete span is clicked
    });

    // Append the marker li and delete span to the marker div
    markerDiv.appendChild(markerLi);
    markerDiv.appendChild(inpGo);
    markerDiv.appendChild(delSpan);
    

    // Append the marker div to the markerContainer
    markerContainer.appendChild(markerDiv);
    lastMarkedQuestionIndex = Quizobj.currentQuestionIndex;
  }
});



window.onload = function () {
  const savedAnswers = localStorage.getItem("quizAnswers");
  if (savedAnswers) {
    Quizobj.answers = JSON.parse(savedAnswers); // Load saved answers from local storage
  }
  displayQuestion(); //function call
};

 
function countDown(duration){
    var minutes, seconds;
    var countDownInterval = setInterval(()=>{
      minutes=parseInt(duration / 60);
      seconds= parseInt(duration % 60);
      if(minutes<10){
        minutes=`0${minutes}`;
      }
      if(seconds<10){
        seconds=`0${seconds}`;
      }
      countDownContainer.innerHTML=`${minutes}:${seconds}`;
      --duration;
      if(duration<0){
        clearInterval(countDownInterval);
        location.replace("timeOut.html");
      }
    },1000)
}


 
 