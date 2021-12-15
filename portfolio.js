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

// WINDOWS POPUP
const project1 = {
  index: 0,
  name: "Projet 1",
  technologies: ["H1", "H2", "H3", "Html"],
  image: "portfolio.png",
  description: "lorem",
  version_link: "version link",
  source_link: "source link",
};
const project2 = {
  index: 1,
  name: "Project 2",
  technologies: ["Ruby on Rails", "CSS", "Javascript", "Html"],
  image: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: "",
  source_link: "",
};
const project3 = {
  index: 2,
  name: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on Rails", "CSS", "Javascript", "Html"],
  image: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: "",
  source_link: "",
};
const project4 = {
  index: 3,
  name: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on Rails", "CSS", "Javascript", "Html"],
  image: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: "",
  source_link: "",
};
const project5 = {
  index: 4,
  name: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on Rails", "CSS", "Javascript", "Html"],
  image: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: "",
  source_link: "",
};
const project6 = {
  index: 5,
  name: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on Rails", "CSS", "Javascript", "Html"],
  image: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: "",
  source_link: "",
};

const projects = [project1, project2, project3, project4, project5, project6];
<div class="project-card">
          <img src="IMG/Plaholder.png" alt="Project image" />
          <div class="card-title">
            <h4>Multi-Post Stories Gain+Glory</h4>
          </div>
          <ul class="project-technologies">
            <li>Ruby on rails</li>
            <li>JavaScript</li>
            <li>css</li>
            <li>html</li>
          </ul>
          <div class="project-btn">
            <button type="button">See Project</button>
          </div>
        </div>

for (let i = 0; i < projects.length; i += 1) {
  const cardList = document.querySelector(".project-container");
  const card = document.createElement("div");
  card.classList.add("project-card");
  cardList.appendChild(card);

  const cardImage = document.createElement("img");
  cardImage.setAttribute('src','IMG/Plaholder.png')
  cardImage.setAttribute('alt','Project image')
  card.appendChild(cardImage);

  const cardData = document.createElement("div");
  cardData.classList.add("card-title");
  card.appendChild(cardData);

  const cardDataH3 = document.createElement("h4");
  cardDataH3.innerHTML = projects[i].name;
  cardData.appendChild(cardDataH3);

  const cardDataUl = document.createElement("ul");
  cardDataUl.classList.add("project-technologies");
  cardData.appendChild(cardDataUl);

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const cardDataLi = document.createElement("li");
    cardDataLi.innerText = projects[i].technologies[j];
    cardDataUl.appendChild(cardDataLi);
  }

  const cardDataDiv = document.createElement("div");
  cardDataDiv.classList.add("project-btn");
  cardData.appendChild(cardDataDiv);

  const cardDataButton = document.createElement("button");
  cardDataButton.setAttribute("type", "submit");
  cardDataButton.setAttribute("index-project", projects[i].index);
  cardDataButton.innerText = "See Project";
  cardData.appendChild(cardDataButton);
}

function openPopup() {
  const indexProject = this.getAttribute("index-project");

  const popup = document.querySelector(".popup-modal-bg");
  popup.querySelector("h2").innerText = projects[indexProject].name;
  popup.querySelector(".mobile-image").src =
    "projects/mobile_" + projects[indexProject].image;
  popup.querySelector(".desktop-image").src =
    "projects/" + projects[indexProject].image;
  popup.querySelector("p").innerHTML = projects[indexProject].description;

  const techContainer = popup.querySelector(".language-content");
  for (let i = 0; i < projects[indexProject].technologies.length; i += 1) {
    let techno = document.createElement("li");
    techno.classList.add("lc1");
    techno.innerText = projects[indexProject].technologies[i];
    techContainer.appendChild(techno);
  }
  popup
    .querySelector(".live-button")
    .setAttribute("href", projects[indexProject].version_link);

  popup
    .querySelector(".source-button")
    .setAttribute("href", projects[indexProject].source_link);

  popup.classList.remove("popup-hidden");
}

function closePopup() {
  const popup = document.querySelector(".popup-modal-bg");
  popup.classList.add("popup-hidden");
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((element) => element.addEventListener("click", openPopup));

const closeButtons = document.querySelectorAll(
  ".close_popup_mobile, .close_popup_desktop"
);

closeButtons.forEach((element) =>
  element.addEventListener("click", closePopup)
);
