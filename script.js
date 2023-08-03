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

