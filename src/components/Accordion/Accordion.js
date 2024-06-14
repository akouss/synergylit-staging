import { Accordion } from "react-bootstrap";

//* Data
import { services } from "../../data/services";

// * Style
import "./style.css";

function CustomAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      {services.map((item, index) => (
        <Accordion.Item eventKey={item.id} key={item.id}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
