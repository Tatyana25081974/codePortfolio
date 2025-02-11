import Swiper from 'swiper';
import 'swiper/css';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper-about', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  modules: [Navigation, Keyboard, Mousewheel],
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
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
