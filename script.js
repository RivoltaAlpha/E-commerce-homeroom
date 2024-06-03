let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function moveToNextSlide() {
    if (slideIndex === totalSlides - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if (slideIndex === 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex--;
    }
    updateSlidePosition();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveToNextSlide();
    } else if (event.key === 'ArrowLeft') {
        moveToPreviousSlide();
    }
});

updateSlidePosition();
