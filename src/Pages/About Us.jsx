// import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import mystorelogo from "../assets/mystore-logo.svg";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div class="about-text">
          <div className="about-img">
            <img src={mystorelogo} alt="Store Logo" />
          </div>
          <div className="about-word">
            <h1>
            Hello! Welcome to our jewelry store. We offer a wide range of beautiful and unique pieces to suit every style and occasion. Whether you're looking for something special for yourself or a special gift for someone else, we've got you covered.
            Our collection includes stunning diamond rings, sparkling necklaces, elegant earrings, and more. We source our materials from the finest suppliers around the world, ensuring that every piece is of the highest quality.
            Our team of experienced jewelers is always available to help you find the perfect piece to match your style and budget. Whether you're looking for something timeless and classic or something more modern and trendy, we have something for everyone.
            So why wait? Come visit us today and discover the perfect piece to add to your collection!
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
