import './menu.js';       // Мобільне меню
import './lazyload.js';   // Повільне завантаження
import './modal.js';      // Модальне вікно
import './form.js';       // Валідація форми
import './accordion.js';  // Аккордеон для FAQ та About Me
import './slider.js';     // Swiper.js для слайдерів

import { fetchProjects, fetchReviews, submitForm } from './api.js'; // API-запити

// =========================
// 🔹 Завантаження проєктів
// =========================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const projects = await fetchProjects(); // Отримуємо проєкти
    console.log('Projects:', projects);

    const reviews = await fetchReviews(); // Отримуємо відгуки
    console.log('Reviews:', reviews);
  } catch (error) {
    console.error('Помилка при отриманні даних з API:', error);
  }
});

// =========================
// 🔹 Обробка форми "Work Together"
// =========================
const contactForm = document.querySelector('#contact-form'); // Знаходимо форму

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Відключаємо стандартну поведінку форми

    // Отримуємо дані з форми
    const formData = {
      name: contactForm.elements.name.value.trim(),
      email: contactForm.elements.email.value.trim(),
      message: contactForm.elements.message.value.trim(),
    };

    // Відправляємо дані через API
    const response = await submitForm(formData);
    console.log('Form Response:', response);

    if (response.success) {
      alert('Форма успішно відправлена!');
      contactForm.reset(); // Очищаємо форму
    } else {
      alert('Помилка надсилання форми. Спробуйте ще раз.');
    }
  });
}
