const form = document.querySelector('form');
const storyBtn = document.querySelector('#story');
const filterBtn = document.querySelector('#filter');
let logList = JSON.parse(localStorage.getItem('arrayOfSums'));
let arrayOfSums;

if (localStorage.getItem('arrayOfSums') === null) {
    arrayOfSums = [];
} else {
    arrayOfSums = JSON.parse(localStorage.getItem('arrayOfSums'));
}

//Atlikti veiksma
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let sumInput = document.querySelector('#action');
    let select = document.querySelector('#select');

    typeChecker(select.value, sumInput.value);
    resetInput();
    sumOfLog();
});

//Irasu istorija
storyBtn.addEventListener('click', (e) => {
    printLog();

    logList = JSON.parse(localStorage.getItem('arrayOfSums'));
    sumOfLog();
});

//Filtruoti irasus nuo maziausio iki didziausio
filterBtn.addEventListener('click', (e) => {
    logList = logList.sort((a, b) => {
        return a - b;
    })
    storyBtn.click();
});


//Functions
const resetInput = () => {
    let form = document.querySelector('form');
    form.reset();
    return false;
}

const typeChecker = (selectValue, inputValue) => {
    if (selectValue == 1) {
        arrayOfSums.push(+inputValue);
        localStorage.setItem('arrayOfSums', JSON.stringify(arrayOfSums));
    } else if (selectValue == 2) {
        arrayOfSums.push(-inputValue);
        localStorage.setItem('arrayOfSums', JSON.stringify(arrayOfSums));
    }
}

const printLog = () => {
    let historyLog = document.querySelector('#history-log');

    historyLog.innerHTML = 'Įrašų istorija: ';
    //  logList buvusi vieta
    logList.map((logItem) => {
        const span = document.createElement('span');
        const textnode = document.createTextNode(logItem);
        span.append(textnode);

        if (logItem < 0) {
            span.classList.add('red');
        } else if (logItem > 0) {
            span.classList.add('green');
        }

        historyLog.appendChild(span);
    });
}

const sumOfLog = () => {
    logList = JSON.parse(localStorage.getItem('arrayOfSums'));
    let sum = logList.reduce((a, b) => {
        return a + b;
    }, 0);

    let summarySum = document.querySelector('#summarySum');
    summarySum.textContent = `${sum} €`;
}