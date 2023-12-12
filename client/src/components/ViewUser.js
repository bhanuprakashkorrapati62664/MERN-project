import React, { useEffect, useState } from "react";

function ViewUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/user/view")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
              <td>{user.address1}</td>
              <td>{user.address2}</td>
              <td>{user.city}</td>
              <td>{user.postalCode}</td>
              <td>{user.country}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>{user.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;
