// https://codepen.io/phvc/pen/RxLyGv

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
  'Hacienda del Patrón',
];

const populateWheel = () => {
  const wheel = document.querySelector('.wheel');
  const ul = document.createElement('ul');

  ERENGEL_CITIES.forEach(city => {
    let li = document.createElement('li');
    li.innerText = city;
    ul.appendChild(li);
  });

  wheel.appendChild(ul);
};

const populateSpinButton = () => {
  const button = document.querySelector('.spin-wheel');

  button.onclick = event => {
    event.preventDefault();
    event.stopPropagation();
  }; // spins the wheel
};

populateWheel();
populateSpinButton();
