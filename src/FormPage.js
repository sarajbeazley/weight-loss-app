import React from "react";
import { useState } from "react";

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: " ",
    lastName: " ",
    emailAddress: " ",
    phoneNumber: " ",
    info: " ",
  });

  console.log(formData.info);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form-body">
      <p className="blue">Request A Callback | Weight Loss Specialists</p>
      <h1>Callback Request</h1>
      <p>
        To get started, please provide us with some details and one of our
        experts will be in touch
      </p>
      <container className="form-container">
      <form>
        <p className="input-info">First Name*</p>
        <input className="callback-input"
          type="text"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <p className="input-info">Last Name*</p>
        <input className="callback-input"
          type="text"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <p className="input-info">Email Address*</p>
        <small className="input-info">
          If you are an existing customer, please provide the email address
          associated with your account.
        </small>
        <input className="callback-input"
          type="number"
          onChange={handleChange}
          name="emailAddress"
          value={formData.emailAddress}
        />
        <p className="input-info">Phone Number*</p>
        <input className="callback-input"
          type="number"
          onChange={handleChange}
          name="phoneNumber"
          value={formData.phoneNumber}
        />
        <p className="input-info">Additional Info</p>
        <textarea value={formData.info} onChange={handleChange} name="info" className="textarea-input"/>

  <button className="button-callback">Request callback</button>
      </form>
      </container>
    </div>
  );
}
