const btn = document.querySelector('.btn');

//Get value of the number input field
const getInputValue = () => {
    let inputValue = document.querySelector('#numberInput').value;

    return inputValue;
}

//Function Add the style to progress bar
const addProgress = (percentageOfWidth) => {
    let bar = document.querySelector('.progress-bar');

    return bar.style.width = percentageOfWidth;
}

//Changes the color of the progress bar by the input value
const changeColor = (percentage) => {
    let progressBar = document.querySelector('.progress-bar');

    if (percentage < 40) {
        progressBar.setAttribute('class', 'progress-bar bg-danger');
    } else if (percentage < 70) {
        progressBar.setAttribute('class', 'progress-bar bg-info');
    } else {
        progressBar.setAttribute('class', 'progress-bar bg-success');
    }
}

//Event listener that executes style changes, gets values and checks if the value is valid
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = getInputValue();
    let percentage = getInputValue() + '%';

    //Check if the inputValue is valid
    let warningBox = document.querySelector('.warning');

    if (inputValue < 0) {
        warningBox.textContent = 'WARNING! Number must be more than 0';
    } else if (inputValue > 100) {
        warningBox.textContent = 'WARNING! Number must be less than 100';
    } else {
        warningBox.textContent = '';
        addProgress(percentage);
        changeColor(inputValue);
    }
});