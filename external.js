let choices = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let randomNum =  Math.floor(Math.random() * 3) //random (0-1) * 3 so result will be 0-2 beacuse of Math.floor()
    return randomNum
}


function getPlayerChoice(){
    let playerChoice 
    do {
        playerChoice = prompt("Enter a choice of Rock, Paper, Scissor")
        
    } while (!playerChoice || choices.indexOf(playerChoice.toLowerCase()) < 0);
    return choices.indexOf(playerChoice.toLowerCase())
    
}

/* playRound function (play one time)*/

function playRound(computerChoice, playerChoice){
    let result = playerChoice === computerChoice ? 
                    "Tie" : Math.abs(playerChoice - computerChoice) === 2 ?
                    playerChoice < computerChoice ? "Player wins": "Computer wins": playerChoice > computerChoice ? "Player wins" : "Computer wins"

    console.log(`Player chooses ${choices[playerChoice]} and Computer Chooses ${choices[computerChoice]}\nSo, ${result}.`)
    return result
}


/* playGame function */

function playGame(){
    let score = []
    for (let i = 0; i <5 ; i++){
        score[i] = playRound(getComputerChoice(), getPlayerChoice())
    }

    
   return score
}

console.log(scoreDisplay(playGame())) 

function scoreDisplay(score){
    let player = score.filter((value) => value === "Player wins").length
    let computer = score.filter((value) => value === "Computer wins").length
    let tie = score.filter((value) => value === "Tie").length

    return `Total Score: \nPlayer: ${player}\nTie: ${tie}\nComputer: ${computer}`
}