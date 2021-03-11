import React from "react";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import TeamCard from "./Components/TeamCard/TeamCard";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team/:teamLeague">
            <TeamCard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
