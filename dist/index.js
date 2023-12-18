/**
 * Set Score Tracker
 */

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };



/**
 * Assign Button onClick Scripts
 */
document.querySelector('.js-rock-button').addEventListener('click', () => { main('rock');});
document.querySelector('.js-paper-button').addEventListener('click', () => {main('paper');});
document.querySelector('.js-scissors-button').addEventListener('click', () => {main('scissors');});

/**
 * Computer's Move
 */

function getcomputerMove(){
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
 *main game function
 */
function main(playerMove){
    
}