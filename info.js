const getAllCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character";
      try {
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
          const res = await respuesta.json();
          const characters = res.results;
          console.log(characters);
          let characterList = "";
          characters.forEach((character) => {
            console.log(character.name);
            characterList += `
                        <div class="character_container">
                            <img class="character_image" src="${character.image}">
                            <h3 id="${character.id}" class="character_name">${character.name}</h3>
                        </div>
                    `;
          });
          document.getElementById("container").innerHTML = characterList;
          let characterLink = document.querySelectorAll("h3");
          for (let link of characterLink) {
            link.addEventListener("click", () => {
              const characterList = document.querySelector(".container");
              characterList.style.display = "none";
            });
          }
        } else {
          console.log("Algo ha fallado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    export { getAllCharacters }