import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Searchbar from "./comp/searchbar";
import Test from "./comp/test";
import Details from "./comp/details";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Searchbar} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/details/:id" component={Details} />
      </Router>
    );
  }
}

export default App;
