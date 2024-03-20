import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-section-1">
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#investor">Investor Relations</a>
        </li>
        <li>
          <a href="#ways">Ways To Watch</a>
        </li>
        <li>
          <a href="#netflix">Netflix Originals</a>
        </li>
      </ul>
      <ul className="footer-section-2">
        <li>
          <a href="#faq">Help Center</a>
        </li>
        <li>
          <a href="#investor">Jobs</a>
        </li>
        <li>
          <a href="#ways">Terms Of Use</a>
        </li>
        <li>
          <a href="#corporate">Contact Us</a>
        </li>
      </ul>
      <ul className="footer-section-3">
        <li>
          <a href="#faq">Account</a>
        </li>
        <li>
          <a href="#investor">Redeem Gift Cards</a>
        </li>
        <li>
          <a href="#ways">Privacy</a>
        </li>
        <li>
          <a href="#corporate">Speed Test</a>
        </li>
      </ul>
      <ul className="footer-section-4">
        <li>
          <a href="#faq">Buy Gift Cards</a>
        </li>
        <li>
          <a href="#investor">Media Center</a>
        </li>
        <li>
          <a href="#ways">Cookie Preferences</a>
        </li>
        <li>
          <a href="#corporate">Customer Support</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
