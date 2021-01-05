const select = document.querySelector('#id_of_select');
const btn = document.querySelector('#btn');
let value;

select.addEventListener('change', (e) => {
    value = e.target.value;
    console.log(value);
});

btn.addEventListener('click', (e) => {
    if (value == '1') {
        document.body.style.backgroundImage = "url('images/spring.jpg')";
    } else if (value == '2') {
        document.body.style.backgroundImage = "url('images/summer.jpg')";
    } else if (value == '3') {
        document.body.style.backgroundImage = "url('images/autumn.jpg')";
    } else if (value == '4') {
        document.body.style.backgroundImage = "url('images/winter.jpg')";
    }
});