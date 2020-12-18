let form = document.querySelector('#form1');
let sumText = document.querySelector('#sum');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstNumber = parseInt(e.target.elements.firstNumber.value);
    let secondNumber = parseInt(e.target.elements.secondNumber.value);

    sumText.textContent = firstNumber + secondNumber;
});