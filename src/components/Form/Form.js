import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// * Component
import Toast from "../Toast";

// * Style
import "./style.css";

// * Data
const serviceReq = [
  "Court Reporter",
  "Videographer",
  "Interpreter",
  "Videoconference",
];

const initialFormData = {
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
};

const ServiceForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const form = useRef(); // Create a ref for the form

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        services: checked
          ? [...prevState.services, value]
          : prevState.services.filter((service) => service !== value),
      }));
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        attachment: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    // Clear the error for a field when the user starts correcting it
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
      // Proceed with form submission
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID,
          {
            attachments: [
              {
                name: formData.attachment.name,
                file: formData.attachment,
              },
            ],
          }
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            handleShowToast("Email successfully sent!", "dark");
            setFormData(initialFormData); // Reset the form data
            setErrors({}); // Clear any errors if needed
            form.current.reset();
            // Optionally reset form here or give further success feedback
          },
          (error) => {
            console.log("Failed to send email.", error.text);
            handleShowToast("Failed to send email. Please try again.", "dark");
            // Optionally handle sending errors here
          }
        );
    }
  };

  // Validates each field and returns an object with errors
  const validateForm = () => {
    let errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.phone) errs.phone = "Phone is required";
    if (!formData.dateOfService)
      errs.dateOfService = "Date of service is required";
    if (!formData.startTime) errs.startTime = "Start time is required";
    if (!formData.endTime) errs.endTime = "End time is required";
    if (!formData.deponent) errs.deponent = "Deponent is required";
    if (!formData.location) errs.location = "Location is required";
    if (!formData.caseName) errs.caseName = "Case name is required";
    return errs;
  };

  return (
    <>
      <Form ref={form} onSubmit={handleSubmit}>
        {/* Form content remains unchanged, just ensure all `name` attributes match your EmailJS template variables */}
        {/* Add or adjust the 'name' attribute for each input field as needed to match your EmailJS template parameters */}
        {/* Services Required Section */}
        <Form.Group>
          <Form.Label>Services Required</Form.Label>
          <p className="mb-1">Select all that apply:</p>
          <Row className="mb-2">
            {serviceReq.map((service, idx) => (
              <Col sm={12} lg={6} key={idx}>
                <Form.Check
                  key={idx}
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
            isInvalid={!!errors.dateOfService}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dateOfService}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Attach File (max ~ 500Kb)</Form.Label>
          <Form.Control type="file" name="attachment" onChange={handleChange} />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group>
              <p className="mb-1">Start Time*</p>
              <Form.Control
                type="time"
                name="startTime"
                onChange={handleChange}
                isInvalid={!!errors.startTime}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startTime}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <p className="mb-1">End Time*</p>
              <Form.Control
                type="time"
                name="endTime"
                onChange={handleChange}
                isInvalid={!!errors.endTime}
              />
              <Form.Control.Feedback type="invalid">
                {errors.endTime}
              </Form.Control.Feedback>
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
            isInvalid={!!errors.deponent}
          />
          <Form.Control.Feedback type="invalid">
            {errors.deponent}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Location*"
            type="text"
            name="location"
            onChange={handleChange}
            isInvalid={!!errors.location}
          />
          <Form.Control.Feedback type="invalid">
            {errors.location}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            placeholder="Case Name*"
            type="text"
            name="caseName"
            onChange={handleChange}
            isInvalid={!!errors.caseName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.caseName}
          </Form.Control.Feedback>
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
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Email*"
              type="email"
              name="email"
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Phone*"
              type="tel"
              name="phone"
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Schedule a Deposition
        </Button>
      </Form>
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        toastMessage={toastMessage}
        toastType={toastType}
      />
    </>
  );
};

export default ServiceForm;
