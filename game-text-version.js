//global variables
let computerScore = 0;
let userScore = 0;

//function getChoice
  //gets user's choice of rock paper or scissors 
  //gets a randome choice for computer player of rock paper or scissors 
  //returns an object containing the user's choice and computer's choice 
function getChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  let randomNum2 = Math.floor(Math.random() * 3);
  let userChoice = choices[randomNum];
  let computerChoice = choices[randomNum2];

  return {
    userChoice,
    computerChoice,
  };
}

//function compareChoice 
  //takes in userChoice and computerChoice as arguments 
  //use nested if else to test user vs computer 
  //outputs console.log messages for each outcome 
  //increments the winners score 
function compareChoice(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("tie!");
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("paper covers rock! player wins");
      userScore++;
    } else if (computerChoice === "scissors") {
      console.log("scissors cuts paper! computer wins");
      computerScore++;
    }
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("paper covers rock! computer wins");
      computerScore++;
    } else if (computerChoice === "scissors") {
      console.log("rock smashes scissors! player wins");

      userScore++;
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("scissors cuts paper! player wins");
      userScore++;
    } else if (computerChoice === "rock") {
      console.log("rock smashes scissors! computer wins");
    }
  }
}
//function playGame
  //counts round number 
  //run a while loop as long as computer and user's score are < 2(best 2/3)
    //inside the while loop 
    //increment rount counter 
    //run compare choice 
    //use if else to determine the winner and log a message declaring who won and lost 
function playGame() {
  let roundcounter = 0;
  while (computerScore < 2 && userScore < 2) {
    roundcounter++;
    console.log(`round #${roundcounter}`);
    compareChoice(getChoice().userChoice, getChoice().computerChoice);
  }
  if (computerScore > userScore) {
    console.log(
      `Computer wins! computer: ${computerScore}, player: ${userScore}`
    );
  } else if (userScore > computerScore) {
    console.log(
      `Player wins! player: ${userScore}, computer: ${computerScore}`
    );
  }
}

playGame();
