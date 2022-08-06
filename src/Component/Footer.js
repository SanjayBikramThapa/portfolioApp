import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
    <div className="footer_background  p-5">
  <footer className="d-flex flex-wrap justify-content-between align-items-center">
    <p className="col-md-4  text-light">&copy; 2022 All rights resoved to Sanjay Bikram Thapa, Inc</p>

    <ul className="nav col-md-4 justify-content-start">
      <li className="nav-item cursor"><Link to="frontHead" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item cursor"><Link to="about" className="nav-link px-2 text-light">About</Link></li>
      <li className="nav-item cursor"><Link to="service" className="nav-link px-2 text-light">Services</Link></li>
      <li className="nav-item cursor"><Link to="portfolio" className="nav-link px-2 text-light">Portfolio</Link></li>
      <li className="nav-item cursor"><Link to="blogs_" className="nav-link px-2 text-light">Blog</Link></li>
      <li className="nav-item cursor"><Link to="contact" className="nav-link px-2 text-light">Contact</Link></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer