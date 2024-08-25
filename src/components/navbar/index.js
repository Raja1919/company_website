import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import header styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>Fabrication Co.</h1>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        ☰
      </button>
      <nav>
        <ul className={isOpen ? "show" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
