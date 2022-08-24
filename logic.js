

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 10);
    if(random <= 3 && random >=0)
        {    
            console.log("Computer Selected Rock");
            return "Rock";
        }
    else if(random <= 6 && random >=4)
        {
            console.log("Computer Selected Paper");
            return "Paper";
        }
    else
        {    
            console.log("Computer Selected Scissors");
            return "Scissors";
        }
}


function playerRound(playerSelection,computerSelection)
{
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection===computerSelection)
        return `Both players selected ${playerSelection}. It's a tie!`
    else if(playerSelection==='rock')
        if(computerSelection==='scissors')
            return "You Win, Rock beats Scissors"
        else
            return "You Loose, Paper wraps Rock"
    else if(playerSelection==='paper')
        if(computerSelection==='rock')
            return "You Win, Paper wraps Rock"
        else
            return "You Loose, Scissors beats Paper"
    else if(playerSelection==='scissors')
        if(computerSelection==='paper')
            return "You Win, Paper beats Scissors"
        else
            return "You Loose, Scissors beats Paper"

}

function game()
    {
        for(let i=1; i<=5; i++)
        {
            let player=0;
            let cpu = 0;
            result=playerRound(playerSelection,computerSelection);
            if(result=="You Win, Rock beats Scissors" || result=="You Win, Paper wraps Rock" || result=="You Win, Paper beats Scissors")
            {
                player++;
            }
            else if(result===`Both players selected ${playerSelection}. It's a tie!`)
            {
                player++;
                cpu++;
            }
            else
                cpu++;
            console.log(`Scores: Player ${player}, CPU ${cpu}`);
        }
    }
const playerSelection='Rock';
const computerSelection=getComputerChoice();
console.log(playerRound(playerSelection,computerSelection));
game();