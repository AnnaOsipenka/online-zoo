const mapImg = document.querySelector('.map')
const image = document.querySelector('.map img')
const wrapper = document.querySelector('.map-wrapper')
const headerMap = document.getElementById('header')
const footerMap = document.getElementById('footer')
const zoomOutButton = document.getElementById('zoomOut')
const zoomInButton = document.getElementById('zoomIn')

let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
    var box = elem.getBoundingClientRect();
    topIndent = e.pageY - box.top + pageYOffset;
    leftIndent = e.pageX - box.left + pageXOffset;
}

const moveAt = (e) => {
    if (mapImg.style.position !== "absolute") {
        mapImg.style.position = "absolute"
    }
    mapImg.style.left = e.pageX - (80 - pageXOffset) - leftIndent + 'px'
    if (e.pageX >= wrapper.offsetWidth) {
        stopDrag()
    } else if (e.pageX <= 0) {
        stopDrag()
    }
    mapImg.style.top = e.pageY - 173 + 2 * pageYOffset - topIndent + 'px'
}

const stopDrag = () => {
    document.removeEventListener('mousemove', moveAt)
    mapImg.removeEventListener('mouseup', stopDrag)
}

mapImg.addEventListener('mousedown', (e) => {
    if (image.width < 1163) {
        return
    }
    calculateCoords(e, mapImg)
    moveAt(e)
    document.addEventListener('mousemove', moveAt);
    mapImg.addEventListener('mouseup', stopDrag)
});

mapImg.ondragstart = function () {
    return false;
};

headerMap.addEventListener('mouseenter', stopDrag);
footerMap.addEventListener('mouseenter', stopDrag);

zoomInButton.addEventListener('click', () => {
    if (image.width < (wrapper.offsetWidth - 17) * 2) {
        image.style.width = `${image.width * 1.25}px`
    }
})

zoomOutButton.addEventListener('click', () => {
    if (image.width >= wrapper.offsetWidth) {
        image.style.width = `${image.width / 1.25}px`
    }

    if (image.width <= wrapper.offsetWidth) {
        image.style.width = `${1160}px`
        image.style.top = '0%'
        image.style.left = '0%'
    }
})
