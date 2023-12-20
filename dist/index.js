/**
 * Set Score Tracker
 */

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };



/**
 * Computer's Move
 */

function getComputerMove(){
    let computerMove="";//assign empty move variable
    const randint=Math.random() * 4; //choose number between 1-3
    //assign random int to rock, paper, scissor, move and
    if(randint==1){
        computerMove="rock"
    }
    else if(randint==2){
        computerMove="paper"
    }
    else{
        computerMove="scissors"
    }
    return computerMove;
}

/**
 * Updates the scoreboard
 */

function updateScore(){
    document.getElementsByClassName('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
/**
 *main game function
 */
function main(playerMove){
    
    let computerMove=getComputerMove();
    let result = '';

    //main game switch statement
    switch(playerMove){
        case "rock":
            if(computerMove==="paper"){
                score.losses += 1;
                result = 'You lose.';
            }
            else if(computerMove==="scissors"){
                score.wins += 1;
                result = 'You win.';
            }
            break;
        case "paper":
            if(computerMove==="rock"){
                score.losses += 1;
                result = 'You lose.';
            }
            else if(computerMove==="scissors"){
                score.wins += 1;
                result = 'You win.';
            }
            break;
        case "scissors":
            if(computerMove==="rock"){
                score.wins += 1;
                result = 'You win.';
            }
            else if(computerMove==="paper"){
                score.losses += 1;
                result = 'You lose.';
            }
            break;

        default:
            score.ties+=1;
            result = 'Tie.';
    }

    //display on webpage
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img src="assets/${playerMove}-emoji.png" class="move-icon">
    <img src="assets/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    
}
