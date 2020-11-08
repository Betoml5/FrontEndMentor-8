import React from "react";
import {Link} from 'react-router-dom'
import moonIcon from "../assets/static/moon.png";
import darkMode from '../utils/index';

import "../assets/css/components/Header.css";

const handleDarkMode = (e) => {
  e.preventDefault();
};


const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__container-h2">
        <Link to="/">
          <h2>Where in the world?</h2>
        </Link>
        </div>
        <div className="header__container-dark">
          <img id="moonImage" src={moonIcon} alt="moonIcon" />
          <h3 onClick={handleDarkMode}>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
