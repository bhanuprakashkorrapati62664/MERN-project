import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/user/view");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <h1>Add User Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            className="form-control"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            className="form-control"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date Of Birth:</label>
          <input
            className="form-control"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address1:</label>
          <textarea
            className="form-control"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address2:</label>
          <textarea
            className="form-control"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            className="form-control"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            className="form-control"
            name="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            className="form-control"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            className="form-control"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>User Notes:</label>
          <textarea
            className="form-control"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddUser;
