import React, { useEffect, useState } from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import CountryContainer from "./containers/CountryContainer";
import "./App.css";
import Search from "./components/Search";
import Header from './components/Header';

function App() {

  <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path='/' component={CountryContainer}/>
      </Switch>
    </Header>
  </BrowserRouter>


  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    // console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Search />
      <CountryContainer countries={countries} />
    </div>
  );
}

export default App;
