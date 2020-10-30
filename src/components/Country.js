import React, { useEffect, useState } from "react";
import '../assets/css/components/Country.css'

const Country = ({ country }) => {


  // const [dataCountry, setDataCountry] = useState([])

  // const getData = async() => {
  //     const response = await fetch('https://restcountries.eu/rest/v2/name/mexico')
  //     const data = await response.json(); // Con esto obtenemos el primer objeto del array, para no tener que usar esto "dataCountry[0]";
  //     setDataCountry(data);
  // }

  // useEffect(() => {
  //     getData();

  // }, [])

  return (
    <div className="country">
      <div className="country__image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="country__data">
        <h3>{country.name}</h3>
        <p><span>Population:</span> {country.population}</p>
        <p><span>Region:</span> {country.region}</p>
        <p><span>Capital:</span> {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
