console.log("script.js connected!");
let buttons1 = document.querySelectorAll("#question-1 button");


buttons1.forEach(function(button1) {
  button1.addEventListener("click", function() {
    // Previous highlight button code
    buttons1.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button1.classList.add("selected");
    
    
    let role = button1.getAttribute("data-answer");
    let output1 = document.getElementById("output-message1");
    
    // Now we can write different responses based on the mood
    if (role === "tanker") {
      output1.textContent = "I see, you're the opener";
    } else if (role === "swordman") {
      output1.textContent = "It's always nice with some helps";
    } else if (role === "mage") {
      output1.textContent = "You always help others, how nice of you";
    } else if (role === "ranger") {
      output1.textContent = "Your vision is crucial for the group";
    }
  });
});

// 1. Create an empty object that will store user data
let userAnswers1 = {}
buttons1.forEach(function(button) {
  button.addEventListener("click", function() {
    // Highlight button code not shown
    	
    // 2. Get the data using the dataset attribute 
    let buttonID = button.dataset.buttonid
    let response = button.dataset.answer;
    // 3. Store the data in the object
    userAnswers1[buttonID] = response;
    console.log(userAnswers1); // See current stored answers
  });
});

let buttons2 = document.querySelectorAll("#question-2 button");


buttons2.forEach(function(button2) {
  button2.addEventListener("click", function() {
    // Previous highlight button code
    buttons2.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button2.classList.add("selected");
    
    
    let position = button2.getAttribute("data-answer");
    let output2 = document.getElementById("output-message2");
    
    // Now we can write different responses based on the mood
    if (position === "100%") {
      output2.textContent = "Oh, you're experienced huh";
    } else if (position === "75%") {
      output2.textContent = "It's alright, everyone does";
    } else if (position === "50%") {
      output2.textContent = "I see, be more aware of your surrounding";
    } else if (position === "25%") {
      output2.textContent = "At least your best not to standing still";
    }
  });
});

// 1. Create an empty object that will store user data
let userAnswers2 = {}
buttons2.forEach(function(button) {
  button.addEventListener("click", function() {
    // Highlight button code not shown
    	
    // 2. Get the data using the dataset attribute 
    let buttonID = button.dataset.buttonid
    let response = button.dataset.answer;
    // 3. Store the data in the object
    userAnswers2[buttonID] = response;
    console.log(userAnswers2); // See current stored answers
  });
});

let buttons3 = document.querySelectorAll("#question-2 button");


buttons3.forEach(function(button3) {
  button3.addEventListener("click", function() {
    // Previous highlight button code
    buttons3.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button3.classList.add("selected");
    
    
    let stamina = button3.getAttribute("data-answer");
    let output3 = document.getElementById("output-message3");
    
    // Now we can write different responses based on the mood
    if (stamina === "a lot") {
      output3.textContent = "Hey, strong man!";
    } else if (stamina === "good amount") {
      output3.textContent = "Very good, but not impressive";
    } else if (stamina === "enough") {
      output3.textContent = "Yeah, you'll be fine!";
    } else if (stamina === "what's moving?") {
      output3.textContent = "Go hit the training ground! ";
    }
  });
});

// 1. Create an empty object that will store user data
let userAnswers3 = {}
buttons3.forEach(function(button) {
  button.addEventListener("click", function() {
    // Highlight button code not shown
    	
    // 2. Get the data using the dataset attribute 
    let buttonID = button.dataset.buttonid
    let response = button.dataset.answer;
    // 3. Store the data in the object
    userAnswers3[buttonID] = response;
    console.log(userAnswers3); // See current stored answers
  });
});