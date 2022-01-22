function openMenu() {
  const mobileMenu = document.querySelector('.navbar-mobile');
  mobileMenu.classList.remove('navbar_hidden');
}
const menuButton = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', openMenu);

function closeMenu() {
  const mobileNavbar = document.querySelector('.navbar-mobile');
  mobileNavbar.classList.add('navbar_hidden');
}
const menuCloseButton = document.querySelector('.navbar-mobile-close');
menuCloseButton.addEventListener('click', closeMenu);

const linkMobile = document.querySelectorAll('.nav_link_mobile');
linkMobile.forEach((element) => element.addEventListener('click', closeMenu));

const projects = [
  {
    index: 0,
    name: 'UN CLIMATE CHANGE CONFERENCE',
    technologies: ['CSS', 'Javascript', 'Html'],
    image: '/IMG/Capstone_project.png',
    description: 'Building a Capstone-project to review the things learned so as to show an understanding of all things learned. Technologies: HTML|CSS|Javascript',
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/my-first-capstone',
  },
  {
    index: 1,
    name: 'AWESOME BOOKS',
    technologies: ['CSS', 'Javascript', 'Html'],
    image: '/IMG/Awesomebooks.png',
    description:
      'Building Awesome-Books-project mainly using practical tests for JavaScript/Html and CSS functions, this reviews the things learned so as to show an understanding of all things learned',
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/Awesome-Books',
  },
  {
    index: 2,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
    image: '/IMG/Plaholder.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/Portfolio-Setup',
  },
  {
    index: 3,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
    image: '/IMG/Plaholder.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/Portfolio-Setup',
  },
  {
    index: 4,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
    image: '/IMG/Plaholder.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/Portfolio-Setup',
  },
  {
    index: 5,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
    image: '/IMG/Plaholder.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    version_link: 'https://github.com/Tobinchilongo/',
    source_link: 'https://github.com/Tobinchilongo/Portfolio-Setup',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const cardList = document.querySelector('.project-container');
  const card = document.createElement('div');
  card.classList.add('project-card');
  cardList.appendChild(card);

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', projects[i].image);
  cardImage.setAttribute('alt', 'Project image');
  card.appendChild(cardImage);

  const cardData = document.createElement('div');
  cardData.classList.add('card-title');
  card.appendChild(cardData);

  const cardDataH3 = document.createElement('h4');
  cardDataH3.innerHTML = projects[i].name;
  cardData.appendChild(cardDataH3);

  const cardDataUl = document.createElement('ul');
  cardDataUl.classList.add('project-technologies');
  card.appendChild(cardDataUl);

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const cardDataLi = document.createElement('li');
    cardDataLi.innerText = projects[i].technologies[j];
    cardDataUl.appendChild(cardDataLi);
  }

  const cardDataDiv = document.createElement('div');
  cardDataDiv.classList.add('project-btn');
  card.appendChild(cardDataDiv);

  const cardDataButton = document.createElement('button');
  cardDataButton.setAttribute('type', 'submit');
  cardDataButton.setAttribute('index-project', projects[i].index);
  cardDataButton.innerText = 'See Project';
  cardDataButton.classList.add('button');

  cardDataDiv.appendChild(cardDataButton);
}

function openPopup() {
  const indexProject = this.getAttribute('index-project');

  const popup = document.querySelector('.popup-modal-bg');
  popup.querySelector('h2').innerText = projects[indexProject].name;
  popup.querySelector('.mobile-image').src = `Projects/mobile_${projects[indexProject].image}`;
  popup.querySelector('.desktop-image').src = `Projects/${projects[indexProject].image}`;
  popup.querySelector('p').innerHTML = projects[indexProject].description;

  const techContainer = popup.querySelector('.language-content');
  techContainer.innerHTML = '';

  for (let i = 0; i < projects[indexProject].technologies.length; i += 1) {
    const techno = document.createElement('li');
    techno.classList.add('lc1');
    techno.innerText = projects[indexProject].technologies[i];
    techContainer.appendChild(techno);
  }
  popup
    .querySelector('.live-button')
    .setAttribute('href', projects[indexProject].version_link);

  popup
    .querySelector('.source-button')
    .setAttribute('href', projects[indexProject].source_link);

  popup.classList.remove('popup-hidden');
}

function closePopup() {
  const popup = document.querySelector('.popup-modal-bg');
  popup.classList.add('popup-hidden');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => element.addEventListener('click', openPopup));

const closeButtons = document.querySelectorAll(
  '.close_popup_mobile, .close_popup_desktop',
);

closeButtons.forEach((element) => element.addEventListener('click', closePopup));

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', closePopup);

const errorMessage = document.getElementById('errorMessage');
errorMessage.addEventListener('submit', (event) => {
  const { email } = errorMessage.elements;
  // const emailAddress = email.value;
  const filter = /^([a-z@.0-9]{0,})+$/;

  if (!filter.test(email.value)) {
    event.preventDefault();
    const message = document.getElementById('email-message');
    message.classList.remove('message-info');

    setTimeout(() => {
      message.classList.add('message-info');
    }, 3000);
  } else { errorMessage.submit(); }
});
