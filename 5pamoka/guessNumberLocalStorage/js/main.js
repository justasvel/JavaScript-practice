let resultText = document.querySelector('#resultText');
let resultCount = document.querySelector('#resultCount');
let numbers = document.querySelector('#numbers');
let arrayOfNumbers;
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

if (localStorage.getItem('arrayOfNumbers') === null) {
    arrayOfNumbers = [];
} else {
    arrayOfNumbers = JSON.parse(localStorage.getItem('arrayOfNumbers'));
}

//select input value
let form = document.querySelector('#random-number');

form.addEventListener('submit', (e) => {
    count++;
    e.preventDefault();
    let guess = e.target.elements.input.value;
    console.log(randomNumber);
    //Check guessed number size
    if (guess < randomNumber) {
        resultText.innerHTML = 'The number is bigger';
        arrayOfNumbers.push(guess);
        localStorage.setItem('arrayOfNumbers', JSON.stringify(arrayOfNumbers));
    } else if (guess > randomNumber) {
        resultText.innerText = 'The number is smaller';
        arrayOfNumbers.push(guess);
        localStorage.setItem('arrayOfNumbers', JSON.stringify(arrayOfNumbers)); 
    } else if (guess == randomNumber) {
        resultText.textContent = 'You guessed the number!';
        numbers.textContent = `Your guesses before ${guess} were: ${arrayOfNumbers.join(', ')}`;
        localStorage.removeItem('arrayOfNumbers');
    }
});