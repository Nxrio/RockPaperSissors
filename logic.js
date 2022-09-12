// function getComputerChoice()
// {
//     let random = Math.floor(Math.random() * 10);
//     if(random <= 3 && random >=0)
//         {    
//             console.log("Computer Selected Rock");
//             return "Rock";
//         }
//     else if(random <= 6 && random >=4)
//         {
//             console.log("Computer Selected Paper");
//             return "Paper";
//         }
//     else
//         {    
//             console.log("Computer Selected Scissors");
//             return "Scissors";
//         }
// }


// function playerRound(playerSelection,computerSelection)
// {
//     playerSelection=playerSelection.toLowerCase();
//     computerSelection=computerSelection.toLowerCase();
//     if(playerSelection===computerSelection)
//         return `Both players selected ${playerSelection}. It's a tie!`
//     else if(playerSelection==='rock')
//         if(computerSelection==='scissors')
//             return "You Win, Rock beats Scissors"
//         else
//             return "You Loose, Paper wraps Rock"
//     else if(playerSelection==='paper')
//         if(computerSelection==='rock')
//             return "You Win, Paper wraps Rock"
//         else
//             return "You Loose, Scissors beats Paper"
//     else if(playerSelection==='scissors')
//         if(computerSelection==='paper')
//             return "You Win, Scissors beats paper"
//         else
//             return "You Loose, Rock beats paper "

// }

// function game()
//     {
//         let player=0;
//         let cpu = 0;
//         for(let i=1; i<=5; i++)
//         {
            
//             let playerSelection=playerChoice();
//             const computerSelection=getComputerChoice();
//             result=playerRound(playerSelection,computerSelection);
//             if(result==="You Win, Rock beats Scissors" || result==="You Win, Paper wraps Rock" || result=="You Win, Paper beats Scissors")
//             {
//                 console.log(`You selected ${playerSelection}`);
//                 player++;
//             }
//             else if(result==="You Loose, Paper wraps Rock" || result==="You Loose, Scissors beats Paper" || result==="You Loose, Rock beats paper ")
//             {
//                 console.log(`You selected ${playerSelection}`);
//                 cpu++;
//             }
//             else
//             {
//                 console.log(`You selected ${playerSelection}, It's a tie`);
//                 cpu++;
//                 player++;
//             }
//             console.log(`Scores: Player ${player}, CPU ${cpu}`);
//         }
//         if(player>cpu)
//             console.log("Congratulations! You win!");
//         else if(cpu>player)
//             console.log("Sorry! You lost");
//         else
//             console.log("its a tie!");
//     }


// //console.log(playerRound(playerSelection,computerSelection));
// game();

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 10);
    if(random <= 3 && random >=0)
        {    
            console.log("Computer Selected Rock");
            return "rock";
        }
    else if(random <= 6 && random >=4)
        {
            console.log("Computer Selected Paper");
            return "paper";
        }
    else
        {    
            console.log("Computer Selected Scissors");
            return "scissors";
        }
}


// function playerRound(playerSelection,computerSelection)
// {
//     //computerSelection=computerSelection.toLowerCase();
//     if(playerSelection==="invalidInput")
//         return "invalidInput";
//     else if(playerSelection===computerSelection)
//         return `Both players selected ${playerSelection}. It's a tie!`;
//     else if(playerSelection==='rock')
//         if(computerSelection==='scissors')
//             return "You Win, Rock beats Scissors";
//         else
//             return "You Loose, Paper wraps Rock";
//     else if(playerSelection==='paper')
//         if(computerSelection==='rock')
//             return "You Win, Paper wraps Rock";
//         else
//             return "You Loose, Scissors beats Paper";
//     else if(playerSelection==='scissors')
//         if(computerSelection==='paper')
//             return "You Win, Scissors beats paper";
//         else
//             return "You Loose, Rock beats paper ";

// }

// //let playerSelection=playerChoice();
// const computerSelection=getComputerChoice();
// //result=playerRound(playerSelection,computerSelection);

// function game()
//     {
//         let player=0;
//         let cpu = 0;
//         // for(let i=1; i<=5; i++)
//         // {
            
//             //let playerSelection=playerChoice();
//             //const computerSelection=getComputerChoice();
//              result=playerRound(playerSelection,computerSelection);
//             if(result==="You Win, Rock beats Scissors" || result==="You Win, Paper wraps Rock" || result=="You Win, Paper beats Scissors")
//             {
//                 console.log(`You WON! \nYou selected ${playerSelection}\n${playerSelection} beats ${computerSelection}`);
//                 player++;
//             }
//             else if(result==="You Loose, Paper wraps Rock" || result==="You Loose, Scissors beats Paper" || result==="You Loose, Rock beats paper ")
//             {
//                 console.log(`You LOST! \nYou selected ${playerSelection}\n${computerSelection} beats ${playerSelection}`);
//                 cpu++;
//             }
//             else if(result==="invalidInput")
//             {
//                 console.log("Invalid Input, Please enter Rock, Paper, or Scissors");
//             }
//             else
//             {
//                 console.log(`You selected ${playerSelection}, It's a tie`);
//                 cpu++;
//                 player++;
//             }
//             console.log(`Scores: Player ${player}, CPU ${cpu}`);
//         // }
//         if(player>cpu)
//             console.log("Congratulations! You win!");
//         else if(cpu>player)
//             console.log("Sorry! You lost");
//         else
//             console.log("its a tie!");
//     }
// // function playerChoice()
// // {
// //     userInput = prompt("Rock,Paper or Scissors","Rock");
// //     userInput=userInput.toLowerCase();
// //     if(userInput==='rock' || userInput==='paper' || userInput==='scissors')
// //     {
// //         return userInput;
// //     }
// //     else
// //     {
// //         return "invalidInput";
// //     }
// // }

// //console.log(playerRound(playerSelection,computerSelection));
// game();

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playAgain = document.getElementById('restart');
let displayFlag = 0;
let player = 0;
let cpu = 0;


// Player selection Rock
rock.addEventListener('click', playerRoundRock);
//console.log(playerSelectionRock);

//Player selection Paper
paper.addEventListener('click', playerRoundPaper);

//Player selection Scissors
scissors.addEventListener('click', playerRoundScissors);

//Play Again and reset all scores
restart.addEventListener('click',resetGame);


function playerRoundRock(e){
    displayFlag=1;
    let result = "";
    e.preventDefault();
    let computerSelection = getComputerChoice();
    if(computerSelection==='paper'){
        result = "You Loose Paper Wraps Rock";
        cpu++;
    }
    else if(computerSelection==='scissors'){
        result = "You Win Rock beats Scissors";
        player++;
    }
    else    result = "its a tie";
    document.getElementById("txtresult").innerHTML = result;
    showHide();
    checkScore();
}

function playerRoundPaper(e){
    displayFlag=1;
    let result = "";
    e.preventDefault();
    let computerSelection = getComputerChoice();
    if(computerSelection==='rock'){
        result = "You Win Paper Wraps Rock";
        player++;
    }
    else if(computerSelection==='scissors'){
        result = "You Loose Scissors cuts Paper";
        cpu++;
    }
    else result ="its a tie";
    document.getElementById("txtresult").innerHTML = result;
    showHide();
    checkScore();
}

function playerRoundScissors(e){
    e.preventDefault();
    displayFlag=1;
    let result = "";
    let computerSelection = getComputerChoice();
    if(computerSelection==='rock'){
        result = "You Loose Rock beats Scissors";
        cpu++;
    }
    else if(computerSelection==='paper'){
        result = "You Win Scissors cuts Paper";
        player++;
    }
    else result = "its a tie";
    document.getElementById("txtresult").innerHTML = result;
    showHide();
    checkScore();
}

window.onload = function (){
    //document.getElementById("displayResult").style.display = 'block';
    showHide();
    hideButton();
}

function showHide (){
    
    if (displayFlag === 0){
        document.getElementById("displayResult").style.display = 'none';
        document.getElementById("displayScore").style.display='none';
        document.getElementById("computerScore").style.display='none';
        document.getElementById("playerScore").style.display='none';
        
        
    
    }
    else{
        document.getElementById("displayResult").style.display='flex';
        document.getElementById("displayScore").style.display='flex';
        document.getElementById("computerScore").style.display='flex';
        document.getElementById("playerScore").style.display='flex';
        
        
    }


}

// Display Running Score
function checkScore(){
    document.getElementById("computerScore").innerHTML = cpu;
    document.getElementById("playerScore").innerHTML = player;
    if(player===5 || cpu===5){
        showButton();
        if(player===5){
            document.getElementById("finalScore").innerHTML="You Win!";
            document.getElementById("finalScore").style.display='flex';
            document.getElementById("finalScore").style.color="green";
            document.getElementById("playAgain").innerHTML="Play Again";
            resetScore();
            
        }
        else{
            document.getElementById("finalScore").style.color="red";
            document.getElementById("finalScore").style.display='flex';
            document.getElementById("finalScore").innerHTML="You Loose!";
            document.getElementById("playAgain").innerHTML="Play Again";
            resetScore();
           
        }
        resetGame();
    }
    else{
        document.getElementById("finalScore").style.display='none';
    }
    
}

function resetScore(){
    player=0;
    cpu=0;
    
    // displayFlag=0;
    // showHide();
}

function resetGame(e){
    e.preventDefault();
    displayFlag=0;
    showHide();
    resetScore();
    document.getElementById("finalScore").style.display='none';
    hideButton();
    
}

function hideButton(){
    document.getElementById("restart").style.display='none';
}
function showButton(){
    document.getElementById("restart").style.display='flex';
}