document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const navLinksMobile = document.querySelectorAll(".mobile-menu a");
    const menuToggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav");
    const navLinksDesktop = document.querySelectorAll(".nav a");

    // === Відкриття та закриття бургер-меню ===
    if (burgerMenu && mobileMenu && closeMenu) {
        burgerMenu.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open"); // Блокуємо скрол сторінки
        });

        closeMenu.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open"); // Розблоковуємо скрол
        });

        document.addEventListener("click", function (event) {
            if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
                mobileMenu.classList.remove("active");
                document.body.classList.remove("menu-open");
            }
        });

        // Плавний скрол + закриття меню при натисканні на пункт
        navLinksMobile.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    mobileMenu.classList.remove("active");
                    document.body.classList.remove("menu-open");
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                }
            });
        });
    }

    // === Відкриття та закриття навігації на планшеті і десктопі ===
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

    // Плавний скрол для десктопного меню
    navLinksDesktop.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                menu.classList.remove("active"); // Закриваємо меню
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }, 300);
            }
        });
    });
});
