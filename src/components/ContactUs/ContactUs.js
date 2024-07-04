import React from "react";
import "./style.css";

// * Data
const contact = {
  address: {
    street: "1234 Street Ave",
    city: "City",
    state: "ST",
    zipcode: "12345",
  },
  phone: "(123)456-7890",
  fax: "(123)456-7890",
  email: "admin@synergylit.com",
};

const { address, phone, fax, email } = contact;

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="overlay"></div>
      <div className="contact-content">
        <p>Office:</p>
        <p>
          {`${address.street},`}
          <br /> {`${address.city}, ${address.state} ${address.zipcode}`}
        </p>
        <p>Phone:</p>
        <p>{phone}</p>
        <p>Fax:</p>
        <p>{fax}</p>
        <p>Email:</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactUs;
