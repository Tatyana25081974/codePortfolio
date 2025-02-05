const BASE_URL = 'https://portfolio-js.b.goit.study/api'; // URL API бекенду

// ============================
// 🔹 Функція отримання проєктів
// ============================
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/projects`);
    
    if (!response.ok) {
      throw new Error(`Error fetching projects: ${response.status}`);
    }

    const data = await response.json();
    return data; // Повертаємо отримані проєкти
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return []; // Якщо помилка, повертаємо пустий масив
  }
};

// ============================
// 🔹 Функція отримання відгуків
// ============================
export const fetchReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`);
    
    if (!response.ok) {
      throw new Error(`Error fetching reviews: ${response.status}`);
    }

    const data = await response.json();
    return data; // Повертаємо отримані відгуки
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return []; // Якщо помилка, повертаємо пустий масив
  }
};

// ============================
// 🔹 Функція надсилання форми "Work Together"
// ============================
export const submitForm = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // Перетворюємо об’єкт у JSON
    });

    if (!response.ok) {
      throw new Error(`Error submitting form: ${response.status}`);
    }

    const data = await response.json();
    return data; // Повертаємо відповідь сервера
  } catch (error) {
    console.error('Failed to submit form:', error);
    return { success: false, message: 'Submission failed' };
  }
};
