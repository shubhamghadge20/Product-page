import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Header = ({ searchQuery, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <h1 className="brand-name">E-Commerce</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchQuery}
            onChange={onSearchChange}
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="#about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
