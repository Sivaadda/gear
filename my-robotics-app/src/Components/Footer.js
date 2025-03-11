import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <img src="path_to_your_logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-company-info">My Website is dedicated to providing top-notch services and innovative solutions. Transforming the world with automation and technology.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-links-column">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
            </div>
            <div className="footer-links-column">
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/career">Career</Link>
            </div>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-paragraph">
        <p>Transforming the world with innovation and technology.</p>
        <p>© 2025 Gear. All rights reserved. 
            </p>
      </div>
    </footer>
  );
}

export default Footer;
