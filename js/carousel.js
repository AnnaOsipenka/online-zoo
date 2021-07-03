const gap = 20;

const carousel = document.getElementById('carousel')
const content = document.getElementById('content')
const nextBtnSlider = document.getElementById('next')
const prev = document.getElementById('prev')

let slideType = 'all';
let slideIndex = 0;
let slideCoefficient = 4;

let width = carousel.offsetWidth;
let imgWidth = 236;

nextBtnSlider.addEventListener('click', () => {
    slideIndex += slideCoefficient;

    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
    if (slideIndex >= 20) {
        carousel.scrollTo(0, 0);
        slideIndex = 0
    }
});

prev.addEventListener('click', e => {
    slideIndex -= slideCoefficient;
    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);

    if (slideIndex < 0) {
        carousel.scrollTo((imgWidth + gap) * 20, 0);
        slideIndex = 20
    }
});

const slideFunc = () => {
    slideIndex += slideCoefficient
    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);

    if (slideIndex >= 20) {
        slideIndex = 0;
    }
}

// let autoSlideInterval = setInterval(slideFunc, 3000);
// let autoSlideTimeout = null;

// const delayAutoSliding = () => {
//     clearTimeout(autoSlideTimeout);
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = null;

//     autoSlideTimeout = setTimeout(() => {
//         clearInterval(autoSlideInterval);
//         autoSlideInterval = setInterval(slideFunc, 3000);
//     }, 6000);
// }

// carousel.addEventListener('click', delayAutoSliding);