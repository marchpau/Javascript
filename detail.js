import { getAllCharacters } from "/info.js";
const showCharactersDetail = await getAllCharacters();

function showDetail() {
    const List = document.querySelector(".list");
    List.addEventListener("click", () => {
      document.querySelector(".home").style.display = "none";
      document.querySelector(".list").style.display = "none";
      document.querySelector(".detail").style.display = "flex";
    });

    const Detail = document.querySelector(".detail");
    Detail.addEventListener("click", () => {
      document.querySelector(".detail").style.display = "flex";
    });
  
    let characterCard = "";
    showCharactersDetail.forEach((character) => {
      characterCard += `
                            <div class="character_container">
                                <img class="character_image" src="${character.image}">
                                <h3 id="${character.id}" class="character_name">${character.name}</h3>
                            </div>
                        `;
  
    });
    document.getElementById("list").innerHTML = characterCard;
  }
  
  showDetail();



