getComputerChoice = function() {
    let choice_number = Math.floor(Math.random() * 3);
    let choice_word = null;
    switch(choice_number) {
        case 0:
            choice_word = "Rock";
            break;
        case 1:
            choice_word = "Paper";
            break;
        case 2:
            choice_word = "Scissors";
            break;
    }
    return choice_word;
}

playRound = function(computerSelection, playerSelection) {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return "This round is a tie!";
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win this round! Paper beats rock.";
        }
        if (playerSelection === "scissors") {
            return "You lose this round! Rock beats scissors.";
        }
    }

    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose this round! Paper beats rock.";
        }
        if (playerSelection === "scissors") {
            return "You win this round! Scissors beats paper.";
        }
    }

    if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return "You lose this round! Scissors beats paper.";
        }
        if (playerSelection === "rock") {
            return "You win this round! Rock beats scissors.";
        }
    }
}

let updateScores = function(computerChoice, playerChoice, matchResult) {
    playerChoiceBoard.textContent = `Your Play: ${playerChoice}`;
    computerChoiceBoard.textContent = `Computer's Play: ${computerChoice}`;
    
    playerScoreboard.textContent = `Your Score: ${playerScore}`;
    computerScoreboard.textContent = `Computer's Score: ${computerScore}`;

    matchScoreboard.textContent = matchResult;

    if (computerScore + playerScore < 5) {
        if (computerScore > playerScore) {
            gameScoreboard.textContent = "The computer is winning!";
        } else if (computerScore < playerScore) {
            gameScoreboard.textContent = "You're winning!";
        } else {
            gameScoreboard.textContent = "All tied up!";
        }
    } else {
        if (computerScore > playerScore) {
            gameScoreboard.textContent = "You lost the game.";
        } else {
            gameScoreboard.textContent = "Congratulations, you won the game!";
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector(".score .player");
let computerScoreboard = document.querySelector(".score .computer")
let playerChoiceBoard = document.querySelector(".choice .player");
let computerChoiceBoard = document.querySelector(".choice .computer");
let buttons = document.querySelectorAll("button");
let matchScoreboard = document.querySelector(".result");
let gameScoreboard = document.querySelector(".game");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (playerScore + computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
        }

        let computerChoice = getComputerChoice();
        let matchResult = playRound(computerChoice, button.textContent);
        let win = matchResult.search("win");

        if (win >= 0) {
            playerScore++;
        } else {
            computerScore++;
        }

        updateScores(computerChoice, button.textContent, matchResult);
    })
});