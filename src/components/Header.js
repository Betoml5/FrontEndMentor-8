import React from "react";
import moonIcon from "../assets/static/moon.png";
import "../assets/css/components/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__container-h2">
          <h2>Where in the world?</h2>
        </div>
        <div className="header__container-dark">
          <img src={moonIcon} alt="moonIcon" />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
