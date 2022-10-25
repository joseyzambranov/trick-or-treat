const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleCHoise=>possibleCHoise.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoise()
    getResult()
}))

function generateComputerChoise(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length)+1
    if(randomNumber === 1){
        computerChoice = "rock" 
    }if(randomNumber === 2){
        computerChoice = "paper" 
    }if(randomNumber === 3){
        computerChoice = "scissors" 
    }
computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if(computerChoice===userChoice){
        result = "its a draw!"
    }
    if(computerChoice=== 'rock' && userChoice ==='paper'){
        result = "Your win!"
    }
    if(computerChoice=== 'rock' && userChoice ==='scissors'){
        result = "Your lost!"
    }
    if(computerChoice=== 'paper' && userChoice ==='scissors'){
        result = "Your lose!"
    }
    if(computerChoice=== 'paper' && userChoice ==='rock'){
        result = "Your lost!"
    }
    if(computerChoice=== 'scissors' && userChoice ==='paper'){
        result = "Your win!"
    }

    resultDisplay.innerHTML = result
}