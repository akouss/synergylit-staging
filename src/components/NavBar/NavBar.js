/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

// * Style
import "./style.css";

// * Images
import logo from "../../assets/Logo.png";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      className="navBar"
      expand="md"
      fixed="top"
      // sticky="top"
    >
      <Navbar.Toggle aria-controls="navbar-content" />
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="300"
          className="d-inline-block align-top"
          alt="Synergy Litigation Services logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse id="navbar-content">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <a
          href="https://google.com"
          className="download"
          target="_blank"
          rel="noreferrer noopener"
        >
          Access MySLS Client Portal
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
