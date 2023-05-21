import React from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import Carts from "./components/Carts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header /><br></br>
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/details/:id" element={<ProductDetails />}></Route>
          <Route path="/details" element={<ProductDetails />}></Route>
          <Route path="/carts" element={<Carts />}></Route>
          <Route>404: Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
