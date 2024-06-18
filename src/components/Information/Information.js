import { Container, Row, Col } from "react-bootstrap";
import ContactUs from "../ContactUs";
import Form from "../Form";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css";

// * Data
const heading = "Information";

function Information() {
  return (
    <Container className="information">
      <Row>
        <h1 className="title">{heading}</h1>
      </Row>
      <Row>
        <Col sm>
          <div id="schedule" className="anchor-section" />
          <h3 className="subtitle">Schedule Today!</h3>
          <Form />
        </Col>
        <Col sm>
          <div id="contact" className="anchor-section" />
          <h3 className="subtitle">Contact Us</h3>
          <ContactUs />
        </Col>
      </Row>
    </Container>
  );
}

export default Information;
