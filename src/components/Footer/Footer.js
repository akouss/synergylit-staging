import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";

//* SVG
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
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
        <Col md={4} className="container order-2">
          <p className="brand">SYNERGY LITIGATION SERVICES</p>
        </Col>
        <Col md={4} className="social-container order-1">
          <a
            href="https://www.facebook.com/hector.valerio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={facebook} className="social" alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/hectorvalerio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedin} className="social" alt="linkedin" />
          </a>
          <a
            href="https://github.com/hvaleri0"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={github} className="social" alt="github" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
