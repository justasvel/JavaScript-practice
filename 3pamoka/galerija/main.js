const image = document.querySelector('.main-image');
const text = document.querySelector('#text');
const gallery = document.querySelector('#gallery');

gallery.addEventListener('click', (e) => {
    switch(e.target.id) {
        case 'picture1':
            image.src = e.target.src;
            text.textContent = e.target.alt;
        break;
        case 'picture2':
            image.src = e.target.src;
            text.textContent = e.target.alt;
        break;
        case 'picture3':
            image.src = e.target.src;
            text.textContent = e.target.alt;
        break;
        case 'picture4':
            image.src = e.target.src;
            text.textContent = e.target.alt;
        break;
        default:
    }
});