import React, { useState } from "react";
import "../assets/css/components/Select.css";

const Select = (props) => {
  const [option, setOption] = useState("");

  const getData = async (region) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const data = await response.json();
    return data;
  };

  const onChange = (e) => {
    getData(e.target.value).then((res) => {
      props.setCountries(res);
    });
  };

  return (
    <>
      <select name="regions" onChange={onChange}>
        <option disabled={true} selected={true}>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};

export default Select;
