let choices = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let randomNum =  Math.floor(Math.random() * 3) //random (0-1) * 3 so result will be 0-2 beacuse of Math.floor()
    return choices[randomNum]
}


function getPlayerChoice(){
    let playerChoice
    do {
        playerChoice = prompt("Enter a choice of Rock, Paper, Scissor")
    } while (playerChoice || gettingIncorrectInput(playerChoice));
    
}

function gettingIncorrectInput(playerChoice){
   let isIncluded =  choices.filter((choice)=>choice === playerChoice.toLowerCase())
    return isIncluded.length > 0 ? isIncluded[0] : false
}
