import { Container, Row, Col } from "react-bootstrap";
import Accordion from "../Accordion";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure you have imported Bootstrap Icons

import "./style.css"; // Ensure you import your CSS file

// * Data
import { heading, highlights } from "../../data/services";

function Services() {
  return (
    <Container className="services">
      <div id="services" className="anchor-section" />
      <Row>
        <h1 className="title">{heading}</h1>
      </Row>
      <Row>
        <Col sm>
          <div>
            {highlights.map((item, idx) => (
              <div key={idx} className="item">
                <i className={`icon bi ${item.icon}`}></i>
                <h4 className="desc">{item.desc}</h4>
              </div>
            ))}
          </div>
        </Col>
        <Col sm>
          <Accordion />
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
