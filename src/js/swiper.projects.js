import Swiper from 'swiper';
import 'swiper/css';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    loop: false,
    modules: [Navigation, Keyboard, Mousewheel],
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function updateButtonState() {
    prevButton.disabled = swiper.activeIndex === 0;
    nextButton.disabled = swiper.activeIndex === swiper.slides.length - 1;
  }

  // swiper.on('slideChange', updateButtonState);
  // updateButtonState();
});
