
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

// Compare slider
window.slide = function slide() {
  const slideValue = document.getElementById('compareSlider').value;
  document.querySelector('.compare-slider__img--before').style.clipPath = `polygon(0 0, ${ slideValue }% 0, ${ slideValue }% 100%, 0 100%)`;
  document.querySelector('.compare-slider__img--after').style.clipPath = `polygon(${ slideValue }% 0, 100% 0, 100% 100%, ${ slideValue }% 100%)`;
};
