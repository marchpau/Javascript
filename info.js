const getAllCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character";
      try {
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
          const res = await respuesta.json();
          const characters = res.results;
          return characters

        } else {
          console.log("Algo ha fallado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    export { getAllCharacters }