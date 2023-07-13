import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import SpecialOffers from "./Pages/Special Offers";
import NewArrival from "./Pages/New Arrival";
import ContactUs from "./Pages/Contact Us";
import AboutUs from "./Pages/About Us";
import SpecialProduct from "./Pages/SpecialProduct";
import NewArrivalProduct from "./Pages/NewArrivalProduct";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/special/products/:id" element={<SpecialProduct />} />
          <Route path="/new/products/:id" element={<NewArrivalProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/new-arrivals" element={<NewArrival />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
