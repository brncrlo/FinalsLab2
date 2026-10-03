// Display welcome message
alert("Welcome to the Score Evaluation Program!");

// Ask for the user's name
let name = prompt("Enter your name:");

// Ask for the user's score
let score = prompt("Enter your score:");

// Ask the user if they want to continue
let proceed = confirm("Do you want to continue?");

// Function to evaluate the score
function evaluateScore(score) {
  // Check if the score is empty or not a number
  if (score === "" || isNaN(score)) {
    return "Invalid score";
  }

  // Convert the score into a number
  score = Number(score);

  // Check if the score is zero or negative
  if (score <= 0) {
    return "Invalid score";
  }

  // Check if the score is greater than 100
  if (score > 100) {
    return "Invalid score";
  }

  // Evaluate the score
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

// Check if the user wants to continue
if (proceed) {
  // Check if the name is empty
  if (name === null || name.trim() === "") {
    document.getElementById("result").innerHTML =
      "<h2 class='error'>Invalid Input</h2>" + "<p>Please enter your name.</p>";
  }

  // Check if the name contains numbers or invalid characters
  else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    document.getElementById("result").innerHTML =
      "<h2 class='error'>Invalid Name</h2>" +
      "<p>Please enter a valid name using letters only.</p>";
  }

  // Check if the score is empty
  else if (score === null || score.trim() === "") {
    document.getElementById("result").innerHTML =
      "<h2 class='error'>Invalid Input</h2>" +
      "<p>Please enter your score.</p>";
  }

  // If all basic inputs are valid
  else {
    // Evaluate the score
    let remark = evaluateScore(score);

    // Check if the score is invalid
    if (remark === "Invalid score") {
      document.getElementById("result").innerHTML =
        "<h2 class='error'>Invalid Score</h2>" +
        "<p>Please enter a score from 1 to 100.</p>";
    }

    // Display valid result
    else {
      document.getElementById("result").innerHTML =
        "<h2>Result</h2>" +
        "<p class='result-name'>" +
        name +
        "</p>" +
        "<p>Score: " +
        score +
        "</p>" +
        "<p class='remark'>" +
        remark +
        "</p>";
    }
  }
}

// If the user chooses Cancel
else {
  document.getElementById("result").innerHTML =
    "<h2 class='cancelled'>Program Cancelled</h2>" +
    "<p>You chose not to continue.</p>";
}