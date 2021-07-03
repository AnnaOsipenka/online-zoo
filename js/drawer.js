const btnAside = document.querySelector('.btn-aside')
const aside = document.querySelector('.container-said-bar')

btnAside.addEventListener('click', () => {
    if (aside.classList.contains('aside-open')) {
        aside.classList.remove('aside-open')
        btnAside.style.transform = "translateX(0) rotate(-90deg)"
        btnAside.style.transition = "0.5s"
    } else {
        aside.classList.add('aside-open')
        btnAside.style.transform = "translateX(190%) rotate(-90deg)"
        btnAside.style.transition = "0.5s"
    }
})