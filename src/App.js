import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Loader from './components/Loader'
import CountryContainer from "./containers/CountryContainer";
import Layout from "./components/Layout";
import CountryDetail from "./components/CountryDetail";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={CountryContainer} />
        <Route exact path="/country/:code" component={CountryDetail} />
        <Route exact path="/loader" component={Loader} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
