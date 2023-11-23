// Navbar.js

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"; // Import the CSS file
import logo from "./logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Navbar.Brand href="#" className="navbar-brand">
        <img
          src={logo}
          alt="logo"
          height="40" // Set the height of your logo
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Gallery
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            <Link to="/About">About</Link>
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
