
function getComputerChoice(){
    //math.random gives us random number between .1 to .9 and so multiplying
    //it with 4 gives us random number between 1 to 3;
    //math.floor rounds off to closed integer
    let random = Math.floor(Math.random() * 4);
    if(random == 1){
        console.log("My choice : ROCK");
        return "ROCK";
    }
    else if ( random == 2){
        console.log("My choice : PAPER");
        return "PAPER";
    }
    else {
        console.log("My choice : SCISSOR");
        return "SCISSOR";
    }
}



function getHumanChoice(){
    let userInput = prompt("Enter Rock or Paper or Scissor").toUpperCase();
    userInput.toString();
    console.log("Your choice : " + userInput);
    return userInput;
}


let humanScore = 0;
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