const image = document.querySelector('.main-image');
const text = document.querySelector('#text');
const picture1 = document.querySelector('#picture1');
const picture2 = document.querySelector('#picture2');
const picture3 = document.querySelector('#picture3');
const picture4 = document.querySelector('#picture4');

picture1.addEventListener('click', () => {
    image.src = "images/beach.jpg";
    text.textContent = "Beach";
});

picture2.addEventListener('click', () => {
    image.src = "images/city.jpg";
    text.textContent = "City";
});

picture3.addEventListener('click', () => {
    image.src = "images/flower.jpg";
    text.textContent = "Flower";
});

picture4.addEventListener('click', () => {
    image.src = "images/snow.jpg";
    text.textContent = "Snow";
});