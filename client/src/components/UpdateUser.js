import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UpdateUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/user/update")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    fetch(`/user/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div className="container">
      <h1>Update User Info</h1>
      {users && users.length > 0 ? (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user._id} className="list-group-item">
              {user.firstName} {user.lastName} - {user.email}
              <br />
              Address: {user.address1}, {user.address2}, {user.city},{" "}
              {user.postalCode}, {user.country}
              <br />
              Phone: {user.phoneNumber}
              <br />
              Date of Birth: {new Date(user.dateOfBirth).toDateString()}
              <br />
              Notes: {user.notes}
              <br />
              <Link
                to={`/user/edit/${user._id}`}
                className="btn btn-secondary mr-2"
                style={{ marginRight: "8px" }}
              >
                Edit User
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default UpdateUser;
