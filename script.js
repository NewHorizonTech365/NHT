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
let swiper = new Swiper('.testSwiper', {
    slidesPerView:1,
    loop: true,
    autoplay: true,
})