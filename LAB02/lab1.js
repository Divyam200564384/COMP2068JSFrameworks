// Created By:- Divyam Wadhawan(200564384),
//              Anshdeep Singh(200563885),
//              Riyadeep Kaur(200570873)


const prompt = require('prompt');

// Configure prompt to remove the default messages
prompt.message = "";
prompt.delimiter = "";

// Start the prompt session
prompt.start();

console.log("Enter your choice (ROCK, PAPER, or SCISSORS).");

prompt.get(['userChoice'], function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    // Clear the last line to remove `userChoice rock`
    process.stdout.moveCursor(0, -1); // Move cursor up
    process.stdout.clearLine(1); // Clear that line

    // Taking user's input and conversion to uppercase
    let userSelection = result.userChoice.trim().toUpperCase();

    // Validate user input
    if (!['ROCK', 'PAPER', 'SCISSORS'].includes(userSelection)) {
        console.log("Invalid choice! Please choose ROCK, PAPER, or SCISSORS.");
        return;
    }

    // Generate a random choice for the computer with exact range boundaries
    let rand = Math.random();
    let computerSelection;

    if (rand >= 0.00 && rand <= 0.34) {
        computerSelection = "PAPER";
    } else if (rand > 0.34 && rand <= 0.67) {
        computerSelection = "SCISSORS";
    } else if (rand > 0.67 && rand <= 1.00) {
        computerSelection = "ROCK";
    }

    // Display the choices
    console.log(`User selected: ${userSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    // Determine the winner
    if (userSelection === computerSelection) {
        console.log("It's a tie");
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        console.log("User Wins");
    } else {
        console.log("Computer Wins");
    }
});
