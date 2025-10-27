console.log("script.js connected!");

// ===========================
// GLOBAL VARIABLES
// ===========================
let totalScore = 0;
let userAnswers = {};

// ===========================
// HELPER FUNCTION TO HANDLE QUESTIONS
// ===========================
function handleQuestion(questionId, responses) {
  const buttons = document.querySelectorAll(`#${questionId} button`);
  const output = document.getElementById(`output-message${questionId.split('-')[1]}`);

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove highlight from other buttons
      buttons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");

      // Get user's selected answer
      const answer = button.dataset.answer;
      const response = responses[answer];

      // Display message + update score
      if (response) {
        output.textContent = response.message;
        totalScore += response.points;
        console.log(`Current totalScore: ${totalScore}`);
      }

      // Save answer to global object
      userAnswers[questionId] = answer;
      console.log(userAnswers);
    });
  });
}

// ===========================
// QUESTION 1
// ===========================
handleQuestion("question-1", {
  tanker: { message: "I see, you're the opener", points: 4 },
  swordman: { message: "It's always nice with some helps", points: 3 },
  mage: { message: "You always help others, how nice of you", points: 2 },
  ranger: { message: "Your vision is crucial for the group", points: 1 },
});

// ===========================
// QUESTION 2
// ===========================
handleQuestion("question-2", {
  "100%": { message: "Oh, you're experienced huh", points: 4 },
  "75%": { message: "It's alright, everyone does", points: 3 },
  "50%": { message: "I see, be more aware of your surrounding", points: 2 },
  "25%": { message: "At least your best not to standing still", points: 1 },
});

// ===========================
// QUESTION 3
// ===========================
handleQuestion("question-3", {
  "a lot": { message: "Hey, strong man!", points: 4 },
  "good amount": { message: "Very good, but not impressive", points: 3 },
  enough: { message: "Yeah, you'll be fine!", points: 2 },
  "what's moving?": { message: "Go hit the training ground!", points: 1 },
});

// ===========================
// QUESTION 4
// ===========================
handleQuestion("question-4", {
  liquid: { message: "Wow, you're like water", points: 4 },
  jelly: { message: "Those parkours will be useful", points: 3 },
  snake: { message: "Yeah, you'll be fine! (pt.2)", points: 2 },
  stick: { message: "A standing stone huh...", points: 1 },
});

// ===========================
// QUESTION 5
// ===========================
handleQuestion("question-5", {
  "decisions maker": { message: "You must be a decisive person, eh?", points: 4 },
  supporter: { message: "Everyone will need your support!", points: 3 },
  whatever: { message: "You're mostly on your own, be careful", points: 2 },
  brain: { message: "The brain, the vision!", points: 1 },
});

// ===========================
// RESULT BUTTON EVENT
// ===========================
const resultButton = document.getElementById("result-button");
if (resultButton) {
  resultButton.addEventListener("click", displayResult);
}

function displayResult() {
  console.log("User answers:", userAnswers);

  // Reset totalScore before tallying
  totalScore = 0;

  const scoreMap = {
    tanker: 4, swordman: 3, mage: 2, ranger: 1,
    "100%": 4, "75%": 3, "50%": 2, "25%": 1,
    "a lot": 4, "good amount": 3, enough: 2, "what's moving?": 1,
    liquid: 4, jelly: 3, snake: 2, stick: 1,
    "decisions maker": 4, supporter: 3, whatever: 2, brain: 1
  };

  for (let key in userAnswers) {
    const answer = userAnswers[key];
    if (scoreMap[answer]) {
      totalScore += scoreMap[answer];
    }
  }

  console.log("Final total score:", totalScore);
  
  let resultMessage = "";
  if (totalScore >= 18) {
    resultMessage = `🏆 Your total score: ${totalScore} — You're a natural-born leader!`;
  } else if (totalScore >= 12) {
    resultMessage = `💪 Your total score: ${totalScore} — Strong and balanced, a great team player!`;
  } else if (totalScore >= 7) {
    resultMessage = `🌱 Your total score: ${totalScore} — You have potential! Keep training and improving.`;
  } else {
    resultMessage = `😴 Your total score: ${totalScore} — You might need to level up a bit before the next adventure!`;
  }

  // Show result box and update text
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  resultText.textContent = resultMessage;
  resultContainer.style.display = "block";
}

// ===========================
// RESULT BUTTON EVENT
// ===========================
document.getElementById("show-result").addEventListener("click", displayResult);

