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
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

