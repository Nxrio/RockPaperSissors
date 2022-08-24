

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 10);
    if(random <= 3 && random >=0)
        return "Rock";
    else if(random <= 6 && random >=4)
        return "Paper";
    else    
        return "Sissors";
}
console.log(getComputerChoice());
