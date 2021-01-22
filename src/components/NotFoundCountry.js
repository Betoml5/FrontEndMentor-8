import React from "react";
import { fetchAllCountries } from "../services/country";
import "../assets/css/components/NotFoundCountry.css";

const NotFoundCountry = (props) => {
  const onClick = () => {
    fetchAllCountries().then((data) => {
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
