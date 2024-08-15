import React, { useEffect, useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
 const [open, setOpen] = useState(false);

 const handleClick = () => {
    setOpen(!open);
 };

 return (
    
    <nav className="navbar">
      <div className="navlogo">
      <Link to="/" className="navbar-logo"><img src="../../../public/logo.png" alt="logo" /></Link>
      </div>
        <a href="" className="toggle">

          <span className="itemNav"></span>
          <span className="itemNav"></span>
          <span className="itemNav"></span>
          <span className="itemNav"></span>
        </a>
      <div className="navItem">
      <ul className={`navbar-menu ${open ? 'navbar-open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/map" className="navbar-link">Map</Link>
        </li>
        <li className="navbar-item">
          <Link to="/uploadvideo" className="navbar-link">Stream</Link>
        </li>
        <li className="navbar-item">
          <Link to="/form" className="navbar-link">File Complaint</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ComplaintProgress" className="navbar-link">Complaint progress</Link>
        </li>
        <li className="navbar-item contact">
          
          <button className='navbar-contact'>Contact Us</button>
          
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={handleClick}>
        <div className={`hamburger-line ${open ? 'hamburger-open' : ''}`}></div>
        <div className={`hamburger-line ${open ? 'hamburger-open' : ''}`}></div>
        <div className={`hamburger-line ${open ? 'hamburger-open' : ''}`}></div>
      </div>
      </div>
    </nav>
 );
};

export default Navbar;