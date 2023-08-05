function initialize() {
    let choiceList = ["rock", "paper", "scissors"];
    let userChoice;
    let computerChoice;
    let roundWinner;
    const buttonElements = document.querySelectorAll(".userButtonSel button");
    const buttonRock = buttonElements[0];
    const buttonPaper = buttonElements[1];
    const buttonScissors = buttonElements[2];

    buttonRock.addEventListener('click', (e) => {
        console.log("User has selected ROCK.");
        userChoice = choiceList[0];
        computerChoice = processCPUMove();
        roundWinner = playRound(userChoice, computerChoice);
        displayMessage(userChoice, computerChoice, roundWinner);
        processRound(roundWinner);
    });
    buttonPaper.addEventListener('click', (e) => {
        console.log("User has selected PAPER.")
        userChoice = choiceList[1];
        computerChoice = processCPUMove();
        roundWinner = playRound(userChoice, computerChoice);
        displayMessage(userChoice, computerChoice, roundWinner);
        processRound(roundWinner);
    });
    buttonScissors.addEventListener('click', (e) => {
        console.log("User has selected SCISSORS.")
        userChoice = choiceList[2];
        computerChoice = processCPUMove();
        roundWinner = playRound(userChoice, computerChoice);
        displayMessage(userChoice, computerChoice, roundWinner);
        processRound(roundWinner);
    });
}

function processCPUMove() {
    let choiceList = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(`CPU chooses ${choiceList[computerChoice]}!`);
    return choiceList[computerChoice];
}

function playRound(userChoice, cpuChoice)
{
    if (userChoice == cpuChoice)
    {
        console.log("It's a draw!");
        return 0;
    }
    else
    {
        switch (userChoice)
        {
            case "rock":
                if (cpuChoice == "paper")
                {
                    console.log("CPU Wins!");
                    return 2;
                }
                else
                {
                    console.log("User Wins!");
                    return 1;
                }
                break;
            case "paper":
                if (cpuChoice == "scissors")
                {
                    console.log("CPU Wins!");
                    return 2;
                }
                else
                {
                    console.log("User Wins!");
                    return 1;
                }
                break;
            case "scissors":
                if (cpuChoice == "rock")
                {
                    console.log("CPU Wins!");
                    return 2;
                }
                else
                {
                    console.log("User Wins!");
                    return 1;
                }
                break;
        }
    }
}

function processRound(results) {
    if (results == 0)
    {
        return;
    }

    const score = document.querySelectorAll(".scoreSection > div > p");
    const scoreToModify = score[(results * 2) - 1]

    if (Number(scoreToModify.textContent) + 1 > 2) {
        score[1].textContent = '0';
        score[3].textContent = '0';
    }
    else
    {
        scoreToModify.textContent = Number(scoreToModify.textContent) + 1;
    }
}

function displayMessage(userChoice, computerChoice, results) {
    const gameMessage = document.querySelector(".gameMessage");

    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    }

    if (results != 0)
    {
        const score = document.querySelectorAll(".scoreSection > div > p");
        const scoreToCheck = score[(results * 2) - 1];
    
        if (Number(scoreToCheck.textContent) + 1 > 2)
        {
            const winMessage = document.createElement('p');
            if (results == 1)
            {
                winMessage.textContent = "User has won the game! Make another move to play again!";
            }
            else
            {
                winMessage.textContent = "CPU has won the game! Make another move to play again!";
            }
    
            gameMessage.appendChild(winMessage);
        }
    }

    const displayMessage = document.createElement('p');
    const userMessage = document.createElement('p');
    const cpuMessage = document.createElement('p');

    userMessage.textContent = `User chose ${userChoice}!`;
    cpuMessage.textContent = `CPU chose ${computerChoice}!`;

    switch (results)
    {
        case 0:
            displayMessage.textContent = "It's a draw.";
            break;

        case 1:
            displayMessage.textContent = "User wins!";
            break;
        
        case 2:
            displayMessage.textContent = "CPU wins!";
            break;

        default:
            displayMessage.textContent = "An error has occurred, please contact the developer with the issue RESULTSNOTFOUND.";
            break;
    }

    gameMessage.appendChild(userMessage);
    gameMessage.appendChild(cpuMessage);
    gameMessage.appendChild(displayMessage);
}

initialize()