import React, { useState } from "react";
import {fetchCountryByRegion} from '../services/country';
import "../assets/css/components/Select.css";

const Select = (props) => {
  const [option, setOption] = useState("");

  const onChange = (e) => {
    fetchCountryByRegion(e.target.value).then((res) => {
      props.setCountries(res);
    });
  };

  return (
    <>
      <select name="regions" onChange={onChange}>
        <option disabled={true}>
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
