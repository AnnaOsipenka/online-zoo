
// carousel1
const carouselList = document.querySelector('.cards-how-it-works');
const carouselItems = document.querySelectorAll('.carousel-item');

if (carouselList) {
    carouselList.addEventListener('click', (event) => {
        const isImg = event.target.tagName === 'IMG'
        const target = event.target
        const parent = target.parentElement
        const active = isImg ? parent : target
        const isItem = isImg ? parent.closest('.carousel-item') : target.closest('.carousel-item')

        if (!isItem) {
            return
        }

        update(active);
    })
};

const update = (newActive) => {
    const newActivePos = newActive.dataset.pos;

    carouselItems.forEach(item => {
        const itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = (current, active) => {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}