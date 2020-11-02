import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Select from "./components/Select";
import "./App.css";

import CountryContainer from "./containers/CountryContainer";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={CountryContainer} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
