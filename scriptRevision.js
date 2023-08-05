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
        processRound(roundWinner);
    });
    buttonPaper.addEventListener('click', (e) => {
        console.log("User has selected PAPER.")
        userChoice = choiceList[1];
        computerChoice = processCPUMove();
        roundWinner = playRound(userChoice, computerChoice);
        processRound(roundWinner);
    });
    buttonScissors.addEventListener('click', (e) => {
        console.log("User has selected SCISSORS.")
        userChoice = choiceList[2];
        computerChoice = processCPUMove();
        roundWinner = playRound(userChoice, computerChoice);
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
    scoreToModify.textContent = scoreToModify.textContent + 1;
}

initialize()