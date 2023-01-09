let userScore = 0;
document.getElementById("userScore").textContent = userScore;
let computerScore = 0;
document.getElementById("computerScore").textContent = computerScore;
const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const btnChoices = document.querySelectorAll('[data-selection]'); 
btnChoices.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
    })
})

function makeSelection(selection) {
const computerSelection = getComputerChoice()
    if (userScore != 5 && computerScore != 5) {
        if (computerSelection == selection) {
            document.getElementById("gameMessage").textContent = "Player and computer both picked " + selection + " It's a draw!";
        }
        else if ((computerSelection === winningCombinations[selection])) {
            userScore += 1
            document.getElementById("userScore").textContent = userScore;
            document.getElementById("gameMessage").textContent = "Player's " + selection + " beats computer's " + computerSelection + "! One point for the player.";
                
            if (userScore == 5) {
                document.getElementById("winner").textContent = "5 points! You win."
            }
        }
        else {
            computerScore += 1
            document.getElementById("computerScore").textContent = computerScore;
            document.getElementById("gameMessage").textContent = "Computer's " + computerSelection + " beats player's " + selection + "!" + " One point for the computer!"
                
            if (computerScore == 5) {
                document.getElementById("winner").textContent = "Computer has 5 points! Game over, you lose."
            }
        }
    } 
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * options.length);
    console.log(`The computer has selected ${options[computerChoice]}`)
    return options[computerChoice];
}