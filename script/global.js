// declarations
let difficulty = "normal";
let computerVictories = 0;
let playerVictories = 0;
const startButton = document.querySelector('#startGameButton');
const startupDiv = document.querySelector('.startup-container');
const gameDiv = document.querySelector('.game-container');
const cancelButton = document.querySelector('#giveUpGameButton');
const difficultyButton = document.querySelector('#difficultyGameButton');
const gameStatus = document.querySelector('.game-status-text');
const scoreYou = document.querySelector('#game-score-you');
const scoreComputer = document.querySelector('#game-score-computer');
const options = document.querySelectorAll('.game-option');
const resetButton = document.querySelector('#resetGameButton');
const scoreWinner = document.querySelector('#game-score-winner');

// event handlers
startButton.addEventListener('click', (event) => {
    startupDiv.style.display = 'none';
    gameDiv.style.display = 'block';
});

cancelButton.addEventListener('click', (event) => {
    gameDiv.style.display = 'none';
    startupDiv.style.display = 'block';
});

difficultyButton.addEventListener('click', (event) => {
    if(difficulty === "normal")
    {
        difficulty = "hard";
        difficultyButton.textContent = "Normal mode";
    } else {
        difficulty = "normal";
        difficultyButton.textContent = "Hard mode";
    }

});

// apply handler to all game options
options.forEach((option) => {
    option.addEventListener('click', (event) => {
        if(option.classList.contains("game-rock"))
        {
            game("rock");
        } else if(option.classList.contains("game-paper"))
        {
            game("paper");
        } else if(option.classList.contains("game-scissors"))
        {
            game("scissors");
        }

    });
});
// reset game handler
resetButton.addEventListener('click', (event) => {
    // reset game
    computerVictories = 0;
    playerVictories = 0;
    difficulty = "normal";
    // Update game status
    gameStatus.textContent = "Behold my might!";
    // Update scoreboard
    scoreYou.textContent = "Your victories: " + playerVictories;
    scoreComputer.textContent = "Computer victories: " + computerVictories;
    scoreWinner.textContent = "";

});

// game logic
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
    if(difficulty === "hard")
    {
        switch (playerSelection.toLowerCase())
        {
            case "rock":
                computerSelection = "paper";
                break;
            case "paper":
                computerSelection = "scissors";
                break;
            case "scissors":
                computerSelection = "rock";
                break;
        }
    } else {
        computerSelection = computerSelection.toLowerCase();
    }

    switch (playerSelection.toLowerCase())
    {
        case "rock":
            if(computerSelection === "rock")
            {
                return "Tie! Nobody Wins";
            } else if(computerSelection === "paper")
            {
                ++computerVictories;
                return "I Win! Paper beats Rock";
            } else {
                ++playerVictories;
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "rock")
            {
                ++playerVictories;
                return "You Win! Paper beats Rock";
            } else if(computerSelection === "paper")
            {
                return "Tie! Nobody Wins";
            } else {
                ++computerVictories;
                return "I Win! Scissors beats Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "rock")
            {
                ++computerVictories;
                return "I Win! Rock beats Scissors";
            } else if(computerSelection === "paper")
            {
                ++playerVictories;
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

function game(playerSelection)
{
    if(playerVictories < 5 && computerVictories < 5)
    {
        if(playerSelection !== null && playerSelection !== undefined)
        {    
            const computerSelection = getComputerChoice();
            let result = (playRound(playerSelection, computerSelection));

            if(result === "That is not a valid selection!")
            {
                console.log("What happened?");
            } else {
                // Update game status
                if(playerVictories >= 5)
                {
                    gameStatus.textContent = "HOW?! I want a rematch! Quick, press the reset button!";
                    scoreWinner.textContent = "WINNER: You!";
                } else if(computerVictories >= 5)
                {
                    gameStatus.textContent = "HAHA! I won! You were no match for me!";
                    scoreWinner.textContent = "WINNER: The Computer";
                } else {
                    gameStatus.textContent = "I picked: " + computerSelection + ", " + result;
                }
                // Update scoreboard
                scoreYou.textContent = "Your victories: " + playerVictories;
                scoreComputer.textContent = "Computer victories: " + computerVictories;
            }
        } else {
            console.log("What happened?");
        }
    }
}