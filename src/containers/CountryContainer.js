import React, { useState, useEffect } from "react";

import { fetchAllCountries } from "../services/country";

import NotFoundCountry from "../components/NotFoundCountry";
import Country from "../components/Country";
import Search from "../components/Search";
import Select from "../components/Select";

import "../assets/css/containers/CountryContainer.css";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries()
    .then((data) => setCountries(data));
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
