import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditUser() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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

  useEffect(() => {
    fetch(`/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        navigate("/user/view");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <h1>Edit User Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            className="form-control"
            name="lastName"
            type="text"
            value={userData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            className="form-control"
            name="firstName"
            type="text"
            value={userData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date Of Birth:</label>
          <input
            className="form-control"
            name="dateOfBirth"
            type="date"
            value={userData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address1:</label>
          <textarea
            className="form-control"
            name="address1"
            value={userData.address1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address2:</label>
          <textarea
            className="form-control"
            name="address2"
            value={userData.address2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            className="form-control"
            name="city"
            type="text"
            value={userData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            className="form-control"
            name="postalCode"
            type="text"
            value={userData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            className="form-control"
            name="country"
            type="text"
            value={userData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            className="form-control"
            name="phoneNumber"
            type="text"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>User Notes:</label>
          <textarea
            className="form-control"
            name="notes"
            value={userData.notes}
            onChange={handleChange}
          />
        </div>
        <br />
        <input className="btn btn-primary" type="submit" value="Update" />
      </form>
    </div>
  );
}

export default EditUser;
