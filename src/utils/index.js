import searchWhite from "../assets/static/search.png";
import searchBlack from "../assets/static/searchBlack.png";
import moonIcon from "../assets/static/moon.png";
import blackMoon from "../assets/static/blackMoon.png";

const darkMode = () => {
  document.body.classList.toggle("bodyWhite");
  const countries = document.body.getElementsByClassName("country");
  const texts = document.body.getElementsByTagName("p");
  const h3 = document.body.getElementsByTagName("h3");
  const h2 = document.body.getElementsByTagName("h2");
  const search = document.body.getElementsByClassName("search");
  const select = document.body.getElementsByTagName("select");
  const image = document.body.querySelector("#moonImage");
  const imageSearch = document.body.querySelector("#searchIcon");

  

  if (imageSearch) {
    imageSearch.getAttribute("src") === searchWhite
      ? imageSearch.setAttribute("src", searchBlack)
      : imageSearch.setAttribute("src", searchWhite);
  }

  if (image) {
    image.getAttribute("src") === moonIcon
      ? image.setAttribute("src", blackMoon)
      : image.setAttribute("src", moonIcon);
  }



  for (let i = 0; i < select.length; i++) {
    select[i].classList.toggle("bodyWhite");
    select[i].classList.toggle("textWhite");
  }

  for (let i = 0; i < search.length; i++) {
    search[i].classList.toggle("bodyWhite");
  }

  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.toggle("textWhite");
  }

  for (let i = 0; i < h3.length; i++) {
    h3[i].classList.toggle("textWhite");
  }
  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.toggle("textWhite");
  }
  for (let i = 0; i < countries.length; i++) {
    countries[i].classList.toggle("bodyWhite");
  }
};

export default darkMode;
