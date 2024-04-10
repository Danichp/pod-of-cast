(function () {
    // HERO SLIDER

    heroSlider = new Swiper('.hero__slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 2,



        grabCursor: true,
        speed: 8000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },


    });


    // BURGER MENU
    const burgerBtn = document.querySelector('.burger__button')
    const body = document.body
    const navList = document.querySelectorAll('.nav__link')

    burgerBtn.addEventListener('click', (e) => {
        body.classList.toggle('body--opened-menu')
    })

    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener('click', () => {
            if (body.classList.contains('body--opened-menu')) {
                body.classList.remove('body--opened-menu')
            } else return

        })
    }



    // TESTIMONIALS slider
    testimonialsSlider = new Swiper('.testimonials__slider', {
        spaceBetween: 20,
        slidesPerView: 1,

        navigation: {
            nextEl: '.testimonials__button--next',
            prevEl: '.testimonials__button--prev',
        },
        breakpoints: {
            // when window width is >= 320px
            701: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            901: {
                slidesPerView: 2,
                spaceBetween: 20
            },

        }


    });

})()