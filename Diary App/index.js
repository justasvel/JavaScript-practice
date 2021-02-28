const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
let entryCount = 1;

const addEntryToDom = (event) => {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('single-entry');
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';

    const displayEntryButton = document.createElement('button');
    displayEntryButton.classList.add('display-entry-button');
    displayEntryButton.innerText = entryCount;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', () => {
        const allEntries = document.querySelectorAll('.single-entry');
        for(let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none';
        }
        entryDiv.style.display = 'block';
    });
    
    entryCount += 1;
}

entryForm.addEventListener('submit', addEntryToDom);