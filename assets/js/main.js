/*=============== MENU SHOW ===============*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

/*==== MENU SHOW ====*/
// valida se a constante existe
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/* ==== MENU HIDDEN ==== */
//vali se a constante existe
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
    const navMenu = document.querySelector('#nav-menu');
    //quando clicamos em cada um nav__link, removemos o show-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
    
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = ()=>{
    const scrollUp = document.querySelector('#scroll-up');
   scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTION ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = window.scrollY

    sections.forEach( current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALAX ===============*/
let parallax = new Rellax('.parallax');

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1})
