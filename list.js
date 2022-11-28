import { getAllCharacters } from "/info.js";

function showHome() {
  const homeInfo = `
      <div class="logo">
      <img src="https://hips.hearstapps.com/vidthumb/images/rick-y-morty-1626783132.jpg" alt="Logo Rick_and_Morty">
      </div>
      <div class="home_container">
      <p class="home_info">Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación 
      para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. 
      La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes 
      pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Justin Roiland, 
      el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie 
      también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.</p>
      </div>
    `;
  document.getElementById("home").innerHTML = homeInfo;
  document.querySelector(".container").style.display = "none";
}

showHome();

const Home = document.querySelector(".inicio");
Home.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".home").style.display = "flex";
  function showAlert() {
    alert("Ya estamos aquí");
  }
  setTimeout(showAlert, 1000);
});

const List = document.querySelector(".lista");
List.addEventListener("click", () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  getAllCharacters();
});
