      let userName = document.querySelector("#userName");
      let welcomeMessage = document.querySelector("#welcomeMessage");
      let nameInputBox = document.querySelector(".Nameinputbox");
      let question = document.querySelector("#question");
      let option1 = document.querySelector("#option1");
      let option2 = document.querySelector("#option2");
      let option3 = document.querySelector("#option3");
      let option4 = document.querySelector("#option4");
      let QuizContent = document.querySelector(".QuizContent")

      let feedback = document.querySelector("#feedback");
      let score = document.querySelector("#score");
      let progrss = document.querySelector("#progresss");
      let levelBox = document.querySelector("#levelBox");
      let nextButton = document.querySelector("#nextButton")
      let optionsButtons = document.querySelector(".optionButtons")
      let quizbox = document.querySelector("#quizBox")
      let Replay = document.querySelector("#replayMenu")
      
      let FinalScoreMessage = document.querySelector("#FinalScoreMessage")
      let percentage = 0;
      let percentagetext = document.querySelector("#percentage");
      let personalizedMessage =document.querySelector("#personlizedMessage");


      let i = 0;
      let questionsArray = [];
      let optionsArray = [];
      let answersArray = [];
      var points = 0;

      function getValidatedName() {

        if (userName.value.length < 1 || userName.value.length > 30) {
          alert("Please enter a name between 1-30 characters to begin");
        } else {
          welcomeMessage.innerHTML = "Welcome " + userName.value + ", to this Maui and the Sun Maori Quiz";
          nameInputBox.style.display = "none";
          levelBox.style.display = "block";
        }
      }

      function Quiz(qArray, oArray, aArray) {
        quizbox.style.display = "block";
        questionsArray = qArray;
        optionsArray = oArray;
        answersArray = aArray;
        displayQuestion();
        levelBox.style.display = "none";


      }
      function displayQuestion() {

        question.innerHTML = questionsArray[i];
        option1.innerHTML = optionsArray[i][0];
        option2.innerHTML = optionsArray[i][1];
        option3.innerHTML = optionsArray[i][2];
        option4.innerHTML = optionsArray[i][3];

        progresss.innerHTML = "Question " + (i + 1) + " out of " + questionsArray.length;
        nextButton.style.display = "none";
        optionsButtons.style.display = "block";
      }

      function checkAnswer(selectedOption) {
        nextButton.style.display = "block";
        optionsButtons.style.display = "none";

        const userChoice = selectedOption;
        const correctAnswer = answersArray[i];
        if (userChoice == correctAnswer) {
          points++;
          score.innerHTML = points;
          feedback.innerHTML = "Correct!";
          feedback.style.color = "green";
          QuizContent.style.boxShadow = "0 0 15px #00FF00";


        } else {
          feedback.innerHTML = " Your answer waas Incorrect! The correct answer was: " + optionsArray[i][(correctAnswer - 1)];
          feedback.style.color = "red";
          QuizContent.style.boxShadow = "0 0 15px #FF0000";
        }

      }

      function nextQuestion() {
        QuizContent.style.boxShadow = "";
        i++;
        nextButton.style.display = "none";
        if (i < questionsArray.length) {

          displayQuestion();

        } else {
          endOfQuiz();
        }
        feedback.innerHTML = "";

      }

      function endOfQuiz() {

        FinalScoreMessage.innerHTML = "Quiz completed " + userName.value + " ,you got " + points + " out of " + questionsArray.length;
        percentage = Math.round((points / answersArray.length) * 100);
        console.log(percentage)
        percentagetext.innerHTML = percentage + "%";
        quizbox.style.display ="none";
        progrss.style.display = "none";
        Replay.style.display = "block";



 if (percentage > 30) {
  personalizedMessage.innerHTML = userName.value + " that's a good score. Have another go; you are only " + (questionsArray.length - points) + " correct answer(s) away  away from a perfect score. Consider doing some research about the Maori culture or check out the 'About' section to learn more.";
    
}

if (percentage === 100) {
  personalizedMessage.innerHTML = userName.value + " that's a perfect score. Tino Pai";
  QuizContent.style.boxShadow = "0 0 15px #00FF00";

}

if (percentage <= 30) {
  personalizedMessage.innerHTML = userName.value + " Good attempt; however, you can do better. Consider checking out the 'About' page or doing some more research about Maori Culture.";
}
 

      }
    
      function loadMenu() {
        
     
        levelBox.style.display = "block";
        welcomeMessage.innerHTML = "Welcome Back " + userName.value;
        progrss.style.display = "block";
        quizbox.style.display = "blcok";
        Replay.style.display = "none";
        points = 0;
        score.innerHTML = points;
        i = 0;
        
      }
     





      function easyLevel() {
      
        const easyQuestions = [
          "What did Maui use to capture the sun?",
          "What color is the sun?",
          "Why did Maui capture the sun?",
           "Maui is a _ _ _ _ _ _ _."

        ];

        const easyAnswers = [
          3,
          2,
          4,
          2
        ];

        const easyOptions = [
          ["a weapon", "his hands", "flax ropes", "his voice"],
          ["Kakariki", "Ma", "Whero", " kikorangi"],
          ["to keep it warm", "to make it brighter", "to slow it down", "All of the Above"],
          ["God", "Demi God", "King", "All of the Above"],


        ];

        Quiz(easyQuestions, easyOptions, easyAnswers);
      }

      function mediumLevel() {
        const mQuestions = [
          "What did Maui use tob ggggv capture the sun?",
          "What color was the sun?",
          "Why did Maui capture the sun?"
        ];

        const mAnswers = [
          1,
          0,
          3
        ];

        const mOptions = [
          ["a weapon", "his hands", "flax ropes", "his voice"],
          ["yellow", "blue", "red", "white"],
          ["to keep it warm", "to make it brighter", "slow down its movement", "to stop it from setting"]
        ];

        Quiz(mQuestions, mOptions, mAnswers);
      }

      function hardLevel() {
        alert("You picked hard level");
      }