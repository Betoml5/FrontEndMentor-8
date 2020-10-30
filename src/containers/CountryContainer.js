import React from "react";
import Country from "../components/Country";
import '../assets/css/containers/CountryContainer.css'

const CountryContainer = ({ countries }) => {
  return (
    <div className="country__container">
      {
      countries.map((country) => (
        <Country country={country} key={country.alpha2Code} />
      ))
      }
    </div>
  );

  
};

export default CountryContainer;
