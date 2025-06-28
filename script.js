let typed = new Typed('#text', {
    strings: ['Developer.', 'Designer', 'Writer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
});

// SHOW SKILLS
let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click', ()=> {
    skillDet.classList.toggle('show_skills');
});

// STICKY NAV
let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove('sticky_nav');
    }
});

// TESTIMONIAL SWIPER SLIDER
var swiper = new Swiper('.testSwiper', {
    slidesPerView:1,
    loop: true,
    autoplay: true,
});

// FILTERS
var mixer = mixitup('.portfolio_images');

// BLOG SWIPER SLIDER
var swiper = new Swiper('.blogSwiper', {
    slidesPerView:3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        900:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        400:{
            slidesPerView:1,
            spaceBetween: 10,
        },
    }
});

// SHOW/HIDE MENU
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_nav');
})