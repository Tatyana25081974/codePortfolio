// Функція для завантаження HTML секцій
async function loadSection(file, containerId) {
    try {
        const response = await fetch(`./partials/${file}.html`);
        if (!response.ok) throw new Error(`Помилка завантаження ${file}`);

        const html = await response.text();
        document.querySelector(`#${containerId}`).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Завантажуємо секції при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    loadSection("header", "header-container");
    loadSection("hero", "hero-container");
    loadSection("about", "about-container");
    loadSection("benefits", "benefits-container");
    loadSection("projects", "projects-container");
    loadSection("faq", "faq-container");
    loadSection("covers", "covers-container");
    loadSection("reviews", "reviews-container");
    loadSection("work-together", "work-together-container");
});
