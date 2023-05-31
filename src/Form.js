import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState(
    {firstName:" ", lastName:" ", phoneNumber:" ", info:" " }
    );

  console.log(formData.info)

  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
        
  }

  return (
    <form>
      <input 
      type="text" 
      placeholder="First Name" 
      onChange={handleChange}
      name="firstName"
      value={formData.firstName}
       />

    <input 
      type="text" 
      placeholder="Last Name" 
      onChange={handleChange}
      name="lastName"
      value={formData.lastName}
       />

    <input 
      type="number" 
      placeholder="Phone Number" 
      onChange={handleChange}
      name="phoneNumber"
      value={formData.phoneNumber}
       />

       <textarea 
       value={formData.info}
       placeholder="Tell us something about yourself" 
      onChange={handleChange}
      name="info"
       />

    </form>
  );
}
