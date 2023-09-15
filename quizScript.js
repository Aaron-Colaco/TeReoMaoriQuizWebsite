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
      let progrss = document.querySelector("#progresss");
      let levelBox = document.querySelector("#levelBox");
      let nextButton = document.querySelector("#nextButton")
      let optionsButtons = document.querySelector(".optionButtons")
      let quizbox = document.querySelector("#quizBox")
      let replay = document.querySelector("#replayMenu")  
      let finalScoreMessage = document.querySelector("#finalScoreMessage")
      let percentage = 0;
      let percentageText = document.querySelector("#percentage");
      let personalizedMessage =document.querySelector("#personlizedMessage");

      let i = 0;
      let questionsArray = [];
      let optionsArray = [];
      let answersArray = [];
      var points = 0;
      

      //function to Validate Name
      function getValidatedName() {
      // if the user name is not vaild alert user
        if (userName.value.length < 1 || userName.value.length > 30) {
          alert("Please enter a name between 1-30 characters to begin");
        } 
        else {
          welcomeMessage.innerHTML = "Welcome " + userName.value + ", to this Maui and the Sun Maori Quiz";
          nameInputBox.style.display = "none";
          levelBox.style.display = "block";
        }
      }

      function quiz(qArray, oArray, aArray) {
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
          quizContent.style.boxShadow = "0 0 50px #00FF00";


        } else {
          feedback.innerHTML = " Your answer waas Incorrect! The correct answer was: " + optionsArray[i][(correctAnswer - 1)];
          feedback.style.color = "red";
          quizContent.style.boxShadow = "0 0 50px #FF0000";
        }

      }

      function nextQuestion() {
        quizContent.style.boxShadow = "";
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

        finalScoreMessage.innerHTML = "Quiz completed " + userName.value + " ,you got " + points + " out of " + questionsArray.length;
        percentage = Math.round((points / answersArray.length) * 100);
        console.log(percentage)
        percentageText.innerHTML = percentage + "%";
        quizBox.style.display ="none";
        progrss.style.display = "none";
        replay.style.display = "block";



 if (percentage > 30) {
  personalizedMessage.innerHTML = userName.value + " that's a good score. Have another go; you are only " + (questionsArray.length - points) + " correct answer(s) away  away from a perfect score. Consider doing some research about the Maori culture or check out the 'About' section to learn more.";
    personalizedMessage.style.color ="green"
}

if (percentage === 100) {
  personalizedMessage.innerHTML = userName.value + " that's a perfect score. Tino Pai";
  personalizedMessage.style.color ="green"
}

if (percentage <= 30) {
  personalizedMessage.innerHTML = userName.value + " Good attempt; however, you can do better. Consider checking out the 'About' page or doing some more research about Maori Culture.";
  personalizedMessage.style.color ="red"
}
 

      }
    
      function loadMenu() {
        
     
        levelBox.style.display = "block";
        welcomeMessage.innerHTML = "Welcome Back " + userName.value;
        progrss.style.display = "block";
        quizbox.style.display = "blcok";
        replay.style.display = "none";
        points = 0;
        score.innerHTML = points;
        i = 0;
        
      }
     





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
          3,
          2,
          4,
          2,
          1,
          1,
          2

        ];

        const easyOptions = [
          ["A weapon", "His hands", "Flax ropes", "His voice"],
          ["Kakariki", "Ma", "Whero", " kikorangi"],
          ["To keep it warm", "To make it brighter", "To slow it down", "All of the Above"],
          ["God", "Demi God", "King", "All of the Above"],
          ["New Zealand", "USA", "England", "Spain"],
          ["Maori", "British", "Indian", "Spainish"],
          ["Yes", "No", "Maybe", "Dont know"]



        ];

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
      "What is the Maori word for capture"] ;

        const mediumAnswers = [
          2,3,2,1,3,1,4
        ];

        const mediumOptions = [
          ["Fictional tale", "Myth", "Novel", "Play"],
          ["Scared", "Sad", "Ambitious", "Fearful"],
          ["Nobody", "His Tribe", "The Moon", "His Wife"],
          ["Te Rā", "Te Reo", "Te Rāe", "Te Rāee"],
          ["Kiwis", "Iwi", "Tangata", "Keepers"],
          ["whenua", "Ta Ra", "Hopue", "Hopu"],
          ["Hopu", "Hopa", "Hopue", "Hopu"]
    
        ];

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
        1,2,2,1,1,2,1
      ];
     quiz(hardQuestions,hardOptions,hardAnswers)
    }