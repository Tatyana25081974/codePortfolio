// ============================
// Ліниве завантаження зображень <img>
// ============================

// 1️⃣ Знаходимо всі зображення, які мають атрибут `data-src` (а не `src`).
const lazyImages = document.querySelectorAll('img[data-src]');

// 2️⃣ Функція, яка буде підвантажувати зображення
const lazyLoadImages = (entries, observer) => {
  entries.forEach(entry => {
    // Якщо зображення знаходиться у видимій частині екрану (intersecting)
    if (entry.isIntersecting) {
      const img = entry.target; // Отримуємо <img>, яке треба завантажити
      img.src = img.dataset.src; // Підставляємо шлях з `data-src` у `src`
      img.removeAttribute('data-src'); // Видаляємо `data-src`, щоб не завантажувати знову
      observer.unobserve(img); // Прибираємо зображення зі списку спостереження
    }
  });
};

// 3️⃣ Налаштування Intersection Observer для зображень
const imgObserver = new IntersectionObserver(lazyLoadImages, {
  root: null, // `null` означає, що відстежуємо весь viewport (екран)
  threshold: 0.1, // Запускаємо завантаження, коли 10% зображення з'явиться у полі зору
});

// 4️⃣ Додаємо всі знайдені зображення до спостереження
lazyImages.forEach(img => imgObserver.observe(img));

// ============================
// Ліниве завантаження фонового зображення (background-image)
// ============================

// 1️⃣ Знаходимо всі елементи з `data-bg`
const lazyBackgrounds = document.querySelectorAll('.lazy-bg');

// 2️⃣ Функція для підвантаження фонів
const lazyLoadBackgrounds = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target; // Отримуємо елемент, який має `data-bg`
      bg.style.backgroundImage = `url(${bg.dataset.bg})`; // Підставляємо шлях у background-image
      bg.removeAttribute('data-bg'); // Видаляємо `data-bg`, щоб не підвантажувати знову
      observer.unobserve(bg); // Прибираємо зі списку спостереження
    }
  });
};

// 3️⃣ Налаштування Intersection Observer для фонів
const bgObserver = new IntersectionObserver(lazyLoadBackgrounds, {
  root: null, // Відстежуємо весь viewport
  threshold: 0.1, // Запускаємо, коли 10% блоку у полі зору
});

// 4️⃣ Додаємо всі знайдені елементи до спостереження
lazyBackgrounds.forEach(bg => bgObserver.observe(bg));
