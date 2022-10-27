// player vs computer 
// best 2/3 rounds 
// computer makes a random choice of rock, paper or scissors 
// user should choose rock, paper or scissors via buttons - can be set randomly while testing 
// player and computer make a choice of rock, paper, scissors each round 

// compare player vs computer's choices 
// paper beats rock 
// rock beats scissors 
// scissors beats paper 
// use if else or switch statement to determine if user or computer wins the round 
// increase the score counter for the winning player each round 


//global variables 
let computerScore = 0;
let userScore = 0;

//function getChoice
  //gets user's choice of rock paper or scissors - randomized while testing 
  //gets a random choice for computer player of rock paper or scissors 
  //returns an object containing the user's choice and computer's choice 
  function getChoice(){
    //choices array 
    let choices = ["rock", "paper", "scissors"];
    //generate a random number between 0 - 2
    let randomNum1 = Math.floor(Math.random() * 3);
    let randomNum2 = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNum1];
    let userChoice = choices[randomNum2];

    return {
      userChoice,
      computerChoice
    }

  }
  // console.log(getChoice().userChoice);


//function compareChoice 
  //takes in userChoice and computerChoice as arguments 
  //use nested if else to test user vs computer 
  //outputs console.log messages for each outcome 
  //increments the winners score 

  //userChoice and computerChoice are coming in as strings ( "rock", "paper" or "scissors")
  function compareChoice(userChoice, computerChoice){
      //test for tie first 
    if(userChoice === computerChoice){
      console.log("it's a tie!");
    }
    if(userChoice === "rock"){
      //if user chose rock, computer choice could be scissors or paper 
      if(computerChoice === "scissors"){
        //user chose rock, computer chose scissors
        console.log("rock beats scissors! player wins this round!");
        //increase user's score counter 
        userScore++;
      }
      else if(computerChoice === "paper"){
        //user chose rock, computer chose paper
        console.log("paper beats rock! computer wins this round!");
         computerScore++;
      }
    }
    else if (userChoice === "paper") {
      //in this block, the user chose paper 
      //computer could choose rock or scissors
      if(computerChoice === "rock"){
        //user chose paper, computer chose rock
        console.log("paper beats rock! user wins this round");
         userScore++;
      }
      else if(computerChoice === "scissors"){
        //user chose paper, computer chose scissors
        console.log("scissors beats paper! computer wins this round!");
        computerScore++;
      }
    }
    else if(userChoice === "scissors"){
      //in this block, the user chose scissors 
      if(computerChoice === "rock"){
        console.log("rock beats scissors! computer wins this round!");
        computerScore++;
      }
      else if(computerChoice === "paper"){
        console.log("scissors beats paper! user wins this round!");
        userScore++;
      }
    }

  }

  // compareChoice(getChoice().userChoice, getChoice().computerChoice);
  //console.log(`user score: ${userScore}, computer score: ${computerScore}`);


//function playGame
  //counts round number 
  //run a while loop as long as computer and user's score are < 2(best 2/3)
    //inside the while loop 
    //increment round counter 
    //run compare choice
    
  function playGame(){
    let roundCounter = 0;
    //run a while loop as long as computer and user's score are < 2
    //while loop represents each round of rps 
    while(computerScore < 2 && userScore < 2){
      roundCounter++;
      //output which round number we're on
      console.log(`round #${roundCounter} user score: ${userScore} computer score: ${computerScore}`);
      let computerChoice = getChoice().computerChoice; //this will be a string either 'rock' 'paper' or 'scissors'
      let userChoice = getChoice().userChoice; //this will be a string either 'rock' 'paper' or 'scissors'
      compareChoice(userChoice, computerChoice);
    }
    //declare the winner
    if(computerScore > userScore){
      console.log("Computer wins. Better luck next time");
    }
    else if(userScore > computerScore){
      console.log("Congrats you win!");
    }
    //tie case
    else if(computerScore === userScore){
      console.log("its a tie!")
    }
    else{
      console.log("uh oh... something went wrong");
    }

  }
  playGame();