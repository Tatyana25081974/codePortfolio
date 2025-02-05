import './menu.js';       // Мобільне меню
import './lazyload.js';   // Повільне завантаження
import './modal.js';      // Модальне вікно
import './form.js';       // Валідація форми
import './accordion.js';  // Аккордеон для FAQ та About Me
import './slider.js';     // Swiper.js для слайдерів

import { fetchProjects, fetchReviews, submitForm } from './api.js'; // API-запити

// =========================
// 🔹 Завантаження проєктів та відгуків
// =========================
document.addEventListener('DOMContentLoaded', async () => {
  const projectsContainer = document.querySelector('#projects-container');
  const reviewsContainer = document.querySelector('#reviews-container');

  try {
    const projects = await fetchProjects();
    if (!projects || projects.length === 0) {
      console.warn('⚠️ Немає доступних проєктів!');
      if (projectsContainer) projectsContainer.innerHTML = '<p>❌ Немає доступних проєктів.</p>';
    } else {
      console.log('Projects:', projects);
    }

    const reviews = await fetchReviews();
    if (!reviews || reviews.length === 0) {
      console.warn('⚠️ Немає відгуків!');
      if (reviewsContainer) reviewsContainer.innerHTML = '<p>❌ Відгуки недоступні.</p>';
    } else {
      console.log('Reviews:', reviews);
    }
  } catch (error) {
    console.error('❌ Помилка отримання даних з API:', error);
    if (projectsContainer) projectsContainer.innerHTML = `<p>❌ Не вдалося отримати проєкти: ${error.message || 'сервер недоступний'}</p>`;
    if (reviewsContainer) reviewsContainer.innerHTML = `<p>❌ Не вдалося отримати відгуки: ${error.message || 'сервер недоступний'}</p>`;
  }
});

// =========================
// 🔹 Обробка форми "Work Together"
// =========================
const contactForm = document.querySelector('#contact-form');

if (!contactForm) {
  console.warn('⚠️ Форма #contact-form не знайдена на сторінці.');
} else {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
      name: contactForm.elements.name.value.trim(),
      email: contactForm.elements.email.value.trim(),
      message: contactForm.elements.message.value.trim(),
    };

    try {
      const response = await submitForm(formData);
      console.log('Form Response:', response);

      if (response.success) {
        showSuccessMessage('✅ Форма успішно відправлена!');
        contactForm.reset();
      } else {
        showErrorMessage(response.error || '❌ Помилка! Спробуйте ще раз.');
      }
    } catch (error) {
      showErrorMessage('❌ Сервер недоступний. Перевірте підключення.');
      console.error('❌ Помилка надсилання форми:', error);
    }
  });
}

// Функції для повідомлень
function showSuccessMessage(message) {
  alert(message); // Можна замінити на кастомне модальне вікно
}

function showErrorMessage(message) {
  alert(message); // Або зробити кастомний error popup
}
