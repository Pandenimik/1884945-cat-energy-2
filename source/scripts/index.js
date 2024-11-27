
// Burger nav-menu
const button = document.querySelector('.burger-toggle');
const navList = document.querySelector('.main-nav__list');
navList.classList.toggle('main-nav__list--closed');
button.classList.toggle('opened-nav');
const toggleNav = function () {
  navList.classList.toggle('main-nav__list--closed');
  button.classList.toggle('opened-nav');
};

button.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleNav();
});

// Compare slider
const compareSlider = document.querySelector('.compare-slider__range');
const compareSlide = function () {
  const slideValue = compareSlider.value;
  document.querySelector('.compare-slider__img--before').style.clipPath = `polygon(0 0, ${ slideValue }% 0, ${ slideValue }% 100%, 0 100%)`;
  document.querySelector('.compare-slider__img--after').style.clipPath = `polygon(${ slideValue }% 0, 100% 0, 100% 100%, ${ slideValue }% 100%)`;
  document.querySelector('.compare-slider__thumb').style.left = `${ slideValue }%`;
};

compareSlider?.addEventListener('input', compareSlide);

// Map
initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;


  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('map'),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [30.323037, 59.938631],

        // Уровень масштабирования
        zoom: 14
      }
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());

  // Добавляем слой для отображения маркера
  map.addChild(new YMapDefaultFeaturesLayer());

  // Создаем и добавляем маркер
  const markerElement = document.createElement('div');
  markerElement.className = 'contacts__marker';

  const marker = new YMapMarker(
    {
      coordinates: [30.323037, 59.938631],
      draggable: true,
      mapFollowsOnDrag: true
    },
    markerElement
  );

  map.addChild(marker);
}
