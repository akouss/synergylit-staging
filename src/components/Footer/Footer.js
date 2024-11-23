import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";

//* SVG
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col md={4} className="container order-3">
          <p className="text">
            Copyright {new Date().getFullYear()} &copy; All rights reserved
          </p>
        </Col>
        <Col md={4} className="container order-3">
          <a
            href="https://drive.google.com/file/d/1fIKNU7biVNSx7hBPjknUi2djMrBiH1yC/view"
            target="_blank"
            rel="noreferrer noopener"
            className="social"
          >
            <p className="text">Terms & Conditions</p>
          </a>
        </Col>
        <Col md={4} className="container order-2">
          <p className="brand">SYNERGY LITIGATION SERVICES</p>
        </Col>
        <Col md={4} className="social-container order-1">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="social"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
