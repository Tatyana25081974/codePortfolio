// Обробка мобільного меню
const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelectorAll(".mobile-menu a");

// Відкриття меню
burgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

// Закриття меню
closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Закриття меню при натисканні на посилання
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// Плавний скролл для якірних посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});