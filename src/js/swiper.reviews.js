import Swiper from 'swiper';
import '../css/reviews.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-reviews', {
    loop: true,
    slidesPerView: 1,
    modules: [Keyboard, Navigation, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-prev-reviews',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: {
      invert: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1, 
      },
      768: {
        slidesPerView: 2, 
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 4, 
        spaceBetween: 16,
      },
    },
  });
});

// import Swiper from 'swiper';
// import '../css/reviews.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// document.addEventListener('DOMContentLoaded', () => {
//   fetchReviews();
// });

// async function fetchReviews() {
//   try {
//     const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Reviews Data:', data);

//     renderReviews(data);
//     initSwiperReviews();
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//   }
// }

// function renderReviews(reviews) {
//   const reviewsList = document.getElementById('reviews-list');
  
//   if (!reviewsList) {
//     console.error('reviewsList не знайдено в DOM');
//     return;
//   }


//   reviewsList.innerHTML = '';

//   reviews.forEach(({ avatar_url, author, review }) => {
//     const reviewItem = document.createElement('li');
//     reviewItem.classList.add('swiper-slide');

//     reviewItem.innerHTML = `
//       <div class="review-card">
//         <img src="${avatar_url}" alt="${author}" class="review-avatar">
//         <h3 class="review-author">${author}</h3>
//         <p class="review-text">${review}</p>
//       </div>
//     `;

//     reviewsList.appendChild(reviewItem);
//   });
// }
// function initSwiperReviews() {
//   new Swiper('.swiper-reviews', {
//     slidesPerView: 1, // Для мобільних пристроїв
//     spaceBetween: 20,
//     navigation: {
//       nextEl: '.swiper-button-next-reviews',
//       prevEl: '.swiper-button-prev-reviews',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       768: { slidesPerView: 2 }, 
//       1440: { slidesPerView: 4 } 
//     },
//   });
// }
// document.addEventListener('DOMContentLoaded', () => {
//   initSwiperReviews();
// });