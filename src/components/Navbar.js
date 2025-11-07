import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
