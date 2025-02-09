import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Відміна стандартної відправки форми

    const emailInput = form.querySelector('.work-together-form-email');
    const commentInput = form.querySelector('.work-together-form-comments');

    const successMessage = document.querySelector('.email-succes');
    const errorMessage = document.querySelector('.email-invalid');

    // Отримуємо значення з форми
    const formData = {
      email: emailInput.value.trim(),
      comment: commentInput.value.trim(),
    };
    console.log('formData :>> ', formData);

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Помилка під час відправлення запиту');
      }

      // Якщо запит успішний - відкриваємо модальне вікно
      openSuccessModal();
      form.reset(); // Очищаємо форму
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
    } catch (error) {
      console.error('Помилка:', error);

      iziToast.show({
        messageColor: '#fff',
        color: '#EF4040',
        position: 'topRight',
        timeout: 7000,
        message: 'An error occurred. Please check your input and try again.',
      });

      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    }
  });

  function openSuccessModal() {
    // Функція для відкриття модального вікна
    const modal = document.querySelector('.work-together-modal');
    modal.classList.add('is-open');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.work-together-modal');
  const closeButton = document.querySelector('.work-together-modal-close-icon');

  function closeModal() {
    modal.classList.remove('is-open'); // Видаляємо клас, який відкриває модальне вікно
  }

  // Закриття по кнопці
  closeButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Запобігаємо закриттю по кліку на саму іконку
    closeModal();
  });

  // Закриття по кліку на backdrop (зону поза модальним вікном)
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Закриття при натисканні клавіші Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
