import React, { useEffect, useState } from "react";
import "../assets/css/components/CountryDetail.css";

const CountryDetail = (props) => {
  const [country, setCountry] = useState([]);

  const { code } = props.match.params;

  const getCountry = async (code) => {
    try {
      const res =
        (await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)) || [];
      const data = (await res.json()) || [];
      console.log(data);
      setCountry(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCountry(code);
  }, []);

  return (
    <div className="countryDetailContainer">
      <div>
        <button>
          <img src="" alt="btnBack" />
          <p>Back</p>
        </button>
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
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </p>
              {country.currencies && (
                <div>
                  <span>Currencies:</span>
                  <p> {country.currencies[0].name}</p>
                </div>
              )}
              <div className="lang">
                <span>Languages:</span>
                {country.languages && (
                  <div>
                    <span>Currencies:</span>
                    {country.languages.map((i, index) => (
                      <p key={index}>{i.name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="lang">
              <span>Border Countries:</span>
              {country.borders && (
                <div>
                  {country.borders.map((i, index) => (
                    <p key={index}>{i}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
