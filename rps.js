function getComputerChoice() {
    var num = Math.floor(Math.random() * 100) + 1;

    if(num <= 33) {
        return "Rock";
    }
    else if(num > 33 && num <= 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}//end getComputerChoice function

function game(){
    var playerWins = 0;
    var compWins = 0;

    function playRound(playerSelection, computerSelection) {
        switch(playerSelection) {
            case "rock":
	        if(computerSelection == "scissors") {
        	    playerWins++;
                    return "You win! Rock beats scissors!";
		}
	        else if(computerSelection == "paper") {
                    compWins++;
                    return "The computer wins. Paper beats rock.";
	        }
                else {
                    return "It's a tie!";
	        }
                break;
	    case "paper":
	        if(computerSelection == "rock") {
                    playerWins++;
                    return "You win! Paper beats rock!";
	        }
	        else if(computerSelection == "scissors") {
                    compWins++;
                    return "The computer wins. Scissors beat paper.";
	        } 
	        else {
                    return "It's a tie!";
	        }
	        break;
            case "scissors":
	        if(computerSelection == "paper") {
                    playerWins++;
                    return "You win! Scissors beat paper!";
	        }
                else if(computerSelection == "rock") {
                    compWins++;
                    return "The computer wins. Rock beats scissors.";
	        }
	        else {
                    return "It's a tie!"
	        }
	        break;
	    default:
	        return "That is not one of the options.";
            }
    }//end playRound function

    for(var i = 0; i < 5; i++) {
        const pChoice = prompt("Rock, paper, or scissors?");
        const cChoice = getComputerChoice();
        console.log(playRound(pChoice.toLowerCase(), cChoice.toLowerCase()));
        console.log(`Player: ${playerWins} - Computer: ${compWins}`);
    }
}//end game function

game();

