import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./style.css";

// * Data
const serviceReq = [
  "Court Reporter",
  "Realtime Reporter",
  "Videographer",
  "Interpreter",
  "Digital Deposition",
  "Videoconference",
  "Courtroom Playback",
  "Trial Presentation",
];

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    services: [],
    dateOfService: "",
    startTime: "",
    endTime: "",
    deponent: "",
    location: "",
    caseName: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        services: checked
          ? [...prevState.services, value]
          : prevState.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Services Required</Form.Label>
        <div>
          {serviceReq.map((service, idx) => (
            <Form.Check
              key={idx}
              type="checkbox"
              label={service}
              name="services"
              value={service}
              onChange={handleChange}
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Service</Form.Label>
        <Form.Control
          type="date"
          name="dateOfService"
          onChange={handleChange}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>End Time</Form.Label>
            <Form.Control type="time" name="endTime" onChange={handleChange} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>Deponent</Form.Label>
        <Form.Control type="text" name="deponent" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Case Name</Form.Label>
        <Form.Control type="text" name="caseName" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" name="phone" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ServiceForm;
