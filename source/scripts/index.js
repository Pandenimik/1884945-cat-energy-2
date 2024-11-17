const button = document.querySelector('.burger-toggle');
const navList = document.querySelector('.main-nav__list');
const toggleNav = function () {
  navList.classList.toggle('main-nav__list--closed');
  button.classList.toggle('opened-nav');
};

button.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleNav();
});
