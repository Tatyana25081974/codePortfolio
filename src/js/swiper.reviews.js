document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});

async function fetchReviews() {
  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Reviews Data:', data); // Лог для перевірки

    renderReviews(data);
    
    // Переконайся, що Swiper оновлюється після рендерингу
    setTimeout(() => {
      const swiperInstance = document.querySelector('.swiper-reviews')?.swiper;
      if (swiperInstance) {
        swiperInstance.update();
      } else {
        console.warn('Swiper instance not found!');
      }
    }, 100);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

function renderReviews(reviews) {
  const reviewsList = document.getElementById('reviews-list');
  
  if (!reviewsList) {
    console.error('reviewsList не знайдено в DOM');
    return;
  }

  // Очищуємо список перед додаванням нових відгуків
  reviewsList.innerHTML = '';

  reviews.forEach(({ avatar_url, author, review }) => {
    const reviewItem = document.createElement('li');
    reviewItem.classList.add('swiper-slide');

    reviewItem.innerHTML = `
      <div class="review-card">
        <img src="${avatar_url}" alt="${author}" class="review-avatar">
        <h3 class="review-author">${author}</h3>
        <p class="review-text">${review}</p>
      </div>
    `;

    reviewsList.appendChild(reviewItem);
  });

  // Показати відгуки (якщо вони були приховані)
  document.querySelector('.reviews-list-wrapper').style.opacity = '1';
}

// Ініціалізація Swiper
function initSwiperReviews() {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',я
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// Викликаємо ініціалізацію Swiper після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  initSwiperReviews();
});
