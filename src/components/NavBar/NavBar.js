import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

// * Style
import "./style.css";

// * Images
import logo from "../../assets/Logo.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change the number based on when you want to switch styles
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      collapseOnSelect
      className={`navBar ${scrolled ? "" : "top"}`}
      bg="dark"
      data-bs-theme="dark"
      expand="md"
      sticky="top"
    >
      <Navbar.Brand href="#" className="brand">
        <img src={logo} alt="Synergy Litigation Services logo" />
        <div className="brand-text">
          Synergy
          <br />
          Litigation
          <br />
          Services
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-content" />
      <Navbar.Collapse id="navbar-content">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Button
            variant="primary"
            as="a"
            href="https://google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Access MySLS Client Portal
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
