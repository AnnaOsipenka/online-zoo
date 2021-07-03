const listSpoiler = document.querySelector('.container-lists')

listSpoiler.addEventListener('click', event => {
    if (event.target.dataset.expandButton === 'true') {
        const spoiler = event.target.previousElementSibling.querySelector('p')
        const btnSpoiler = event.target

        toggleExpand(spoiler, btnSpoiler)
    } else {
        let informationSpoiler = event.target.parentElement

        if (event.target.tagName === 'LI') {
            informationSpoiler = event.target
        }

        if (informationSpoiler.tagName !== 'LI') {
            informationSpoiler = informationSpoiler.parentElement
        }

        const btnSpoiler = informationSpoiler.querySelector('button')
        informationSpoiler = informationSpoiler.querySelector('p')
        toggleExpand(informationSpoiler, btnSpoiler)
    }

})


const toggleExpand = (tag, button) => {
    if (tag.classList.contains('visible')) {
        button.classList.remove('arrow-top')
        button.classList.add('arrow-bottom')
        tag.classList.remove('visible')
        tag.classList.add('hidden')
    } else {
        button.classList.remove('arrow-bottom')
        button.classList.add('arrow-top')
        tag.classList.add('visible')
        tag.classList.remove('hidden')
    }
}
