const weapons = [0,1,2]
const buttons = document.getElementsByClassName("gameButtons");
let playerChoice;
let computerChoice;
var convertComputerChoice = "";
var playerScore = 0;
var computerScore = 0;
var WLD = "";


function rock(){
    buttons.disabled=true;
    for(var i=0; i<buttons.length; i++){
        buttons[i].disabled= true;
    }
    playerChoice = weapons[0];
    calculate();
}
function paper(){
    buttons.disabled = true;
    for(var i=0; i<buttons.length; i++){
        buttons[i].disabled= true;
    }
    playerChoice = weapons[1];
    calculate();
}
function scissors(){
    buttons.disable = true;
    for(var i=0; i<buttons.length; i++){
        buttons[i].disabled= true;
    }
    playerChoice = weapons[2];
    calculate();
}
function randomChoice(){
    randomNumber = Math.floor(Math.random()*3) +1;
    if (randomNumber == 1){
        computerChoice = weapons[0];
        convertComputerChoice = "Rock";
    }
    else if(randomNumber == 2){
        computerChoice = weapons[1];
        convertComputerChoice = "Paper";
    }
    else if(randomNumber == 3){
        computerChoice = weapons[2];
        convertComputerChoice = "Scissors";
    }
    return computerChoice
}
function checkWeapons(){
    randomChoice();
    if (playerChoice==weapons[0]){
        if (computerChoice == 0){
            playerChoice = computerChoice;
        } else if (computerChoice == 1){
            computerChoice = 10
        } else if (computerChoice == 2){
            computerChoice = -10;
        }
        document.getElementById("playerChose").innerHTML = "Player Chose Rock";
    } 
    if (playerChoice==weapons[1]){
        if (computerChoice == 0){
            computerChoice = -10;
        } else if (computerChoice == 1){
            computerChoice = playerChoice
;        } else if (computerChoice == 2){
            computerChoice = +10;
        }
        document.getElementById("playerChose").innerHTML = "Player Chose Paper";
    } 
    if (playerChoice==weapons[2]){
        if (computerChoice == 0){
            computerChoice = 10;
        } else if (computerChoice == 1){
            computerChoice = -10
        } else if (computerChoice == 2){
            computerChoice = playerChoice;
        }
        document.getElementById("playerChose").innerHTML = "Player Chose Scissors";
    } 
    if (playerChoice > computerChoice){
        playerScore += 1;
        WLD ="Winner!"
    } else if (playerChoice < computerChoice){
        computerScore +=1;
        WLD ="Loss"
    } else if (playerChoice == computerChoice){
        WLD = "Draw";
    }

}

function calculate(){
    
    checkWeapons();
    document.getElementById("calculate").innerHTML ="Rock..."
    setTimeout(function(){
    document.getElementById("calculate").innerHTML="Rock... Paper..."
    },1000);
    setTimeout(function(){
        document.getElementById("calculate").innerHTML="Rock... Paper... Scissors..."
    },1500);
    setTimeout(function(){
        document.getElementById("calculate").innerHTML="SHOOT!"
    },2000);

    setTimeout(function(){
        document.getElementById("score").innerHTML = "Player: " + playerScore + " - " + "Opponent: " + computerScore;
        document.getElementById("calculate").innerHTML = "Opponent Choose " + convertComputerChoice;
    },2500)
    
    setTimeout(function(){
        document.getElementById("calculate").innerHTML = WLD;
        for(var i=0; i<buttons.length; i++){
            buttons[i].disabled= false;
        }
    },4000)

}
