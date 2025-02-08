document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");

        button.addEventListener("click", function () {
            // Закриваємо всі відкриті елементи, крім поточного
            faqItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                    el.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            // Перемикаємо клас active для поточного елемента
            item.classList.toggle("active");

            // Анімація відкриття/закриття
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
