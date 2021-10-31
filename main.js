const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*========== SHOW MENU ==========*/
const closeBtn = $('.nav__close')
const toggleBtn = $('.nav__toggle')
const navLinks = $$('.nav__item')
const header = $('#header')
const scrollUp = $('.scroll-up')
const sections = $$('section[id]')


if (toggleBtn) {
    toggleBtn.onclick = () => {
        $('.nav__menu').classList.add('show-menu')
    }
}

if (closeBtn) {
    closeBtn.onclick = () => {
        $('.nav__menu.show-menu').classList.remove('show-menu')
    }
}

/*========== HIDE MENU ==========*/
navLinks.forEach((navLink) => {
    navLink.onclick = (e) => {
        $('.nav__menu.show-menu').classList.remove('show-menu')
    }
})

window.onscroll = () => {
    /*========== CHANGE BACKGROUND HEADER ==========*/
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
        scrollUp.classList.add('scroll-display')
    } else {
        header.classList.remove('scroll-header')
        scrollUp.classList.remove('scroll-display')
    }

    /*========== ACTIVE SECTION WHEN SCROLL ==========*/
    sections.forEach((section) => {
        const sectionID = section.getAttribute('id')

        if (this.scrollY > section.offsetTop - 50 && this.scrollY <= section.offsetTop - 50 + section.offsetHeight) {
            $('.nav__menu a[href*=' + sectionID + ']').classList.add('section-active')
        } else {
            $('.nav__menu a[href*=' + sectionID + ']').classList.remove('section-active')
        }
    })

}

/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__header, .section__title`, { delay: 600 })
sr.reveal(`.home__footer`, { delay: 700 })
sr.reveal(`.home__img`, { delay: 900, origin: 'top' })

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content`, { origin: 'top', interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
sr.reveal(`.case__img`, { origin: 'top' })
sr.reveal(`.case__data`, { origin: 'bottom' })

sr.reveal