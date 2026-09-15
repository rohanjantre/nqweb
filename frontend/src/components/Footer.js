import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <span className="brand-mark">N</span>
            <span className="brand-name">
              Noviq<span className="brand-name-accent">Web</span>
            </span>
          </span>
          <p>We design and build websites that turn visitors into clients.</p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href="mailto:rohanjantre123@gmail.com">rohanjantre123@gmail.com</a>
          <span>Mon &ndash; Sat, 10am &ndash; 7pm IST</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} NoviqWeb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
