import React from "react";
import { useState } from "react";

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: " ",
    lastName: " ",
    emailAddress: " ",
    phoneNumber: " ",
    info: " ",
    marketing: true,
    over18: true,
  });

  console.log(formData.info);

  function handleChange(event) {
    const{name, value, type, checked} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="form-body">
      <p className="green-text">Request A Callback | Weight Loss Specialists</p>
      <h1>Callback Request</h1>
      <p>
        To get started, please provide us with some details and one of our
        experts will be in touch
      </p>
      <container className="callback-form-box">
        <form onSubmit={handleSubmit}>
          <p className="input-info">First Name*</p>
          <input
            className="callback-input"
            type="text"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
          <p className="input-info">Last Name*</p>
          <input
            className="callback-input"
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
          <input
            className="callback-input"
            type="email"
            onChange={handleChange}
            name="emailAddress"
            value={formData.emailAddress}
          />
          <p className="input-info">Phone Number*</p>
          <input
            className="callback-input"
            type="number"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
          />
          <p className="input-info">Additional Info</p>
          <textarea className="textarea-input"
            value={formData.info}
            onChange={handleChange}
            name="info"
          />
          <div>
          <input className="checkbox-input"
          type="checkbox"
          id="marketing"
          checked={formData.marketing}
          onChange={handleChange}
          name="marketing"
           />
           <label htmlFor="marketing"><small>I would you like to receive helpful email, SMS and similar messages.</small></label>
           </div>
           <div>
           <input className="checkbox-input"
          type="checkbox"
          id="over18"
          checked={formData.over18}
          onChange={handleChange}
          name="over18"
           />
           <label htmlFor="over18"><small>I confirm that I am 18 years or over and have read the terms and conditions</small></label>
           </div>
          <button className="button-request-callback">Request callback</button>
        </form>
      </container>
    </div>
  );
}
