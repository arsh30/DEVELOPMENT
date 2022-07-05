import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React User
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  exact
                  to={"/"}
                  className="nav-link "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/users/add" className="btn btn-outline-light">Add user</Link>
      </div>
    </nav>
  );
};

export default Nav;
