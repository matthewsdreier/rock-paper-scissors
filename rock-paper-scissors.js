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
        return "It's a tie!";
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win! Paper beats rock.";
        }
        if (playerSelection === "scissors") {
            return "You lose! Rock beats scissors.";
        }
    }

    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose! Paper beats rock.";
        }
        if (playerSelection === "scissors") {
            return "You win! Scissors beats paper.";
        }
    }

    if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return "You lose! Scissors beats paper.";
        }
        if (playerSelection === "rock") {
            return "You win! Rock beats scissors.";
        }
    }
}

let updateScores = function() {
    playerScore.textContent = `Your Score: ${playerWins}`;
    computerScore.textContent = `Computer's Score: ${computerWins}`;
}

let endGame = function() {
    if (playerWins > computerWins) {
        result.textContent = "Congratulations! You won the game.";
    } else {
        result.textContent = "You lose the game.";
    }
}

let result = document.querySelector(".result");

let playerScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer")

let buttons = document.querySelectorAll("button");

let playerWins = 0;
let computerWins = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (playerWins + computerWins === 5) {
            playerWins = 0;
            computerWins = 0;
        }

        let matchResult = playRound(getComputerChoice(), button.textContent);
        let win = matchResult.search("win");

        if (win >= 0) {
            playerWins++;
        } else {
            computerWins++;
        }

        updateScores();

        result.textContent = matchResult;

        if (playerWins + computerWins === 5) {
            endGame();
        }
    })
});