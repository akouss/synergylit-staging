import React from "react";
import ContactForm from "./ContactForm";
import "./style.css";

// * Data
const contact = {
  address: {
    street: "325 S. Old Woodward Suite 200",
    city: "Birmingham",
    state: "MI",
    zipcode: "48009",
  },
  phone: "(248)238-8262",
  email: "admin@synergylit.com",
};

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
