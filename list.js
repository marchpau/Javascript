const url = "https://rickandmortyapi.com/api/character";
const getAllCharacters = async () => {
  try {
    const respuesta = await fetch(url);
    if (respuesta.status === 200) {
      const res = await respuesta.json();
      const characters = res.results;
      console.log(characters)
      let characterList = "";
      characters.forEach((character) => {
        console.log(character.name)
        characterList += `
					<div class="character">
						<img class="character_image" src="${character.image}">
						<h3 class="character_name">${character.name}</h3>
					</div>
				`;
      });
      document.getElementById("container").innerHTML = characterList;

    } else {
      console.log("Algo ha fallado");
    }
  } catch (error) {
    console.log(error);
  }
};

getAllCharacters();
