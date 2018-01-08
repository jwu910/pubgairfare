const ERENGEL_CITIES = [
  'Georgopol',
  'Mylta',
  'Pochinki',
  'Yasnaya Polyana',
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
  'Stalber',
  'Sosnovka Island',
  'Sosnovka Military Base',
];

const MIRAMAR_CITIES = [
  'Los Leones',
  'El Pozo',
  'Monte Nuevo',
  'Valle del Mar',
  'La Cobreria',
  'San Martin',
  'Chumacera',
  'Pecado',
  'Hacienda del Patrón',
  'Los Leones',
  'El Pozo',
  'Monte Nuevo',
  'Valle del Mar',
  'La Cobreria',
  'San Martin',
  'Chumacera',
  'Pecado',
  'Hacienda del Patrón',
];

const init = () => {
  let next;
  let cities = ERENGEL_CITIES;
  let allCities = cities.length;
  let firstCity = 0;

  const mapSelection = document.querySelector('.map-selection');
  mapSelection.onchange = () => {
    if (document.getElementById('M1').checked) {
      cities = ERENGEL_CITIES;
      changeCity();
    } else if (document.getElementById('M2').checked) {
      cities = MIRAMAR_CITIES;
      changeCity();
    }
  };

  const changeCity = () => {
    const cityName = document.querySelector('.city-name');

    cityName.innerHTML = cities[firstCity];
    firstCity = (firstCity + 1) % allCities;
  };

  const change = () => {
    next = setInterval(changeCity, 120);
  };

  const cityBox = document.querySelector('.city-box');
  cityBox.onmouseover = change;
  cityBox.onmouseout = () => clearInterval(next);
};

window.addEventListener('DOMContentLoaded', init);
