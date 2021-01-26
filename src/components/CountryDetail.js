import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCountryByCode } from "../services/country";
import Loader from "./Loader";
import arrowWhite from "../assets/static/left-arrow-white.png";
import "../assets/css/components/CountryDetail.css";

const CountryDetail = (props, active) => {
  const [country, setCountry] = useState([]);

  const { code } = props.match.params;

  const darkModeActive = 'countryDetailContainer';

  useEffect(() => {
    fetchCountryByCode(code).then((data) => {
      setCountry(data);
    });
  }, []);

  return country ? (
    <div className="countryDetailContainer">
      <div className="btn__container">
        <Link to="/">
          <button id="btn__container-btn" className="btn__container-btn">
            <img id="btn__container-btn-image" src={arrowWhite} alt="btnBack" />
            <p>Back</p>
          </button>
        </Link>
      </div>

      <div className="countryDetailContainer__flagndes">
        <div className="countryDetailContainer__flagndes-image">
          <img src={country.flag} alt="CountryFlag" />
        </div>

        <div className="countryDetail-description">
          <div className="countryDetail-description-name">
            <h3>{country.name}</h3>
          </div>
          <div className="countryDetail-description-columns">
            <div className="column">
              <p>
                <span>Native Name: </span> {country.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span> {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>

            <div className="column">
              <p>
                <span>Top Level Domain:</span>
                {country.topLevelDomain}
              </p>

              <p className="lang">
                <span>Currencies:</span>
                {country.currencies && <p> {country.currencies[0].name}</p>}
              </p>

              <p className="lang">
                <span>Languages:</span>
                {country.languages && (
                  <div className="languages">
                    {country.languages.map((i, index) => (
                      <p key={index}>{i.name}</p>
                    ))}
                  </div>
                )}
              </p>
            </div>
          </div>
          <div>
            <p className="lang border-countries">
              <span>Border Countries:</span>
              {country.borders && (
                <div className="borders ">
                  {country.borders.map((i, index) => (
                    <p className="borders-item" key={index}>
                      {i}
                    </p>
                  ))}
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CountryDetail;
