import React, { useState } from 'react';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import './topbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky-top">
      <nav id="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">Your Logo</a>
          </div>
          <ul className="menu">
            <li className="dropdown">
              <a href="#" className="dropdown-btn" onClick={toggleDropdown}>
                Consultation
              </a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#">Engineering Admission</a>
                  <a href="#">Medical Admission</a>
                  <a href="#">Management Admission</a>
                </div> 
              )}
            </li>
            <li><a href="#">Direct Admission</a></li>
            <li><Link to="/contactus">Contact Us</Link></li> {/* Use Link component for "Contact Us" */}
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
