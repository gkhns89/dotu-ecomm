import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// Layout Imports
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// Page Imports
import Home from "./pages/HomePage";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
