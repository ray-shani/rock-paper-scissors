
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


// g