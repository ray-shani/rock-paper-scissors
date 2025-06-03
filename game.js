function getComputerChoice() {
    let answer = Math.random() * 3;
    let givenAnswer = Math.floor(answer);

    if (givenAnswer === 0) {
        return "rock";
    } else if (givenAnswer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter rock,paper,scissors");
    return userInput;
}
// let answer=getHumanChoice();
// console.log(answer);


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice;
    const computerSelection = computerChoice;

    if (humanSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;

    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beat Paper.");
        humanScore++;

    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats Rock!");
        humanScore++;

    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        

    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;

    } else if (humanSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } else {
        console.log(`Draw.Both have picked ${computerSelection} || ${humanSelection}.`);
    }

    console.log(`HumanScore: ${humanScore} and  ComputerScore: ${computerScore}`);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    // let gamesBegin = playRound();
    for (let round = 0; round < 5; round++) {
        console.log(` Round ${round} `);
        const currentHumanChoice = getHumanChoice();
        const currentComputerChoice = getComputerChoice();

        playRound(currentHumanChoice, currentComputerChoice);
        if (humanScore > computerScore) {
            console.log(`The winner is the human with ${humanScore}`);
        } else if (computerScore > humanScore) {
            console.log(`The winner is the computer with ${computerScore} `);
        } else if (humanScore === computerScore) {
            console.log(`This is a tie`)
        } 
      }
}
playGame();
