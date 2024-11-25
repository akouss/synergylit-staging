import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// * Component
import Toast from "../Toast";

// * Data
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleShowToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            handleShowToast("Email successfully sent!", "dark");
            setFormData(initialFormData);
            setErrors({}); // Clear any errors if needed
            form.current.reset();
          },
          (error) => {
            console.log("Failed to send email.", error.text);
            handleShowToast(error.text, "dark");
          }
        );
    }
  };

  const validateForm = () => {
    let errs = {};
    if (!formData.firstName) errs.firstName = "First name is required";
    if (!formData.lastName) errs.lastName = "Last name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  return (
    <div>
      <Form className="mt-5" ref={form} onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} lg={6}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      {/* Disclosure Text */}
      <div style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "#6c757d" }}>
        By providing a telephone number and submitting this form, you consent to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
      </div>
      </Form>
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        toastMessage={toastMessage}
        toastType={toastType}
      />
    </div>
  );
};

export default ContactForm;
