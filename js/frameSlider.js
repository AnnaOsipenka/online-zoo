const gap = 20;
const carousel = document.getElementById('carousel')
const videoContainer = document.querySelector('#content')
let slideIndex = 0;
let slideCoefficient = 1;
let imgWidth = 275;


videoContainer.addEventListener('click', event => {
    const bigVideoFrame = document.querySelector('.big-video iframe')
    const bigVideoLink = bigVideoFrame.getAttribute('src')
    const selectedFrame = event.target.parentElement.querySelector('iframe')
    const selectedLink = selectedFrame.getAttribute('src')
    bigVideoFrame.setAttribute('src', selectedLink)
    selectedFrame.setAttribute('src', bigVideoLink)
})

const slideFunc = () => {
    slideIndex += slideCoefficient
    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);

    if (slideIndex >= 20) {
        slideIndex = 0;
    }
}

setInterval(slideFunc, 3 * 1000);