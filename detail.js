let id = 3;
const url = "https://rickandmortyapi.com/api/character/" + id;
// const url = "https://rickandmortyapi.com/api/character/2";

const getCharacterById = async () => {
  try {
    const respuesta = await fetch(url);
    if (respuesta.status === 200) {
      const res = await respuesta.json();
      const character = res;
      console.log(character);
      let characterInfo = `
					<div class="character">
                        <h3 class="character_name">${character.name}</h3>
						<img class="character_image" src="${character.image}">
						<p class="character_info">${character.species} - ${character.gender}</p>
						<p class="character_info">${character.location.name} - ${character.status}</p>
					</div>
				`;
      document.getElementById("container").innerHTML = characterInfo;
    } else {
      console.log("Algo ha fallado");
    }
  } catch (error) {
    console.log(error);
  }
};

getCharacterById();
