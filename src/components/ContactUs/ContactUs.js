import React from "react";
import ContactForm from "./ContactForm";
import "./style.css";

// * Data
import { contact } from "../../data/services";

const { address, phone, email } = contact;

const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
        <div className="overlay"></div>
        <div className="contact-content">
          <ContactForm />
          <p>
            Office: {`${address.street},`}
            <br /> {`${address.city}, ${address.state} ${address.zipcode}`}
          </p>
          <p>Phone: {`${phone}`}</p>
          <p>Email: {`${email}`}</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
