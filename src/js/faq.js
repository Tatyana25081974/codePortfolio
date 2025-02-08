document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");

        button.addEventListener("click", function () {
            // Закриваємо всі відкриті елементи, крім поточного
            faqItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                    const answer = el.querySelector(".faq-answer");
                    answer.style.maxHeight = null;
                    setTimeout(() => {
                        answer.style.opacity = "0"; // Плавне зникнення
                    }, 200); // Трохи затримуємо перед зникненням
                }
            });

            // Перемикаємо клас active для поточного елемента
            item.classList.toggle("active");

            // Анімація відкриття/закриття
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                setTimeout(() => {
                    answer.style.opacity = "1"; // Плавне підсвічування
                }, 50);
            } else {
                answer.style.maxHeight = null;
                setTimeout(() => {
                    answer.style.opacity = "0"; // Плавне згасання
                }, 200);
            }
        });
    });
});
