const burgerMenu = document.querySelector('.burger-menu')
const headerNav = document.querySelector('.header-nav')
const close = document.querySelector('.close')
const closeModal = document.querySelectorAll('form .close')
const btnDonate = document.querySelectorAll('.donate-btn-first')
const next = document.querySelector('.btn-donate')
const pay = document.querySelector('.btn-pay')
const formDonate = document.querySelector('.donate')
const cardForm = document.querySelector('.container-pay-form')
const feedback = document.querySelector('.feedback')
const feedbackForm = document.querySelector('.submit')
const btnSubmit = document.querySelector('.btn-submit')
const overlay = document.querySelector('.overlay')
const zoom = document.querySelector(".zoom");
const zoomContainer = document.querySelector(".map")

// burger menu
burgerMenu.addEventListener('click', () => {
    if (!headerNav.classList.contains('show')) {
        headerNav.classList.add('show')
        close.classList.add('visible')
    }
})

close.addEventListener('click', () => {
    if (headerNav.classList.contains('show')) {
        headerNav.classList.remove('show')
        close.classList.remove('visible')
    }
})


// modal-window
const amount = document.querySelector('.input-donate input')
const btnFeebackTestimonials = document.querySelector('.testimonials a')
const DonateValues = {}
const regexAmount = /^\d{1,4}$/
const cardNumber = document.querySelector('.cardNumber')
const regexCardNumber = /^\d{4} \d{4} \d{4} \d{4}$/
const regexDate = /^\d{2,2}$/
const dateCardMM = document.querySelector('.container-pay-date input:first-child')
const dateCardYY = document.querySelector('.container-pay-date input:last-child')
const nameCard = document.querySelector('.nameCard')
const regexNameCard = /(?<! )[-a-zA-Z' ]{2,26}/
const cvc = document.querySelector('.cvc')
const regexCvc = /^\d{3,3}$/

amount.addEventListener('input', e => {
    if (!regexAmount.test(e.target.value)) {
        amount.style.border = "2px solid red"
    } else {
        amount.style.border = "1px solid #9CA498"
    }
})

formDonate.addEventListener('submit', e => {
    e.preventDefault()
    if (!regexAmount.test(amount.value)) {
        alert('Please enter the correct amount!')
    } else {
        formDonate.classList.remove('visible')
        formDonate.classList.add('hidden')
        cardForm.classList.remove('hidden')
        cardForm.classList.add('visible')
    }
    // запись полей в объект formDate
    // next copy для переключения 2 формы
})

cardForm.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase()

    if (event.target.classList.contains('cardNumber')) {
        let cardNameValue = event.target.value
        cardNameValue = cardNameValue.replace(/[^\d]/g, '').substring(0, 16)
        cardNameValue = cardNameValue !== '' ? cardNameValue.match(/.{1,4}/g).join(' ') : ''
        event.target.value = cardNameValue
    }

    if (!regexCardNumber.test(cardNumber.value) ||
        !regexDate.test(dateCardMM.value) ||
        !regexDate.test(dateCardYY.value) ||
        !regexNameCard.test(nameCard.value) ||
        !regexCvc.test(cvc.value)) {
        cardNumber.style.border = "2px solid red"
        dateCardMM.style.border = "2px solid red"
        dateCardYY.style.border = "2px solid red"
        nameCard.style.border = "2px solid red"
        cvc.style.border = "2px solid red"
    } else {
        cardNumber.style.border = "1px solid #9CA498"
        dateCardMM.style.border = "1px solid #9CA498"
        dateCardYY.style.border = "1px solid #9CA498"
        nameCard.style.border = "1px solid #9CA498"
        cvc.style.border = "1px solid #9CA498"
    }
})

cardForm.addEventListener('submit', e => {
    e.preventDefault()
    if (!regexCardNumber.test(cardNumber.value)) {
        alert('Please enter the correct card number!')
    } else if (!regexDate.test(dateCardMM.value)) {
        alert('Please enter the correct month card!')
    } else if (!regexDate.test(dateCardYY.value)) {
        alert('Please enter the correct year card!')
    } else if (!regexNameCard.test(nameCard.value)) {
        alert('Please enter the correct name!')
    } else if (!regexCvc.test(cvc.value)) {
        alert('Please enter the correct cvc!')
    }
    else {
        cardForm.classList.remove('visible')
        cardForm.classList.add('hidden')
        overlay.classList.remove('visible')
        overlay.classList.add('hidden')
        alert("Thank you for your donation!")
    }
})

overlay.addEventListener('click', () => {
    formDonate.classList.remove('visible')
    formDonate.classList.add('hidden')
    cardForm.classList.remove('visible')
    cardForm.classList.add('hidden')
    feedbackForm.classList.remove('visible')
    feedbackForm.classList.add('hidden')
    overlay.classList.remove('visible')
    overlay.classList.add('hidden')
})


btnDonate.forEach(el => {
    el.addEventListener('click', e => {
        overlay.classList.remove('hidden')
        overlay.classList.add('visible')
        formDonate.classList.remove('hidden')
        formDonate.classList.add('visible')
    })
})

feedback.addEventListener('click', e => {
    e.preventDefault()
    overlay.classList.remove('hidden')
    overlay.classList.add('visible')
    feedbackForm.classList.remove('hidden')
    feedbackForm.classList.add('visible')
})

btnSubmit.addEventListener('submit', e => {
    e.preventDefault()
    feedbackForm.classList.remove('visible')
    feedbackForm.classList.add('hidden')
})

if (btnFeebackTestimonials) {
    btnFeebackTestimonials.addEventListener('click', e => {
        e.preventDefault()
        overlay.classList.remove('hidden')
        overlay.classList.add('visible')
        feedbackForm.classList.remove('hidden')
        feedbackForm.classList.add('visible')
    })
}

closeModal.forEach(el => {
    el.addEventListener('click', e => {
        formDonate.classList.remove('visible')
        formDonate.classList.add('hidden')
        cardForm.classList.remove('visible')
        cardForm.classList.add('hidden')
        feedbackForm.classList.remove('visible')
        feedbackForm.classList.add('hidden')
        overlay.classList.remove('visible')
        overlay.classList.add('hidden')
    })
})