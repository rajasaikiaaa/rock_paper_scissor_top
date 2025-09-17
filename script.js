//create a function that returns rock paper or scissor
function getComputerChoice(){
    //create a variable named random and assign it the math.random function multiplied by 4 ;
    let random = Math.floor(Math.random() * 4);
    //compare value of random with 1
    if(random == 1){
        console.log("My choice : ROCK");
        return "ROCK";
    }
    //compare value of random with 2
    else if ( random == 2){
        console.log("My choice : PAPER");
        return "PAPER";
    }
    //compare value of random with 3
    else {
        console.log("My choice : SCISSOR");
        return "SCISSOR";
    }
}


//function that returns userinput
function getHumanChoice(){
    //create a variable that stores the userInput 
    //ask the user for input;
    let userInput = prompt("Enter Rock or Paper or Scissor").toUpperCase();
    userInput.toString();
    console.log("Your choice : " + userInput);
    //return the value of userInput;
    return userInput;
}


//variable to store scores
//stores human score
let humanScore = 0;
//stores computer score
let computerScore = 0;

function playRound(humanChoice,computerChoice){
   if (humanChoice == "ROCK" && computerChoice == "ROCK"){
    console.log("It's a draw");
   } else if(humanChoice == "ROCK" && computerChoice == "SCISSOR"){
    humanScore++;
    console.log("You Win! Rock beats Scissor");
   } else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
    computerScore++;
    console.log("You lose! Paper beats Rock");
   } else if (humanChoice == "PAPER" && computerChoice == "PAPER"){
    console.log("It's a draw");
   } else if (humanChoice == "PAPER" && computerChoice == "ROCK"){
    humanScore++;
    console.log("You Win! Paper beats Rock");
   } else if (humanChoice == "PAPER" && computerChoice == "SCISSOR"){
    computerScore++;
    console.log("You lose! Scissor cuts Paper");
   } else if (humanChoice == "SCISSOR" && computerChoice == "SCISSOR"){
    console.log("It's a draw");
   } else if ( humanChoice == "SCISSOR" && computerChoice == "ROCK"){
    computerScore++;
    console.log("You lose! Rock beats Scissor");
   } else if ( humanChoice == "SCISSOR" && computerChoice == "PAPER"){
    humanScore++;
    console.log("You win! Scissor cuts Paper");
   }
}

function playGame(){
    const maxRound = 10;
    for(let i=1; i<=maxRound; i++){
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Round : " + i);
        console.log(`Remaining Round : ${maxRound - i}`);
        console.log("Your score : " + humanScore);
        console.log("Computer Score : " + computerScore);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    }

    if(humanScore > computerScore){
        console.log("Hurray! You are the Winner.");
    } else {
        console.log("Oh o! You are the loser. Try Again");
    }

    console.log("REFRESH FOR A NEW GAME!");
}

playGame();