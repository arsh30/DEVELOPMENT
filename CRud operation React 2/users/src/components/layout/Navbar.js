import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="container-fluid">
            <a className="navbar-brand">React User</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                   exact to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link active "
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Add btn */}
          <Link to="/users/add" className="btn btn-outline-light">Add User</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
