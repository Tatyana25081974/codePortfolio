import Accordion from 'accordion-js';

// Ініціалізація Accordion.js
const accordionFaq = new Accordion('.js-list-container', {
  duration: 1250,
  panelClass: 'list-item-text',
  showMultiple: true,
  elementClass: 'list-item',
  triggerClass: 'btn-faq',
  activeClass: 'opens',
  onOpen: function (currentElement) {
    setTimeout(() => {
      console.log('Открылся элемент:', currentElement);
    }, 350);
  },
});

// Ваш код для обробки кліків на FAQ елементи
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item .faq-btn').forEach(button => {
    button.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      item.classList.toggle('active');
      const content = item.querySelector('.faq-content-text');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});
