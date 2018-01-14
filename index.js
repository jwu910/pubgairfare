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
  const cityName = document.querySelector('.city-name');
  const ticketButton = document.querySelector('.btn-ticket');

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
    cityName.innerHTML = cities[firstCity];
    firstCity = (firstCity + 1) % allCities;
  };

  const change = () => {
    next = setInterval(changeCity, 180);
  };

  ticketButton.onclick = () => {
    cityName.classList.add('animate');
    setTimeout(() => {
      const random = Math.floor(Math.random() * cities.length);
      clearInterval(next);
      cityName.innerHTML = cities[random];
      cityName.classList.remove('animate');
    }, 2500);
    change();
  };
};

window.addEventListener('DOMContentLoaded', init);
