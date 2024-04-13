import React from "react";
import "./Footer.css";
import fb from "../../assets/images/fb.png";
import youtube from "../../assets/images/youtube.png";
import linkedIn from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="marabfoods_footer">
      <div className="marabfoods_footer-links">
        <div className="marabfoods_footer-links-div">
          <h4>NAVIGATIONS</h4>
          <a href="/navigations">Home</a>
          <a href="/navigations">About Us</a>
          <a href="/navigations">Contacts </a>
          <a href="/navigations">Help</a>
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>RESOURCES</h4>
          <a href="/resources">Products</a>
          <a href="/resources">Testimonials</a>
          <a href="/resources">Return and Refund Policy</a>
          <a href="/resources">Promotions</a> 
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>PARTERNERS</h4>
          <a href="/employer">DIANA SWISH</a>
          <a href="/employer">ATÏNAD et CO</a>
          <a href="/employer">GERALDOAgro</a>
          <a href="/employer">LARISSAAgro</a>
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>GET CONNECTED</h4>
          <div className="get-connected">
            <img src={fb} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedIn} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="marabfoods_footer-below">
        <div className="marabfoods_footer-copyright">
          @2024 Marabfoods Private Limited. All Rights Reserved
        </div>
        <div className="marabfoods_footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy </a>
          <a href="/security">Security </a>
          <a href="/cookie"> Cookie Declaration </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
