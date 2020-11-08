import React, { useState, useEffect } from "react";
import "../assets/css/containers/CountryContainer.css";

import NotFoundCountry from "../components/NotFoundCountry";
import Country from "../components/Country";
import Search from "../components/Search";
import Select from "../components/Select";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);

  const API = "https://restcountries.eu/rest/v2";

  const getData = async (api) => {
    const response = await fetch(`${api}/all`);
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <>
      <div className="country__container">
        <div className="country__container-search">
          <Search setCountries={setCountries} />
        </div>

        <div className="country__container-select">
          <Select setCountries={setCountries} />
        </div>

        {countries.length > 0 ? (
          countries.map((country) => (
            <Country country={country} key={country.alpha2Code} />
          ))
        ) : (
          <NotFoundCountry setCountries={setCountries} />
        )}
      </div>
    </>
  );
};

export default CountryContainer;
