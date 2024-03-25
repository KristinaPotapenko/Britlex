const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".mobile-menu__open");
const menuBtnClose = document.querySelector(".mobile-menu__close");
const menuLinks = document.querySelectorAll(".mobile-menu__link");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});
