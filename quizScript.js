
//use query selector to get Elements from html by id or class assigns them to variables.
let userName = document.querySelector("#userName");
let welcomeMessage = document.querySelector("#welcomeMessage");
let nameInputBox = document.querySelector(".nameInputBox");
let question = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let quizContent = document.querySelector(".quizContent")
let feedback = document.querySelector("#feedback");
let score = document.querySelector("#score");
let progress = document.querySelector("#progress");
let levelBox = document.querySelector("#levelBox");
let nextButton = document.querySelector("#nextButton")
let optionsButtons = document.querySelector(".optionButtons")
let quizBox = document.querySelector("#quizBox")
let replay = document.querySelector("#replayMenu")
let finalScoreMessage = document.querySelector("#finalScoreMessage")
let percentage = 0;
let percentageText = document.querySelector("#percentage");
let personalizedMessage = document.querySelector("#personalizedMessage");

//i keeps track of question numbers 
let i = 0;
//sets points variable to 0
var points = 0;

// 3 arrays empty arrays that will store question answers and options.
let questionsArray = [];
let optionsArray = [];
let answersArray = [];



//function to Validate Name
function getValidatedName() {
  // if the user name is not valid alert user
  if (userName.value.length < 1 || userName.value.length > 30) {
    alert("Please enter a name between 1-30 characters to begin");
  }
  // if the above condition is no meet the users name is valid welcome the user to the quiz by changing the inner html of the welcome message variable.
  else {
    welcomeMessage.innerHTML = "Welcome " + userName.value + ", to this Maui and the Sun Maori Quiz";
    nameInputBox.style.display = "none";
    levelBox.style.display = "block"; // makes the level box variable
  }
}
// quiz method take in question options and answer arrays.
function quiz(qArray, oArray, aArray) {
  quizBox.style.display = "block"; // makes the quiz box visible
  //asigns the question answer and options that get passed into the quiz method to the empty array created near the top of the js file.
  questionsArray = qArray;
  optionsArray = oArray;
  answersArray = aArray;
  displayQuestion(); // calls the display question method 
  levelBox.style.display = "none"; // hide the level menu 


}
// this function displays the question
function displayQuestion() {
  // display current question using the i index of the question array.
  question.innerHTML = questionsArray[i];
  //display the option 1 2 3 and 4 using a 2 dimensional array structure. i is the current question, i0 is option 1 for the current question i1 is option 2 for the current question i2 is option 3 for  question i.
  option1.innerHTML = optionsArray[i][0];
  option2.innerHTML = optionsArray[i][1];
  option3.innerHTML = optionsArray[i][2];
  option4.innerHTML = optionsArray[i][3];
  // display the progress by adding 1 to i as arrays start at 0 and my question start at 1. 
  progress.innerHTML = "Question " + (i + 1) + " out of " + questionsArray.length;
  nextButton.style.display = "none"; // hides the next button 
  optionsButtons.style.display = "block";// display the option button
}

// This function is called when the user click on a option button. The option button will passes a number into the check answer function. 

function checkAnswer(selectedOption) {
  //make the next button visible and hides the option buttons.
  nextButton.style.display = "block";
  optionsButtons.style.display = "none";
  // store the value passed in to the method as a variable called user choice
  const userChoice = selectedOption;
  //store the current correct answer at the current i position as a variable called correctAnswer.
  const correctAnswer = answersArray[i];
  // checks if the user answer matches the correct answer if the user answer is right increase the points variable by 1
  if (userChoice == correctAnswer) {
    points++;
    // set the score inner html value to the value of points. 
    score.innerHTML = points;
    feedback.innerHTML = "Correct!"; // set the feedback inner html value to correct
    // set the colour of feed back text to green and add a green box shadow around the quiz container.
    feedback.style.color = "green";
    quizContent.style.boxShadow = "0 0 50px #00FF00";
    // if the answer is wrong 
  } else {
    // Display the correct answer in the 'feedback' inner HTML. Get the correct answer 
    //from the  current option array [i][correct answer number] position. Answers in my quiz are store as  1,2,3,4 and the option array is 0,1,2,3, we adjust by subtracting one to match array postioning and diplsay the correct answer.

    feedback.innerHTML = " Your answer was Incorrect! The correct answer was: " + optionsArray[i][(correctAnswer - 1)];
    // set colour of feedback text to red and adds a red box shadow.
    feedback.style.color = "red";
    quizContent.style.boxShadow = "0 0 50px #FF0000";
  }

}
// this function is called when the user clicks the next button 
function nextQuestion() {
  //rest the box shadows 
  quizContent.style.boxShadow = "";
  i++;// increase i hence increased the question number by 1

  nextButton.style.display = "none"; // hides the next button 

  // if i is less the length of questions in the question array call display question function if it is not called endOfQuiz function.
  if (i < questionsArray.length) {

    displayQuestion();

  } else {
    endOfQuiz();
  }
  feedback.innerHTML = ""; // rest feedback message  after each question.

}

// This Function is called at the end of the quiz. 
function endOfQuiz() {
  quizBox.style.display = "none"; // hide the quiz box
  progress.style.display = "none";// hide the progress bar
  // displays a final score message by displaying the name and the users points. 
  finalScoreMessage.innerHTML = "Quiz completed " + userName.value + " ,you got " + points + " out of " + questionsArray.length;
  percentage = Math.round((points / answersArray.length) * 100); // create a percentage score
  // set the percentage text inner html to the calculated score.  
  percentageText.innerHTML = percentage + "%";
  replay.style.display = "block";  // display the replay menu 


  // checks if the user percentage is above 30 and changes the perozionlaized message inner html to a personalized message including the user name and their points. Also diplsay hwo much need for a perfect score. 
  if (percentage > 30) {
    personalizedMessage.innerHTML = userName.value + " that's a good score. Have another go; you are only " + (questionsArray.length - points) + " correct answer(s) away  away from a perfect score. Consider doing some research about the Maori culture or check out the 'About' section to learn more.";
    personalizedMessage.style.color = "green"// sets the colour of the text to green 
  }

  // checks if the user percentage is 100% and changes the perozionlaized message inner html to a perosozniled message including the user name and their points. 
  if (percentage === 100) {
    personalizedMessage.innerHTML = userName.value + " that's a perfect score. Tino Pai";
    personalizedMessage.style.color = "green"// sets the colour of the text to green 
  }

  // checks if the user percantage is less then 30 and  then changes the perozionlaized message innenr html to a perosozniled message including the user name and their points. Also makes the font red.
  if (percentage <= 30) {
    personalizedMessage.innerHTML = userName.value + " Good attempt; however, you can do better. Consider checking out the 'About' page or doing some more research about Maori Culture.";
    personalizedMessage.style.color = "red"// sets the colour of the text to red
  }


}
// Function called when user clicks load menu again 
function loadMenu() {
  levelBox.style.display = "block"; // display the level box
  welcomeMessage.innerHTML = "Welcome Back " + userName.value; // display a welcome back message by changing the inner html of the welcome message.
  //hides the replay menu
  replay.style.display = "none";
  //resets the feedback message
  feedback.innerHTML = " ";

  points = 0; // rests points
  score.innerHTML = points;
  i = 0; // resets question number 

}



// function called when user clicks easy button 
function easyLevel() {

  const easyQuestions = [
    "What did Maui use to capture the sun?",
    "What color is the sun?",
    "Why did Maui capture the sun?",
    "Maui is a _ _ _ _ _ _ _.",
    "Maui and the Sun is Myth, that came from?",
    "What culture to do think Maui was from?",
    "Did Maui harm the sun?"
  ];

  const easyAnswers = [
    3, 2, 4, 2, 1, 1, 2

  ];
  // 2d array to store options
  const easyOptions = [
    ["A weapon", "His hands", "Flax ropes", "His voice"],
    ["Kakariki", "Ma", "Whero", " kikorangi"],
    ["To keep it warm", "To make it brighter", "To slow it down", "All of the Above"],
    ["God", "Demi God", "King", "All of the Above"],
    ["New Zealand", "USA", "England", "Spain"],
    ["Maori", "British", "Indian", "Spainish"],
    ["Yes", "No", "Maybe", "Dont know"]
  ];
  //pass the above easy level arrays in to the quiz method 
  quiz(easyQuestions, easyOptions, easyAnswers);
}

function mediumLevel() {
  const mediumQuestions =
    [
      "The Story of Maui is a:",
      "Which word best describes Maui?",
      "Who helped Maui capture The Sun?",
      "What is the phrase 'the sun' in Maori?",
      "What is the Maori word for people?",
      "What is the Maori word for land?",
      "What is the Maori word for capture"];

  const mediumAnswers = [
    2, 3, 2, 1, 3, 1, 4
  ];
  // 2d array to store options
  const mediumOptions = [
    ["Fictional tale", "Myth", "Novel", "Play"],
    ["Scared", "Sad", "Ambitious", "Fearful"],
    ["Nobody", "His Tribe", "The Moon", "His Wife"],
    ["Te Rā", "Te Reo", "Te Rāe", "Te Rāee"],
    ["Kiwis", "Iwi", "Tangata", "Keepers"],
    ["whenua", "Ta Ra", "Hopue", "Hopu"],
    ["Hopu", "Hopa", "Hopue", "Hopu"]

  ];
  //pass the above medium level  arrays in to the quiz method 
  quiz(mediumQuestions, mediumOptions, mediumAnswers);
}

function hardLevel() {
  const hardQuestions = [
    "What is the Maori word for hook?",
    "What does 'Iwi' mean?",
    "The Maori name for New Zealand is?",
    "What does 'Hopu' mean in English?",
    "What does 'Tangata' mean in English?",
    "What does 'Tangata Whenua' mean in English?",
    "What is 'Maui' in Maori?"
  ];
  // 2d array to store options
  const hardOptions = [
    ["Matau", "Hooka", "Hatua", "Huka"],
    ["People", "Tribe", "Team", "Fearful"],
    ["Nothing", "Aotearoa", "Kiwi Land", "Kiwi Town"],
    ["Hook", "Rock", "Took", "Stole"],
    ["People", "Birds", "Cars", "House"],
    ["People of the country", "People of the land", "People of the town", "People of the community"],
    ["Maui", "Marui", "Mariu", "Mauui"]
  ];

  const hardAnswers = [
    1, 2, 2, 1, 1, 2, 1
  ];
  //pass the above hard arrays in to the quiz method 
  quiz(hardQuestions, hardOptions, hardAnswers);
}