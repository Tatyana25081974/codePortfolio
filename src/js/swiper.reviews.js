
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsList = document.getElementById('reviews-list');


  function renderReviews(reviews) {
   
    reviewsList.innerHTML = '';

    
    reviews.forEach(review => {
      
      const reviewItem = document.createElement('li');
      reviewItem.classList.add('swiper-slide', 'reviews-list-item');
      
      reviewItem.innerHTML = `
                <img class="review-image" src="images/my-photo${reviews.indexOf(review) + 1}.jpg" alt="${review.author}" width="48" height="48">
                <h3 class="reviews-names">${review.author}</h3>
                <p class="reviews-text">${review.review}</p>
            `;
      
      reviewsList.appendChild(reviewItem);
    });

  
    requestAnimationFrame(equalizeReviewHeights);
  }

 
  function equalizeReviewHeights() {
    const reviewItems = document.querySelectorAll('.reviews-list-item');
    let maxHeight = 0;

   
    reviewItems.forEach(item => {
      item.style.height = 'auto'; 
      maxHeight = Math.max(maxHeight, item.offsetHeight); 
    });

   
    reviewItems.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }

  async function fetchReviews() {
    try {
     
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      if (data && Array.isArray(data) && data.length > 0) {
        renderReviews(data); 
      } else {
        reviewsList.innerHTML = '<li style="color: red;">Not found</li>';
      }
    } catch (error) {
      reviewsList.innerHTML = '<li style="color: red;">Not found</li>';
      alert('reviews not found');
      console.error('Reviews error:', error);
    }
  }

  function initSwiperReviews() {
    const swiperReviews = new Swiper('.swiper-reviews', {
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next-reviews',
        prevEl: '.swiper-button-prev-reviews',
        disabledClass: 'swiper-button-disabled-reviews',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          speed: 400,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          speed: 400,
          spaceBetween: 16,
        },
      },
    });

    swiperReviews.on('slideChange', function () {
      const prevButtonReviews = swiperReviews.navigation.prevEl;
      const nextButtonReviews = swiperReviews.navigation.nextEl;


      prevButtonReviews.disabled = swiperReviews.isBeginning;
      nextButtonReviews.disabled = swiperReviews.isEnd;
    });
  }

  fetchReviews().then(() => {
    initSwiperReviews();
  });
});
