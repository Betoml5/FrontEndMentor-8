import React from "react";
import "../assets/css/components/NotFoundCountry.css";

const NotFoundCountry = (props) => {
  const API = "https://restcountries.eu/rest/v2";

  const getData = async (api) => {
    const response = await fetch(`${api}/all`);
    const data = await response.json();
    return data;
  };

  const onClick = () => {
    getData(API).then((data) => {
      props.setCountries(data);
    });
  };

  return (
    <>
      <h3>Busca otro pais o vuelve al inicio</h3>
      <button className="goBack" onClick={onClick}>
        Volver al inicio
      </button>
      ;
    </>
  );
};

export default NotFoundCountry;
