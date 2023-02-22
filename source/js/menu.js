/* Activate Menu */

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.navigation__menu-button');

menu.classList.remove('menu--active');
menuButton.classList.remove('navigation__menu-button--active');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuButton.classList.toggle('navigation__menu-button--active');
});
