let userScore = 0;
let computerScore = 0;
document.getElementById("userScore").innerHTML = userScore;
document.getElementById("computerScore").innerHTML = computerScore;

const btnChoices = document.querySelectorAll('[data-selection]'); 
btnChoices.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
    })
})

function makeSelection(selection) {
const computerSelection = getComputerChoice()

    if (computerSelection == selection) {
        console.log('draw')
        document.getElementById("gameMessage").innerHTML = "Player and computer both picked " + selection + " It's a draw!";
    }
    else if ((computerSelection == 'rock' && selection == 'paper') || (computerSelection == 'paper' && selection == 'scissors') || (computerSelection == 'scissors' && selection == 'rock')) {
        userScore += 1
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("gameMessage").innerHTML = "Player's " + selection + " beats computer's " + computerSelection + "! One point for the player.";
                
        if (userScore == 5) {
            document.getElementById("winner").innerHTML = "Player has 5 points! The player wins."
        }
    }
    else {
        computerScore += 1
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("gameMessage").innerHTML = "Computer's " + computerSelection + " beats player's " + selection + "!" + " One point for the computer!"
                
        if (computerScore == 5) {
            document.getElementById("winner").innerHTML = "Computer has 5 points! The computer wins."
        }
    }
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * options.length);
    console.log(`The computer has selected ${options[computerChoice]}`)
    return options[computerChoice];
}