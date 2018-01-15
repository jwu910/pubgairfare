const ERENGEL_CITIES = [
  'Apartments',
  'Farm',
  'Farmlands',
  'Ferry Pier',
  'Gatka Trenches',
  'Gatka',
  'Georgopol',
  'Hospital',
  'Kameshki',
  'Lipovka',
  'Mansion',
  'Mylta Power Large',
  'Mylta Power Small',
  'Mylta',
  'Novorepnoye',
  'Pochinki',
  'Primorsk',
  'Quarry',
  'Ridge Complex',
  'Rozhok',
  'Ruins',
  'School',
  'Severny',
  'Shelter',
  'Shooting Range',
  'Sosnovka Island',
  'Sosnovka Military Base',
  'Stalber',
  'Stalber',
  'Swamp Town',
  'Water Town',
  'Woodcutter Camp',
  'Yasnaya Polyana',
  'Zharki',
];

const MIRAMAR_CITIES = [
  'Campo Militar',
  'Chumacera',
  'Crater Fields',
  'Cruz del Valle',
  'El Azahar',
  'El Pozo',
  'Graveyard',
  'Hacienda del Patrón',
  'Junkyard',
  'La Cobreria',
  'Los Higos',
  'Los Leones',
  'Minas Generales',
  'Minas del Sur',
  'Minas del Valle',
  'Monte Nuevo',
  'Pecado',
  'Power Grid',
  'Prison',
  'Puerto Paraiso',
  'Ruins',
  'San Martin',
  'Tierra-Bronca',
  'Trailer Park',
  'Valle del Mar',
  'Water Treatment',
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
    next = setInterval(changeCity, 120);
  };

  ticketButton.onclick = () => {
    allCities = cities.length;

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
