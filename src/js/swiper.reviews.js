
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsList = document.getElementById('reviews-list');


  function renderReviews(reviews) {
    reviewsList.innerHTML = '';
  
    const customReviews = [
      { avatar: 'img/content/Reviews/my-photo1.jpg', author: 'Natalia', review: 'Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations' },
      { avatar: 'img/content/Reviews/my-photo2.jpg', author: 'Dmytro', review: 'I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.' },
      { avatar: 'img/content/Reviews/my-photo3.jpg', author: 'Anna', review: 'The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!' },
      { avatar: 'img/content/Reviews/my-photo4.jpg', author: 'Ivetta', review: 'Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.' }
    ];
  
    customReviews.forEach(customReview => {
      const reviewItem = document.createElement('li');
      reviewItem.classList.add('swiper-slide', 'reviews-list-item');
  
      reviewItem.innerHTML = `
        <img class="review-image" src="${customReview.avatar}" alt="${customReview.author}" width="48" height="48">
        <h3 class="reviews-names">${customReview.author}</h3>
        <p class="reviews-text">${customReview.review}</p>
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
