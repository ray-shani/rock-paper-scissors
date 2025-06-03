
function getComputerChoice(){
  let answer=Math.random()*3;
  let givenAnswer=Math.floor(answer);
 
  if(givenAnswer===0){
    return "rock";
  }
  else if(givenAnswer===1){
    return "paper";
  }
  else {
    return "scissors";
  }
} 

function getHumanChoice(){
  let userInput=prompt("Enter rock,paper,scissors");
  return userInput;
}
// let answer=getHumanChoice();
// console.log(answer);


let humanScore=0;
let computerScore=0;


// function playRound(humanChoice,computerChoice){
// const humanSelection = humanChoice.toLowerCase();
// const computerSelection = computerChoice.toLowerCase();

//  if (humanSelection === 'rock' && computerSelection === 'scissors') {
//       console.log("You win! Rock beats Scissors.");
//       humanScore++;
//     // "You have won! Scissors beat Paper."
//     } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
//       console.log("You win! Scissors beat Paper.");
//       humanScore++;
//       // "You win! Paper beats Rock!"
//     } else if (humanSelection === 'paper' && computerSelection === 'rock') {
//       console.log("You win! Paper beats Rock!");
//       humanScore++;
//       // "You lose! Rock beats Scissors."
//     } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
//       console.log("You lose! Rock beats Scissors.");
//       computerScore++;
//       // "You lose! Scissors beat Paper."
//     } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
//       console.log("You lose! Scissors beat Paper.");
//       computerScore++;
//       // "You lose! Paper beats Rock."
//     } else if (humanSelection === 'rock' && computerSelection === 'paper') {
//       console.log("You lose! Paper beats Rock.")
//       computerScore++;
//     } else {
//       console.log(`Draw.Both have picked ${computerSelection} || ${humanSelection}.`);
//     }

//     console.log(`HumanScore: ${humanScore} and  ComputerScore: ${computerScore}`);
//   }