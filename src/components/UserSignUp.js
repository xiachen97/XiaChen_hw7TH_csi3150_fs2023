import React, { useState, useEffect } from "react";
import "./UserSignUp.css";
function UserSignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    console.log("formData Component rendered or updated");
    // here we can fetch data from an API...
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("User Input:", formData);
  };

  return (
    <form className="form-container">
      <h2>User Sign Up</h2>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default UserSignUp;
