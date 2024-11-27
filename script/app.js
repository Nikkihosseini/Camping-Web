const $ = document
const HamburgerMenu = $.querySelector('.hamburger-menu')
const mobileMenu = $.querySelector('.mobile-menu')


HamburgerMenu.addEventListener('click' , () => {
    HamburgerMenu.classList.toggle('hamburger-menu--open')

    if(HamburgerMenu.classList.contains('hamburger-menu--open')){
        console.log('open')
        mobileMenu.classList.remove('-left-64')
        mobileMenu.classList.add('left-0')
    } else{
        console.log('close')
        mobileMenu.classList.remove('left-0')
        mobileMenu.classList.add('-left-64')
    }
})