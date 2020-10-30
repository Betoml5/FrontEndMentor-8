import React from 'react';
import moonIcon from '../assets/static/moon.png';

const Header = () => {
    return(
        <header>
            <div>
                <h2>Where in the world?</h2>
            </div>
            <div>
                <img src={moonIcon} alt="moonIcon"/>
                <h3>Dark Mode</h3>
            </div>
        </header>
    );
}

export default Header;