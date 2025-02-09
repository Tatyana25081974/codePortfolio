import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.project-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.project-next-btn',
      prevEl: '.project-prev-btn',
    },
    direction: 'vertical',
    loop: false, 
    on: {
      slideChange: function () {
        const projectPrevButton = document.querySelector('.project-prev-btn');
        const projectNextButton = document.querySelector('.project-next-btn');

        if (this.isBeginning) {
          projectPrevButton.disabled = true;
          projectPrevButton.style.opacity = '0.5';
        } else {
          projectPrevButton.disabled = false;
          projectPrevButton.style.opacity = '1';
        }
     
        if (this.isEnd) {
          projectNextButton.disabled = true;
          projectNextButton.style.opacity = '0.5';
        } else {
          projectNextButton.disabled = false;
          projectNextButton.style.opacity = '1';
        }
      },
    },
  });

  const projectPrevButton = document.querySelector('.project-prev-btn');
  const projectNextButton = document.querySelector('.project-next-btn');

  projectPrevButton.disabled = true;
  prevButton.style.opacity = '0.5';
});
