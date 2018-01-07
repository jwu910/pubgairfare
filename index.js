// https://codepen.io/phvc/pen/RxLyGv
let island;
let cities;
let next;

const ERENGEL_CITIES = [
  // Major Cities
  'Georgopol',
  'Mylta',
  'Pochinki',
  'Yasnaya Polyana',

  // Minor Cities
  'Gatka',
  'Kameshki',
  'Lipovka',
  'Mylta Power',
  'Novorepnoye',
  'Primorsk',
  'Rozhok',
  'Severny',
  'Stalber',
  'Zharki',

  // Major Landmarks
  'Stalber',
  'Sosnovka Island',
  'Sosnovka Military Base',
];

const MIRAMAR_CITIES = [
  // Major Cities
  'Los Leones',
  'El Pozo',
  'Monte Nuevo',
  'Valle del Mar',
  'La Cobreria',
  'San Martin',
  'Chumacera',

  // Minor Cities
  'Pecado',

  // Major Landmarks
  'Hacienda del Patrón'
];
// Need to set cities array based on radio button activity.


$(document).ready(() =>{
  let mapSelection = document.querySelector('#mapSelection');
  let cityName = document.querySelector('.city-name');

  cities = ERENGEL_CITIES;
  let allCities = cities.length;
  let firstCity = 0;
  city = $('.city-name');

  $('.map-selection').on('change', () => {
    if (document.getElementById('M1').checked) {
      cities = ERENGEL_CITIES;
      changeCity();
    } else if (document.getElementById('M2').checked) {
      cities = MIRAMAR_CITIES;
      changeCity();
    }
  })

  function changeCity() {
    city.html(cities[firstCity]);
    firstCity = (firstCity + 1) % allCities;
  }

  function change() {
    next = setInterval(changeCity, 100);//must match css animation
  };

  $('.city-box').hover(() => {
    change();
  }, () => {
    clearInterval(next);
  });
});