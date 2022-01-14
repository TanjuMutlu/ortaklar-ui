import React from "react";
import "./styles.css";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Referances from "./Pages/Referances";
import Brands from "./Pages/Brands";
import Products from "./Pages/Products";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail";
import data from './data/ProductsData';

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/product/:id"
            render={(props) => <ProductDetail data={data} {...props} />}
          />

          <Route exact from="/" render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route
            exact
            path="/brands"
            render={(props) => <Brands {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/products"
            render={(props) => <Products data={data} {...props} />}
          />
          <Route
            exact
            path="/referances"
            render={(props) => <Referances {...props} />}
          />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
