import { getAllCharacters } from "/info.js";
const showCharactersDetail = await getAllCharacters();

function showDetail() {
  showCharactersDetail.map((character) => {
    character.addEventListener("click", () => {
        console.log(character.id)
    });
  });

  let characterLink = document.querySelectorAll("h3");
  for (let link of characterLink) {
    link.addEventListener("click", () => {
        console.log(character.id)
      const characterList = document.querySelector(".list");
      characterList.style.display = "none";
    });
  }
}

showDetail();
