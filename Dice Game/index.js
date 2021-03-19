// Variables for game state
let player1Turn = true;
let player1Score = 0;
let player2Score = 0;

//Variables to store references to the necessary DOM nodes
const message = document.getElementById('message');

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');

const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

// Change buttons based on score
const showResetBtn = () => {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}

const showRollBtn = () => {
    rollBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
}

// Roll dice functionality
rollBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if ( player1Turn ) {
        player1Dice.textContent = randomNumber;
        player1Score += randomNumber;

        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
        message.textContent = 'Player 2 Turn';
        player1Scoreboard.textContent = player1Score;
    } else {
        player2Dice.textContent = randomNumber;
        player2Score += randomNumber;

        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
        message.textContent = 'Player 1 Turn';
        player2Scoreboard.textContent = player2Score;
    }

    if ( player1Score >= 20 ) {
        message.textContent = 'Player 1 has won!';
        showResetBtn();
    } else if ( player2Score >= 20) {
        message.textContent = 'Player 2 has won!';
        showResetBtn();
    }

    player1Turn = !player1Turn;
});

resetBtn.addEventListener('click', () => {
    reset();
});

// Reset game function
const reset = () => {
    message.textContent = 'Player 1 Turn';
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Turn = true;
    player1Score = 0;
    player2Score = 0;
    player1Scoreboard.textContent = player1Score;
    player2Scoreboard.textContent = player2Score;
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');

    // Button change
    showRollBtn();
}