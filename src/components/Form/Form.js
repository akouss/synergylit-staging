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
        <p className="mb-1">Select all that apply:</p>
        <Row className="mb-2">
          {serviceReq.map((service, idx) => (
            <Col key={idx} sm={12} lg={6}>
              <Form.Check
                type="checkbox"
                label={service}
                name="services"
                value={service}
                onChange={handleChange}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Service</Form.Label>
        <Form.Control
          type="date"
          name="dateOfService"
          onChange={handleChange}
        />

        <Row>
          <Col>
            <p className="mb-1">Start Time*</p>
            <Form.Control
              type="time"
              name="startTime"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p className="mb-1">End Time*</p>
            <Form.Control type="time" name="endTime" onChange={handleChange} />
          </Col>
        </Row>

        <Form.Control
          placeholder="Deponent*"
          type="text"
          name="deponent"
          onChange={handleChange}
        />

        <Form.Control
          placeholder="Location*"
          type="text"
          name="location"
          onChange={handleChange}
        />

        <Form.Control
          placeholder="Case Name*"
          type="text"
          name="caseName"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Information</Form.Label>

        <Form.Control
          placeholder="Name*"
          type="text"
          name="name"
          onChange={handleChange}
        />

        <Form.Control
          placeholder="Email*"
          type="email"
          name="email"
          onChange={handleChange}
        />

        <Form.Control
          placeholder="Phone*"
          type="tel"
          name="phone"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Schedule a Deposition
      </Button>
    </Form>
  );
};

export default ServiceForm;
