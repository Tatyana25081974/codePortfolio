import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper-about', {
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next-about',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });
});
