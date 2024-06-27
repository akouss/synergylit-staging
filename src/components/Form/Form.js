import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// * Style
import "./style.css";

// * Data
const serviceReq = [
  "Court Reporter",
  "Videographer",
  "Interpreter",
  "Videoconference",
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

  const form = useRef(); // Create a ref for the form

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
    console.log("handel sublmit");
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          // Handle successful email sending here (e.g., clear form, show success message)
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          // Handle errors here
        }
      );
  };

  return (
    <Form ref={form} onSubmit={handleSubmit}>
      {/* Form content remains unchanged, just ensure all `name` attributes match your EmailJS template variables */}
      {/* Add or adjust the 'name' attribute for each input field as needed to match your EmailJS template parameters */}
      {/* Services Required Section */}
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
                className="custom-checkbox"
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      {/* Date and Time Section */}
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
            <p className="mb-1">Start Time*</p>
            <Form.Control
              type="time"
              name="startTime"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <p className="mb-1">End Time*</p>
            <Form.Control type="time" name="endTime" onChange={handleChange} />
          </Form.Group>
        </Col>
      </Row>

      {/* Deponent and Location Section */}
      <Form.Group>
        <Form.Control
          placeholder="Deponent*"
          type="text"
          name="deponent"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          placeholder="Location*"
          type="text"
          name="location"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          placeholder="Case Name*"
          type="text"
          name="caseName"
          onChange={handleChange}
        />
      </Form.Group>

      {/* Contact Information Section */}
      <Form.Group>
        <Form.Label>Contact Information</Form.Label>

        <Form.Group>
          <Form.Control
            placeholder="Name*"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Email*"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Phone*"
            type="tel"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Schedule a Deposition
      </Button>
    </Form>
  );
};

export default ServiceForm;
