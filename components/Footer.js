// Footer.js
// import Mainads from "../images/Mainads.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

import React from "react";
import logo1 from "../images/logo-no-background.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div
        className="footermain"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // alignItems: "center",
          // background: URL(Mainads),
          // gap: "5rem",
          padding: "2rem 1rem 0 1rem",
          // paddingBottom: "0px",
          // marginTop: "3rem",
          // backgroundColor: "white",
          color: "black",
          flexWrap: "wrap",
        }}
      >
        <div
          className="footer-logo-div"
          style={{
            width: "18rem",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <div
            className="footer-section-heading"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <img style={{ height: "3rem" }} src={logo1} alt="" />
          </div>
          <hr style={{ border: "1px solid black" }} />
          <p>
            Rent your perfect car with ease at Rent-O-Car. Our diverse fleet,
            user-friendly platform, and competitive rates ensure a seamless
            booking experience. Drive your adventure with confidence. Reserve
            your vehicle now!
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FaFacebook />
            <FaWhatsapp />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="footer-section" style={{}}>
          <div className=" footer-section-heading" style={{ display: "flex" }}>
            <h4 style={{ textJustify: "none", textAlign: "left" }}>
              Get Premium{" "}
            </h4>
          </div>
          <hr style={{ border: "1px solid black" }} />
          <p>Rental Tips</p>
          <p> One Tap Rent Services</p>
          <p>Membership</p>
          <p>Banner Advertising</p>
          <p>Promote This App</p>
        </div>

        <div className="footer-section">
          <div className=" footer-section-heading" style={{ display: "flex" }}>
            <h4>Information</h4>
          </div>
          <hr style={{ border: "1px solid black" }} />
          <p>Contact Info</p>
          <p>Blog & Articles</p>
          <p>Terms of Service</p>
          <p>Sitemap</p>
          <p>Privacy Policy</p>
        </div>
        {/* <div className="footer-section">
          <div className=" footer-section-heading" style={{ display: "flex" }}>
            <h4>Help & Support</h4>
          </div>
          <hr style={{ border: "1px solid black" }} />
          <p>Live Chat</p>
          <p>FAQ</p>
          <p>How to Stay Safe</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div> */}
      </div>
      <div>
        <p>
          <FaRegCopyright /> Rent-O-Car @ 2023
        </p>

        {/* (私ʍʀSoʍʊ私) */}
      </div>
    </footer>
  );
};

export default Footer;
