import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import '../css/reviews.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showToast(message, type = 'error') {
  iziToast[type]({
    title: type === 'error' ? 'Error' : 'Success',
    message,
    position: 'topRight',
    timeout: 5000,
    messageSize: '15',
    titleSize: '15',
  });
}

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
      pageUpDown: false,
    },
    watchOverflow: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },

    on: {
      reachEnd: function () {
        document
          .querySelector('.swiper-button-next-reviews')
          ?.classList.add('swiper-button-disabled-reviews');
        this.allowSlideNext = false;
        this.keyboard.disable();
      },
      reachBeginning: function () {
        document
          .querySelector('.swiper-button-prev-reviews')
          ?.classList.add('swiper-button-disabled-reviews');
        this.allowSlidePrev = false;
        this.keyboard.disable();
      },
      slideChange: function () {
        document
          .querySelector('.swiper-button-next-reviews')
          ?.classList.remove('swiper-button-disabled-reviews');
        document
          .querySelector('.swiper-button-prev-reviews')
          ?.classList.remove('swiper-button-disabled-reviews');
        this.allowSlideNext = true;
        this.allowSlidePrev = true;
        this.keyboard.enable();
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
    setTimeout(() => {
      initSwiperReviews(); // Чекаємо, щоб Swiper встиг побачити слайди
    }, 100);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    showNotFoundMessage();
    showToast('Failed to load reviews. Please try again.', 'error');
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
      <div class="review-card">
        <img src="${avatar_url}" alt="${author}" class="review-avatar">
        <h3 class="review-author">${author}</h3>
        <p class="review-text">${review}</p>
      </div>
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
