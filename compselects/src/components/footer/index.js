import React from 'react';
import './styles.css';
import Facebook from "../../assets/_Facebook.svg"
import Instagram from "../../assets/_Instagram.svg"
import Google from "../../assets/_Google.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
      <div className="footer-top">
        <div className="subscribe-section">
          <p>Subscribe to stay tuned for new product and latest updates. Let's do it!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#refunds">Sales and Refunds</a>
          <a href="#legal">Legal</a>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="Google" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
