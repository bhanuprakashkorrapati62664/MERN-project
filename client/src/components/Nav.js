import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";

function Nav() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/user/add"
                  >
                    Add User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/update">
                    Update User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/view">
                    View User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/update" element={<UpdateUser />} />
          <Route path="/user/view" element={<ViewUser />} />
          <Route path="/user/edit/:userId" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default Nav;
