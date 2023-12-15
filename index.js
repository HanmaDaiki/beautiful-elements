const mainSelector = document.querySelector('.main');

const planets = [
  {
    name: "Venus",
    description: "Venus is the second planet from the Sun.",
    image: "./images/venus.jpg"
  },
  {
    name: "Mars",
    description: "Mars is the fourth planet and the furthest terrestrial planet from the Sun.",
    image: "./images/mars.png"
  },
  {
    name: "Saturn",
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.",
    image: "./images/saturn.jpg"
  },
  {
    name: "Jupiter",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
    image: "./images/jupiter.jpg"
  },
  {
    name: "Earth",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
    image: "./images/earth.jpg"
  }
];

function openCard (selector, index) {
  const children = selector.children;
  console.log(children[0].children[0].children[0]);

  for(let i = 0; i < children.length; i++) {
    if(index === i) {
      children[i].classList.add('planet_active');
      children[i].children[0].children[0].classList.add('planet__info_active');
    } else {
      children[i].classList.remove('planet_active');
      children[i].children[0].children[0].classList.remove('planet__info_active');
    };
  }
};

function createCard (planet, index) {
  const element = document.createElement("div");
  element.classList = "planet";
  element.style.background = `url(${planet.image})`;
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";

  const content = document.createElement("div");
  content.classList = "planet__content";

  const info = document.createElement("div");
  info.classList = "planet__info"

  const number = document.createElement("div");
  number.textContent = index + 1;
  number.classList = "planet__number";
  
  const name = document.createElement("div");
  name.textContent = planet.name;
  name.classList = 'planet__name';
  const description = document.createElement("div");
  description.textContent = planet.description;

  info.appendChild(name);
  info.appendChild(description);

  content.appendChild(info);
  content.appendChild(number);
  
  element.appendChild(content);

  element.addEventListener('click', () => openCard(mainSelector, index));

  mainSelector.appendChild(element);
};

planets.forEach((planet, index) => createCard(planet, index));
