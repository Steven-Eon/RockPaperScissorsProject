function initialize() {
    const buttonElements = document.querySelectorAll(".userButtonSel button");
    const buttonRock = buttonElements[0];
    const buttonPaper = buttonElements[1];
    const buttonScissors = buttonElements[2];

    buttonRock.addEventListener('click', (e) => {
        console.log("User has selected ROCK.");
    });
    buttonPaper.addEventListener('click', (e) => {
        console.log("User has selected PAPER.")
    });
    buttonScissors.addEventListener('click', (e) => {
        console.log("User has selected SCISSORS.")
    });
}

initialize();