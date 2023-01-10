let userScore = 0;                                                      //declare & initialise user score to 0
document.getElementById("userScore").textContent = userScore;           //get a reference to the element with an id of userScore in the DOM
let computerScore = 0;                                                  //declare & initialise computer score to 0
document.getElementById("computerScore").textContent = computerScore;   

const restartButton = document.createElement('button');                 //declare restartButton variable
restartButton.textContent = 'Play again';                               //set text content of restart button
const scoreSection = document.querySelector('.scoreSection');           //get a reference to the first element with a class of scoreSection in the DOM
scoreSection.appendChild(restartButton);                                //append the restartButton element to the scoreSection element as a child
restartButton.style.display = 'none';                                   //set the display property of the restartButton element to 'none', which hides the element
restartButton.id = 'resetGame';

const winningCombinations = {                                           //create an object with three properties 
    rock: 'scissors',                                                   //value of each property is a string representing the item that beats it in the game of Rock Paper Scissors
    paper: 'rock',                                                      
    scissors: 'paper'                                                   //object is used in the makeSelection function to determine the winner of the game...
};                                                                      //based on the choices made by the player and the computer

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
    if (userScore != 5 && computerScore != 5) {                         //checks if user/computer has 5 points. If true, do not execute the following code
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