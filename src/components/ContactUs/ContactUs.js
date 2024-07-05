import React from "react";
import "./style.css";

// * Data
const contact = {
  address: {
    street: "325 S. Old Woodward Suite 200",
    city: "Birmingham",
    state: "MI",
    zipcode: "48009",
  },
  phone: "(248)730-7000",
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
        <p>Email:</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactUs;
