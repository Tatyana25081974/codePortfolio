import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
