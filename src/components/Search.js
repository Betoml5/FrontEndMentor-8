import React, { useState } from "react";
import searchIcon from "../assets/static/search.png";
import "../assets/css/components/Search.css";

const Search = (props) => {
  const [country, setCoutry] = useState([]);

  const onKeyUp = (e) => {
    if ((e.target.value === "") | undefined | null) {
      const divSearch = document.getElementsByClassName('search')
      divSearch.className = "inputUndefined";
    } else {
      setCoutry(e.target.value);
      if (e.key === "Enter") {
        console.log(country);
        fetchCountry(country).then((data) => {
          props.setCountries(data);
        });
      }
    }
  };

  const fetchCountry = async (country) => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}`
      );
      const countryFetch = await response.json();
      console.log(countryFetch);
      return countryFetch;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="search">
      <img src={searchIcon} alt="searchIcon" />
      <input
        id="inputSearch"
        onKeyUp={onKeyUp}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
