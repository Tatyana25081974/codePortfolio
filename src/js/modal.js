import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const modal = document.querySelector('.work-together-modal');
  const closeButton = document.querySelector('.work-together-modal-close-icon');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const emailInput = form.querySelector('.work-together-form-email');
    const commentInput = form.querySelector('.work-together-form-comments');

    const successMessage = document.querySelector('.email-succes');
    const errorMessage = document.querySelector('.email-invalid');

    const formData = {
      email: emailInput.value.trim(),
      comment: commentInput.value.trim(),
    };

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

      openSuccessModal();
      form.reset();
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
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');

    // Додаємо слухачі тільки при відкритті
    document.addEventListener('keydown', closeOnEscape);
    modal.addEventListener('click', closeOnBackdropClick);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');

    // Видаляємо слухачі при закритті
    document.removeEventListener('keydown', closeOnEscape);
    modal.removeEventListener('click', closeOnBackdropClick);
  }

  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function closeOnBackdropClick(event) {
    if (event.target === modal) {
      closeModal();
    }
  }

  closeButton.addEventListener('click', function (event) {
    event.stopPropagation();
    closeModal();
  });
});
