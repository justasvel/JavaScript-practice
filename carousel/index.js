const slides = document.getElementsByClassName('carousel-item');
const indicators = document.getElementsByClassName('carousel-indicator')
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function restartIndicators() {
    for (let indicator of indicators) {
        indicator.classList.remove('current-indicator')
    }
}

function moveToNextSlide() {
    restartIndicators()
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('current-indicator')
}

function moveToPrevSlide() {
    restartIndicators()
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    indicators[slidePosition].classList.add('current-indicator')
}