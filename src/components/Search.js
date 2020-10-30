import React, { useState } from "react";
import searchIcon from "../assets/static/search.png";

const Search = () => {

  const [country, setCoutry] = useState([]);

  const fetchCountry = async (country) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const countryFetch = await response.json();
    console.log(countryFetch);
    return countryFetch;
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
        fetchCountry(country);
    };
  };

  const handleChange = (e) => {
    setCoutry(e.target.value)
  }

  return (
    <div>
      <img src={searchIcon} alt="searchIcon" />
      <input
        onKeyUp={onKeyUp}
        onChange={handleChange}
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Search;
