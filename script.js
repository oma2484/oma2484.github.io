const animals = [
  {
    name: 'Bobby',
    age: '2 a\u00f1os',
    sex: 'Macho',
    size: 'Mediano',
    image: 'https://placekitten.com/400/300',
    description: 'Juguet\u00f3n y activo. Vacunado y esterilizado.'
  },
  {
    name: 'Luna',
    age: '1 a\u00f1o',
    sex: 'Hembra',
    size: 'Peque\u00f1o',
    image: 'https://placekitten.com/401/300',
    description: 'Tranquila y cari\u00f1osa. Esterilizada.'
  },
  {
    name: 'Max',
    age: '3 a\u00f1os',
    sex: 'Macho',
    size: 'Grande',
    image: 'https://placekitten.com/402/300',
    description: 'Sociable y obediente.'
  }
];

let index = 0;

const img = document.getElementById('animal-img');
const nameEl = document.getElementById('animal-name');
const infoEl = document.getElementById('animal-info');
const card = document.getElementById('animal-card');
const endMsg = document.getElementById('end-message');

function showAnimal(i) {
  const a = animals[i];
  img.src = a.image;
  img.alt = a.name;
  nameEl.textContent = a.name;
  infoEl.textContent = `${a.age} \u2022 ${a.sex} \u2022 ${a.size}\n${a.description}`;
}

function next() {
  index++;
  if (index >= animals.length) {
    card.classList.add('hidden');
    endMsg.classList.remove('hidden');
  } else {
    showAnimal(index);
  }
}

document.getElementById('yes-btn').addEventListener('click', next);
document.getElementById('no-btn').addEventListener('click', next);

showAnimal(index);
