import searchWhite from "../assets/static/search.png";
import searchBlack from "../assets/static/searchBlack.png";

import leftArrowWhite from "../assets/static/left-arrow-white.png";
import leftArrowBlack from "../assets/static/left-arrow-black.png";
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
  const countryDetailBtn = document.body.querySelector(".btn__container-btn");
  const countryDetailBtnImage = document.body.querySelector(
    "#btn__container-btn-image"
  );
  const borderItems = document.getElementsByClassName("borders-item");

  Array.from(borderItems).forEach((element) => {
    element && element.classList.toggle("border-white");
  });

  if (countryDetailBtn) {
    countryDetailBtn.classList.toggle("btn__container-btn-white");
    countryDetailBtnImage.getAttribute("src") === leftArrowWhite
      ? countryDetailBtnImage.setAttribute("src", leftArrowBlack)
      : countryDetailBtnImage.setAttribute("src", leftArrowWhite);
  }

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
