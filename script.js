let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(`CPU chooses ${choices[computerChoice]}!`);
    return choices[computerChoice];
}

getComputerChoice();