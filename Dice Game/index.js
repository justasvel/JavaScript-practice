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
const doubleBtn = document.getElementById('doubleBtn');

// Change buttons based on score
const showResetBtn = () => {
    rollBtn.style.display = 'none';
    doubleBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}

const showRollBtn = () => {
    rollBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
}

//Generate random number
const random = () => {
    return Math.floor(Math.random() * 6) + 1;
}


// Roll dice functionality
rollBtn.addEventListener('click', () => {
    const randomNumber = random();

    if ( player1Turn ) {
        player1Dice.textContent = randomNumber;
        player1Score += randomNumber;

        player1InterfaceChange();
    } else {
        player2Dice.textContent = randomNumber;
        player2Score += randomNumber;

        player2InterfaceChange();
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

//Double or Nothing button functionality
doubleBtn.addEventListener('click', () => {
    const randomNumber = random();

    if ( player1Turn ) {
        if ( randomNumber > 4 ) {
            player1Dice.textContent = randomNumber;
            player1Score += randomNumber;
        } else if ( randomNumber <= 4 ) {
            player1Dice.textContent = '🔥';
            player1Score = 0;
        }

        player1InterfaceChange();

    } else {
        if ( randomNumber > 4 ) {
            player2Dice.textContent = randomNumber;
            player2Score += randomNumber;

        } else if ( randomNumber <= 4 ) {
            player2Dice.textContent = '🔥';
            player2Score = 0;
        }

        player2InterfaceChange();
    }

    player1Turn = !player1Turn;
});

// Check if double or nothing button can be showed
if ( player1Score >= 10 || player2Score >= 10 ) {
    doubleBtn.style.display = 'inline-block';
}

const player1InterfaceChange = () => {
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
    player1Scoreboard.textContent = player1Score;
}

const player2InterfaceChange = () => {
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
    message.textContent = 'Player 1 Turn';
    player2Scoreboard.textContent = player2Score;
}

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