const scrollBtn = document.querySelector('#scroll-btn')

window.addEventListener('scroll', handleScroll)

function handleScroll () {
    if(window.scrollY > 100) {
        scrollBtn.style.display = 'block'
    }
    else {
        scrollBtn.style.display = 'none'
    }
}

scrollBtn.addEventListener('click', ()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
})) 