import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import DarkModeToggle from "../DarkModeToggle";

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
      <Container>
        <Navbar.Brand href="#" className="brand">
          <div className="brand-container">
            <img
              src={logo}
              alt="Synergy Litigation Services logo"
              className="brand-logo"
            />
            <div className="vertical-line"></div>
            <div className="brand-text">
              Synergy
              <br />
              Litigation
              <br />
              Services
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#contact">About Us</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button
              variant="primary"
              as="a"
              href="https://synergylit.reporterbase.com/contact"
              target="_blank"
              rel="noreferrer noopener"
              className="mysls"
            >
              Access My SLS Client Portal
            </Button>
            <DarkModeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
