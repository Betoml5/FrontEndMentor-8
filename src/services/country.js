const BASE_API = `https://restcountries.eu/rest/v2`
const BASE_API_ALL = `https://restcountries.eu/rest/v2/all`
const BASE_API_NAME = `https://restcountries.eu/rest/v2/name`
const BASE_API_REGION = `https://restcountries.eu/rest/v2/region`
const BASE_API_CODE = `https://restcountries.eu/rest/v2/alpha`


const fetchCountryByName = async (countryName) => {
        try {
          const response = await fetch(`${BASE_API_NAME}/${countryName}`);
          const data = await response.json() || [];
          return data;
        } catch (error) {
          console.log(error);
        }
}

const fetchCountryByCode = async(code) => {
    try {
        const response = await fetch(`${BASE_API_CODE}/${code}`) || [];
        const data = await response.json() || [];
        return data;
    } catch (error) {
        
    }
}

const fetchCountryByRegion = async (region) => {
    try {
        const response = await fetch(`${BASE_API_REGION}/${region}`);
        const data = await response.json();
        return data;
    
    } catch (error) {
        console.log(error)
    }
}

const fetchAllCountries = async () => {
    try {
        const response = await fetch(BASE_API_ALL);
        const data = await response.json() || [];
        return data;
    } catch (error) {
        console.log(error);
    }
}

export { fetchCountryByName, fetchAllCountries, fetchCountryByCode, fetchCountryByRegion };



