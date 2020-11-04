import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/components/Country.css";

const Country = ({ country }) => {
  return (
    <div className="country">
      <div className="country__image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="country__data">
        <Link to={`/country/${country.alpha2Code}`}>
          <h3>{country.name}</h3>
        </Link>
        <p>
          <span>Population:</span> {country.population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
