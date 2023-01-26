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

console.log(playRound("rock", "paper"));