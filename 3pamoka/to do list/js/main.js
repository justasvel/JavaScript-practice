let task = document.querySelector('#task');
let submit = document.querySelector('#add');
let list = document.querySelector('#list');
let count = 0;

submit.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerHTML = `${task.value}`;
    list.appendChild(li);
    count++;
    
    if (count > 0) {
        let sm = document.querySelector('.sm');
        sm.innerHTML = `<p>Viso: ${count} darbai</p>`;
    }
});