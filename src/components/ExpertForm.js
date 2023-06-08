import { useState } from "react";

export default function ExpertForm() {
  const [expertForm, setExpertForm] = useState({
    firstName: " ",
    lastName: " ",
    emailAddress: " ",
    phoneNumber: " ",
    message: " ",
  });

  console.log(expertForm);

  function handleChange(event) {
    setExpertForm((prevExpertForm) => {
      return {
        ...prevExpertForm,
        [event.target.name] : event.target.value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(expertForm)
  }

  return (
    <>
      <p className="expert">
        <h1>Ask an Expert</h1>
        <p className="expert-ask">
          Do you have a question about surgery? Want to enquire about a
          procedure? Fill in the form below and we will be in touch very soon.
        </p>
      </p>
      <container className="expert-form-container">
        <form className="expert-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={expertForm.firstName}
          />
          <input type="text" 
          placeholder="Last Name" 
          onChange={handleChange}
          name="lastName"
          value={expertForm.lastName}
          />
          <input type="email" 
          placeholder="Email" 
          onChange={handleChange}
          name="emailAddress"
          value={expertForm.email}
          />
          <input type="phone" 
          placeholder="Phone Number" 
          onChange={handleChange}
          name="phoneNumber"
          value={expertForm.phoneNumber}
          />
          <textarea type="message" 
          placeholder="Message" 
          onChange={handleChange}
          name="message"
          value={expertForm.message}
          />
          <br></br>
          <button className="expert-submit">Submit</button>
        </form>
      </container>
    </>
  );
}
