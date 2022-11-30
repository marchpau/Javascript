import { getAllCharacters } from "/info.js";
const charactersList = await getAllCharacters();

console.log(charactersList);

const characters = document.getElementsByClassName("characters_navbar");
for (const character of characters) {
  character.addEventListener("click", () => showCharacters());
}

const Inicio = document.querySelector(".inicio");
Inicio.addEventListener("click", () => {
  const sectionHome = document.getElementsByClassName("home");
  for (const section of sectionHome) {
    section.classList.remove("home-disabled");
  }
  function showAlert() {
    alert("Ya estamos aquí");
  }
  setTimeout(showAlert, 1000);
});

function showCharacters() {
  const sectionHome = document.getElementsByClassName("home");
  for (const section of sectionHome) {
    section.classList.add("home-disabled");
  }
  const sectionList = document.getElementsByClassName("characters");
  for (const character of sectionList) {
    character.classList.remove("characters-disabled");
  }

  charactersList.map((character) => {
    const characterCard = document.createElement("div");
    const characterInfo = document.createElement("p");

    characterInfo.innerText = character.name;
    characterCard.appendChild(characterInfo);
    characterCard.addEventListener("click", () => showDetail(character));

    for (const card of sectionList) {
      card.appendChild(characterCard);
    }
  });
}

function showDetail(character) {

  const characterCard = document.createElement("div");

  const characterPic = document.createElement("img");
  characterPic.src = character.image
  characterCard.appendChild(characterPic);


  const characterInfo = document.createElement("p");

  characterInfo.innerText = character.name;
  characterCard.appendChild(characterInfo);

  

  const characterContainer = document.getElementsByClassName("detail");
  for (const container of characterContainer) {
    container.classList.add("characters-disabled");
    container.appendChild(characterCard);
  }
  const sectionList = document.getElementsByClassName("characters");
  for (const character of sectionList) {
    character.classList.add("characters-disabled");
  }
}
