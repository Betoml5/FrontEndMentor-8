import React, { useState } from "react";
import searchIcon from "../assets/static/search.png";
import { fetchCountryByName } from "../services/country";
import "../assets/css/components/Search.css";

const Search = (props) => {
  const [country, setCoutry] = useState([]);

  const onKeyUp = (e) => {
    if ((e.target.value === "") | undefined | null) {
      const divSearch = document.getElementsByClassName("search");
      divSearch.className = "inputUndefined";
    } else {
      setCoutry(e.target.value);
      if (e.key === "Enter") {
        console.log(country);
        fetchCountryByName(country).then((data) => {
          props.setCountries(data);
        });
      }
    }
  };
    return (
      <div className="search">
        <img id="searchIcon" src={searchIcon} alt="searchIcon" />
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
