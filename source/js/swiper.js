/* Promo Slider */

const swiperElement = document.querySelector('.swiper');

swiperElement.classList.remove('swiper--nojs');

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
