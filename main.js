let userScore = 0;                                                      //initialise user score to 0
document.getElementById("userScore").textContent = userScore;           
let computerScore = 0;                                                  //initialise computer score to 0
document.getElementById("computerScore").textContent = computerScore;   

const restartButton = document.createElement('button');                 //declare restartButton variable
restartButton.textContent = 'Play again';
const scoreSection = document.querySelector('.scoreSection');
scoreSection.appendChild(restartButton);
restartButton.style.display = 'none';
restartButton.id = 'resetGame';

const winningCombinations = {                                         
    rock: 'scissors',
    paper: 'rock',                                                      //create object of winning combinations for use in game logic
    scissors: 'paper'
};

const btnChoices = document.querySelectorAll('[data-selection]');
const audioElement = document.getElementById('audio');
console.log(audioElement);

window.onload = function() {                                            //execute function immediately on load
    btnChoices.forEach(selectionButton => {
        selectionButton.addEventListener('click', e => {
            const selectionName = selectionButton.dataset.selection
            audioElement.currentTime = 0;                               //reset audio to start
            audioElement.play();                                        //play sound effect when button clicked
        makeSelection(selectionName)
        })
    })
}

function makeSelection(selection) {                                     //declare makeSelection function which takes in a parameter 'selection'
const computerSelection = getComputerChoice()
    if (userScore != 5 && computerScore != 5) {                         //if statement to stop game when either user or computer reaches 5 points
        if (computerSelection == selection) {
            document.getElementById("gameMessage").textContent = "Player and computer both picked " + selection + " It's a draw!";  //returns a draw message to the HTML doc
        }
        else if ((computerSelection === winningCombinations[selection])) {
            userScore += 1
            document.getElementById("userScore").textContent = userScore;
            document.getElementById("gameMessage").textContent = "Player's " + selection + " beats computer's " + computerSelection + "! One point for the player.";
                
            if (userScore == 5) {
                document.getElementById("winner").textContent = "5 points! You win."
                restartButton.style.display = 'block';
            }
        }
        else {
            computerScore += 1
            document.getElementById("computerScore").textContent = computerScore;
            document.getElementById("gameMessage").textContent = "Computer's " + computerSelection + " beats player's " + selection + "!" + " One point for the computer!"
                
            if (computerScore == 5) {
                document.getElementById("winner").textContent = "Computer has 5 points! Game over, you lose."
                restartButton.style.display = 'block';
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

restartButton.addEventListener('click', function() {
    location.reload();
  });