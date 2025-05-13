const swiper = new Swiper('.swiper', {
    
    speed: 800,
    spaceBetween: 20,
    slidesPerGroup: 2,

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      1201: {
        slidesPerView: 5,
      },
    } });