function getComputerChoice()
{
    let random = Math.floor(Math.random()*10) + 1;
    
    if(random < 4)
    {
        return "rock";
    } else if (random < 7)
    {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection.toLowerCase())
    {
        case "rock":
            if(computerSelection === "rock")
            {
                return "Tie! Nobody Wins";
            } else if(computerSelection === "paper")
            {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "rock")
            {
                return "You Win! Paper beats Rock";
            } else if(computerSelection === "paper")
            {
                return "Tie! Nobody Wins";
            } else {
                return "You Lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "rock")
            {
                return "You Lose! Rock beats Scissors";
            } else if(computerSelection === "paper")
            {
                return "You Win! Scissors beats Paper";
            } else {
                return "Tie! Nobody Wins";
            }
            break;
        default:
            return "That is not a valid selection!";
            break;
    }

}

function game()
{
    let playerSelection = prompt("Select one: Rock/Paper/Scissors", "rock");
    if(playerSelection !== null && playerSelection !== undefined)
    {    
        const computerSelection = getComputerChoice();
        let result = (playRound(playerSelection, computerSelection));

        if(result === "That is not a valid selection!")
        {
            console.log("That is not a valid selection, game ended");
        } else {
            console.log("Your pick: " + playerSelection);
            console.log("My pick: " + computerSelection);
            console.log(result);
            game();
        }
    } else {
        console.log("That is not a valid selection, game ended");
    }
}

game();