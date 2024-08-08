function getComputerChoice(){
    const choices = ["paper", "rock", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();

    while (!['rock', 'paper', 'scissors'].includes(choice)){
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

function game (){
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a tie overall! Final score: ${humanScore} to ${computerScore}.`);
    }
}

game()