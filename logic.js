

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 10);
    if(random <= 3 && random >=0)
        return "Rock";
    else if(random <= 4 && random >=3)
        return "Paper";
    else    
        return "Sissors";
}
console.log(getComputerChoice());