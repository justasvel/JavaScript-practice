const grid = document.querySelector('.grid');
const startButton = document.querySelector('#start');
const scoreDisplay = document.querySelector('#score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
const speed = 0.9;
let timerId = 0;

const createGrid = () => {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squares.push(square);
    }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'));

const startGame = () => {
    //remove the snake
    currentSnake.forEach( index => squares[index].classList.remove('snake'));
    //remove the apple
    squares[appleIndex].classList.remove('apple');

    clearInterval(timerId);
    currentSnake = [2, 1, 0];
    score = 0;
    //re add score to the browser
    scoreDisplay.textContent = score;

    direction = 1;
    intervalTime = 1000;
    //re add class of snake to the current snake
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    
    generateApples();
    timerId = setInterval(move, intervalTime);
}

const move = () => {
    if  (
        (currentSnake[0] + width >= width * width && direction === width) || //if snake hits the bottom
        (currentSnake[0] % width === width - 1 && direction === 1) ||//if the snake hits the right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if the snake hits the left wall
        (currentSnake[0] - width < 0 && direction === -width) || // if the snake hits the bottom wall
        squares[currentSnake[0] + direction].classList.contains('snake') // if snake ran into itself
    ) 
    return clearInterval(timerId);

    //remove last element from currentSnake array
    const tail = currentSnake.pop();
    //remove styling from last element
    squares[tail].classList.remove('snake');
    //Add square to the direction snake is moving
    currentSnake.unshift(currentSnake[0] + direction);
    //Add stylign to new square of snake
    squares[currentSnake[0]].classList.add('snake');

    //Snake head getting the apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('apple');
        //grow snake by adding class of snake to it
        //currentSnake.push(currentSnake[currentSnake.length - 1] - 1);
        squares[tail].classList.add('snake');
        //grow the snake array
        currentSnake.push(tail);
        //generate new apple
        generateApples();
        //add one to the socre
        score++;
        //display score
        scoreDisplay.textContent = score;
        //Speed up the snake
        clearInterval(timerId);
        intervalTime = intervalTime * speed;
        timerId = setInterval(move, intervalTime);
    }
    
}

const generateApples = () => {
    do {
        appleIndex = Math.floor(Math.random() * squares.length) //generate a random number
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple');
}
generateApples();

const control = (e) => {
    if (e.keyCode === 39) {
        direction = 1;
        console.log('right');
    } else if (e.keyCode === 38) {
        direction = -width;
        console.log('up');
    } else if (e.keyCode === 37) {
        console.log('left');
        direction = -1;
    } else if (e.keyCode === 40) {
        direction = +width;
        console.log('down');
    }
}

document.addEventListener('keyup', control);
startButton.addEventListener('click', startGame);