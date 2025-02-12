import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import '../css/reviews.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function initSwiperReviews() {
  const swiper = new Swiper('.swiper-reviews', {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-prev-reviews',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },

    on: {
      reachEnd: function () {
        document
          .querySelector('.swiper-button-next-reviews')
          ?.classList.add('swiper-button-disabled-reviews');
      },
      reachBeginning: function () {
        document
          .querySelector('.swiper-button-prev-reviews')
          ?.classList.add('swiper-button-disabled-reviews');
      },
      slideChange: function () {
        document
          .querySelector('.swiper-button-next-reviews')
          ?.classList.remove('swiper-button-disabled-reviews');
        document
          .querySelector('.swiper-button-prev-reviews')
          ?.classList.remove('swiper-button-disabled-reviews');
      },
    },
  });
  swiper.update();
}

document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Reviews Data:', data);

    renderReviews(data); // Спочатку рендеримо відгуки
    setTimeout(initSwiperReviews, 100); // Чекаємо, щоб Swiper встиг побачити слайди
  } catch (error) {
    console.error('Error fetching reviews:', error);
    showNotFoundMessage();
  }
}

function renderReviews(reviews) {
  const reviewsList = document.querySelector('.reviews-list');

  if (!reviewsList) {
    console.error('reviewsList не знайдено в DOM');
    return;
  }

  reviewsList.innerHTML = ''; // Очищаємо список

  reviews.forEach(({ avatar_url, author, review }) => {
    const reviewItem = document.createElement('li');
    reviewItem.classList.add('swiper-slide', 'review-item'); // Додаємо клас

    reviewItem.innerHTML = `
      <li class="review-card">
        <img src="${avatar_url}" alt="${author}" class="review-avatar">
        <h3 class="review-author">${author}</h3>
        <p class="review-text">${review}</p>
      </li>
    `;

    reviewsList.appendChild(reviewItem);
  });

  initSwiperReviews(); // Викликаємо Swiper після додавання елементів
}

function showNotFoundMessage() {
  const reviewsContainer = document.querySelector('.reviews-container');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = '<p class="reviews-not-found">Not found</p>';
  }
}
