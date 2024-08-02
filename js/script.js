
header = document.querySelector('header')
buttonBack = document.querySelector('.buttonBack')


window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        header.classList.add('action')
        buttonBack.classList.add('action')
    } else {
        header.classList.remove('action')
        buttonBack.classList.remove('action')
    }
})