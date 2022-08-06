import React from "react";
import "../css/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light header_background">
        <div className="container-fluid ">
        <div className="start fonts">
        <span className="end1">Sanjay</span><span className="middle1">Bikram</span><span className="end2">Thapa</span>
    </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav_fonts" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item cursor">
                <Link className="nav-link" aria-current="page" to="frontHead">HOME</Link>
              </li>
              <li className="nav-item cursor">
                <Link className="nav-link" to="about">ABOUT</Link>
              </li>
              <li className="nav-item cursor">
                <Link className="nav-link" to="service">SERVICES</Link>
              </li>
              <li className="nav-item cursor">
                <Link className="nav-link" to="portfolio">Portfolio</Link>
              </li>
              <li className="nav-item cursor">
                <Link className="nav-link" to="blogs_">BLOG</Link>
              </li>
              <li className="nav-item cursor">
                <Link className="nav-link" to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
