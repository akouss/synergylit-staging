/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

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
      sticky="top"
    >
      <Navbar.Brand href="#" className="brand">
        <img src={logo} alt="Synergy Litigation Services logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-content" />
      <Navbar.Collapse id="navbar-content">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          as="a"
          href="https://google.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Access MySLS Client Portal
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
