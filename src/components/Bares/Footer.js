import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best online learning<br></br> experience for students around the world.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@learnonline.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookSquare id='icon'/></a>
            <a href="#"><AiFillInstagram id='icon'/></a>
          <a href="#"><FaTwitter id='icon' /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Learn Online. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
