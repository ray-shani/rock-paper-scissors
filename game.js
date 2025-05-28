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
console.log(getComputerChoice());

// Second part of the question

function getHumanChoice(){
let humanInput=prompt("Input rock,paper,scissors");
return humanInput;
}
const humanInputSelection=getHumanChoice();
console.log(`You chose ${humanInput}`);


// Third part of the question
let humanScore=0;
let computerScore=0;

// Fourth part of the question
function playRound(humanChoice,computerChoice){





  
}
