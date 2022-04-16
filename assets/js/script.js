var quizTime = 60;


// create var object  with 4 questions
var listQuestions =[
    {
    question1: "what color is the sun ",
    answer1: "red",
    answer2:"blue",
    answer3:"orange",
    answer4:"purple",

    correct: "orange"
    
},

{
    question1: "what color is the Moon ",
    answer1: "whte",
    answer2:"blue",
    answer3:"orange",
    answer4:"purple",

    correct: "white"
    
},

{
    question1: "what color a orange ",
    answer1: "red",
    answer2:"blue",
    answer3:"orange",
    answer4:"purple",

    correct: "orange"
    
},

{
    question1: "what color is a Pear",
    answer1: "red",
    answer2:"green",
    answer3:"orange",
    answer4:"purple",

    correct: "orange"
    
},

]
//quiz variables


// timer dom element
var timerEl = document.querySelector(".timer")


// Quiz dom elements
var QuestionEl = document.querySelector(".question")
var answerOneEl = document.querySelector(".answerOne")
var answerTwoEl = document.querySelector(".answerTwo")
var answerThreeEl = document.querySelector(".answerThree")
var answerFourEl = document.querySelector(".answerFour")


var startBtnEl = document.querySelector(".startBtn")



// create a timer function to start  the quiz and timer  via a button connected to a event listener  
var timerFunc = function(){
// start the quiz function
    startQuiz(listQuestions);

    console.log("timer is working")
    // this sets the timer dom to 60
    timerEl.textContent = quizTime;

    var timeInterval = setInterval(function () {
        // As long as the `quizTime` is greater than 1
        if (quizTime > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = quizTime + ' seconds remaining';
          // Decrement `quizTime` by 1
          quizTime--;
        } else if (quizTime === 1) {
          // When `quizTime` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = quizTime + ' second remaining';
          timeLeft--;
        } else {
          // Once `quizTime` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          console.log("timer Works")
          ;
        }
      }, 1000);
}



// create a function that iterates over a set of question objects this function should call a function based on the   result.

var startQuiz = function(Listobject){
//loops through the list of objects
for(var i = 0; i < Listobject.length; i++){
    
    console.log("The questions irrater is workng")

    console.log(Listobject[1]);


}


}



// create if else in question with iteration function.

// If correct time must be add to timer, else if incorrect subtract time from timer.

// create a function to subtract time from timer.

// create a function to add time from timer.

//function display result for quiz 

// create a function to save the results to local storage if new high score set if new high score
// conditional state to check for new high

// create a a button to display highscorce get high scorce.



startBtnEl.addEventListener("click", timerFunc)




 