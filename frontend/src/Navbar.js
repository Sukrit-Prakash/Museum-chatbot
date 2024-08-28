import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Rename Header.css to Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">National Museum India</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/exhibitions">Exhibitions</Link></li>
          <li><Link to="/visit">Visit</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;