//Element nodes
computerScoreText = document.getElementById('computerScoreText');
playerScoreText = document.getElementById('playerScoreText');
resetButton = document.getElementById('resetBtn');


//Event Listeners
const buttons = document.getElementsByClassName('btn-choice');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
        let playerChoice = event.currentTarget.getAttribute('data-option');
        playRound(playerChoice);
    })
}


//Variables for the game
const choices = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;

//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * (choices.length)); /*picks a random number from 0-2*/
    let computerChoice = choices[randomIndex]; 
    console.log(playerChoice);
    console.log(computerChoice);
    if(computerChoice === playerChoice) {
        console.log('tie');
        resultText("It's a tie!", "You both chose " + playerChoice); /*return;*/
    }

    if(computerChoice === "Rock" && playerChoice === "Paper") {
        console.log('Player won paper covers rock');
        resultText("You won!", "Paper covers rock.");
        playerScore +=1;
    
    elseif(computerChoice === "Rock" && playerChoice === "Scissors") 
        console.log('Player won rock crushes scissor.');
        resultText("You lost!", "Rock crushes scissor.");
        computerScore +=1;
    }

    if(computerChoice === "Paper" && playerChoice === "Scissors") {
        console.log('Player won scissors cut paper');
        resultText("You won!", "Paper covers rock.");
        playerScore +=1;
    
    elseif(computerChoice === "Paper" && playerChoice === "Rock")
        console.log('Computer won paper covers rock.');
        resultText("You lost!", "Paper covers rock.");
        computerScore +=1;
    }

    if(computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log('Player won rock crushes scissors');
        resultText("You won!", "Rock crushes scissors.");
        playerScore +=1;
    
    elseif(computerChoice === "Scissors" && playerChoice === "Paper") 
        console.log('Computer won scissors cuts paper.');
        resultText("You lost!", "Scissors cuts paper.");
        computerScore +=1;
    }


    computerScoreText.innerHTML = computerScore;
    playerScoreText.innerHTML = playerScore;
    gameOver();

//Update the text between the scores with the result of the round and with what each player played
function resultText(resultText, resultPlays) {
    document.getElementById('roundResultText').innerHTML = resultText;
    document.getElementById('roundResultPlays').innerHTML = resultPlays;
}

//Reset scores and text elements to 0
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    computerScore = 0; 
    computerScoreText.innerHTML = 0;
    playerScore = 0;
    playerScoreText.innerHTML = 0;
}

//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    if(playerScore === winningScore) alert("You won! Great Job!")}
    if(computerScore === winningScore) alert("You won! Great Job!")
}