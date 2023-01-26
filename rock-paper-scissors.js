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

console.log(getComputerChoice());