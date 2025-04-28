import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");

  // Update the current page based on the URL path when it changes
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setCurrentPage("home");
    else if (path === "/book") setCurrentPage("book");
    else if (path === "/team") setCurrentPage("team");
    else if (path === "/contact") setCurrentPage("contact");
  }, [location.pathname]);

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          <span className="ms-2 fs-4">BookStore</span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link
            to="/"
            className={`nav-link px-3 ${
              currentPage === "home" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/book"
            className={`nav-link px-3 ${
              currentPage === "book" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            Book
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={`nav-link px-3 ${
              currentPage === "team" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link px-3 ${
              currentPage === "contact" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login">
          <button type="button" className="btn btn-outline-primary me-2 transition-all hover:bg-primary-100">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="btn btn-primary shadow-sm transition-all hover:bg-primary-700">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}