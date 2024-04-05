(function () {
    // HERO SLIDER

    heroSlider = new Swiper('.hero__slider', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        initialSlide: 2,
        

        grabCursor: true,
        speed: 8000,
        freeModeMomentum: false,
        freeMode: true,
        autoplay: {
            enabled: true,
            delay: 0,
            pauseOnMouseEnter: true,
        },
        


    });


})()