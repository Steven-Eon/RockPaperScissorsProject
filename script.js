let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(`CPU chooses ${choices[computerChoice]}!`);
    return choices[computerChoice];
}

function getUserChoice() {
    console.log("Make your choice! Rock, Paper, or Scissors?");
    let userPick = prompt("Your pick: ");
    while (1) {
        if (typeof(userPick) == "string")
        {
            userPick = userPick.toLowerCase();
            switch (userPick)
            {
                case "rock":
                    console.log(`User chooses ${userPick}!`)
                    return "rock";
                    break;
                case "paper":
                    console.log(`User chooses ${userPick}!`)
                    return "paper";
                    break;
                case "scissors":
                    console.log(`User chooses ${userPick}!`)
                    return "scissors";
                    break;
            }
        }
        userPick = prompt("Invalid choice, please try again.");
    }
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



