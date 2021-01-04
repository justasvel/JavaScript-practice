//email background
let email = document.getElementById('email');

email.addEventListener('focus', (e) => {
    e.target.style.background = '#7FFFD4';
});

email.addEventListener('blur', (e) => {
    e.target.style.background = '';
})

//password background

let password = document.querySelector('#password');

password.addEventListener('focus', (e) => {
    e.target.style.background = '#7FFFD4';
})

password.addEventListener('blur', (e) => {
    e.target.style.background = '';
})