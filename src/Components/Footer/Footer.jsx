import React from "react";
import "./footer.css";
import { CiFacebook,CiInstagram,CiLinkedin,CiTwitter,CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <span>Sign up for news letter: </span>
        <input type="email" placeholder="Enter email address"/>
      </div>

      <div className="social-media">
        <CiFacebook className="icon"/>
        <CiInstagram className="icon"/>
        <CiLinkedin className="icon"/>
        <CiTwitter className="icon"/>
        <CiYoutube className="icon"/>
      </div>

      <div className="last-section">
        <p>© 2024 Copyright -  news.com</p>
      </div>
    </div>
  );
};

export default Footer;
