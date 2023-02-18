/* Activate Menu */

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.navigation__menu-button');

menu.classList.remove('menu--active');
menuButton.classList.remove('navigation__menu-button--active');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuButton.classList.toggle('navigation__menu-button--active');
});

/* Promo Slider */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

