import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import "../ContactUs.css";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartSlice";
import { items } from "./Products";

function ContactUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="contactUs" style={{zIndex: 1}}>
        <div className="title">
          <h2>Get In Touch</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Send a Message</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Gmail</span>
                    <input type="text" placeholder="mystore1234@gmail.com" />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <ion-icon name="location"></ion-icon>
                </span>
                <p>No 2, 4 Alagbole Rd, Ojodu 112107, Lagos, Ogun State</p>
              </div>
              <div>
                <span>
                  <ion-icon name="mail"></ion-icon>
                </span>
                <a href="mailto:mystore1234@gmail.com">
                  mystore1234@gmail.com
                </a>
              </div>
              <div>
                <span>
                  <ion-icon name="call"></ion-icon>
                </span>
                <a href="tel:+2348061442170">+234 806 144 2170</a>
              </div>

              <ul className="sci">
                <li>
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8814280991787!2d3.3499683742653126!3d6.66161392154442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9581bd44d6b1%3A0xc1ed7cb693c296e1!2sAPTECH%20Computer%20Education%20Center%20-%20Ojodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1687481043710!5m2!1sen
                !2sng"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
