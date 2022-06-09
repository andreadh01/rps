const btnDiv = document.querySelector('.buttons');
const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.cpu-score');
const message = document.querySelector('.message');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const icon = document.querySelector('i');
const span = document.querySelector('.close');
let playerScore = 0;
let cpuScore = 0;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let result = playRound(btn.value, computerPlay());
        if (result == 1) {
            playerScore++;
        } else if (result == 0) {
            cpuScore++;
        }
        updateScore();
        if (playerScore == 5 || cpuScore == 5) {
            announceWinner();
        }

    })
});


icon.addEventListener('click', reset);

span.addEventListener('click', reset);



function updateScore() {
    pScore.textContent = playerScore;
    cScore.textContent = cpuScore;
}

function announceWinner() {
    const info = document.querySelector('.modal-text');
    modal.classList.add('show');
    if (playerScore == 5 && cpuScore == 5) {
        info.textContent = 'Tie! Prove the CPU wrong with a rematch'
    } else if (playerScore == 5) {
        info.textContent = 'You Won!'
    } else {
        info.textContent = 'You Lost!'
    }




}

function reset() {
    modal.classList.remove('show');
    message.textContent = 'Make your choice:';
    playerScore = 0;
    cpuScore = 0;
    updateScore();
}

function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return 0
    } else if (playerSelection == computerSelection) {
        message.textContent = 'Tie!';
        return
    } else {
        message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        return 1
    }
}

// function game() {
//     let player = 0
//     let computer = 0
//     playerSelection = prompt('Choose Rock, Paper or Scissors: ')
//     playerSelection = playerSelection.toLowerCase()
//     if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
//         computerChoice = computerPlay();
//         console.log(`Player: ${playerSelection}\nComputer: ${computerChoice}`)
//         result = playRound(playerSelection, computerChoice)
//         switch (result) {
//             case 0:
//                 computer = computer + 1
//                 break;
//             case 1:
//                 player = player + 1
//                 break;
//         }
//     } else {
//         alert('Choose one of the three options')
//         index = index - 1
//     }

//     if (player > computer) {
//         console.log('YOU WON!')
//     } else if (player < computer) {
//         console.log('YOU LOST!')
//     } else {
//         console.log('TIE!')
//     }
// }