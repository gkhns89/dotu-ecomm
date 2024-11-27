import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// Layout Imports
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// Page Imports
import Home from "./pages/HomePage";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
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
