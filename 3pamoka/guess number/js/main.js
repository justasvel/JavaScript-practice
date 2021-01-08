const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let resultText = document.querySelector('#resultText');
let resultCount = document.querySelector('#resultCount');
let count = 0;

//select input value
let form = document.querySelector('#random-number');

form.addEventListener('submit', (e) => {
    count++;
    e.preventDefault();
    let guess = e.target.elements.input.value;
    console.log(e);
    console.log(randomNumber);

    if (guess < randomNumber) {
        resultText.innerHTML = 'The number is bigger';
    } else if (guess > randomNumber) {
        resultText.innerText = 'The number is smaller';
    } else {
        resultText.textContent = 'You guessed the number!';
    }

    if (count < 2) {
        resultCount.textContent = `${count} guess was done`;
    } else {
        resultCount.textContent = `${count} guesses were done`;
    }

});