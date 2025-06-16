import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const [currentPage, setCurrentPage] = useState("home");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setCurrentPage("home");
    else if (path === "/book") setCurrentPage("book");
    else if (path === "/admin") setCurrentPage("admin");
    else if (path === "/team") setCurrentPage("team");
    else if (path === "/contact") setCurrentPage("contact");
    else if (path === "/profile") setCurrentPage("profile");
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserDropdown(false);
  };

  const toggleDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const closeDropdown = () => {
    setTimeout(() => setShowUserDropdown(false), 200);
  };

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
            🏠 Home
          </Link>
        </li>
        
        {isAuthenticated() && (
          <li>
            <Link
              to="/book"
              className={`nav-link px-3 ${
                currentPage === "book" ? "fw-bold text-primary" : ""
              } transition-all hover:text-primary-600`}
            >
              📚 Book
            </Link>
          </li>
        )}
        
        {isAdmin() && (
          <li>
            <Link
              to="/admin"
              className={`nav-link px-3 ${
                currentPage === "admin" ? "fw-bold text-primary" : ""
              } transition-all hover:text-primary-600`}
            >
              ⚙️ Admin
            </Link>
          </li>
        )}
        
        <li>
          <Link
            to="/team"
            className={`nav-link px-3 ${
              currentPage === "team" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            👥 Team
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link px-3 ${
              currentPage === "contact" ? "fw-bold text-primary" : ""
            } transition-all hover:text-primary-600`}
          >
            📞 Contact
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        {!isAuthenticated() ? (
          <>
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
          </>
        ) : (
          <div className="dropdown position-relative">
            <button
              className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center"
              type="button"
              onClick={toggleDropdown}
              onBlur={closeDropdown}
            >
              <span className="me-2">
                {isAdmin() ? '👑' : '👤'}
              </span>
              <span className="d-none d-md-inline">
                {user?.fullName || user?.username || 'User'}
              </span>
            </button>
            
            {showUserDropdown && (
              <ul className="dropdown-menu dropdown-menu-end show position-absolute" style={{ zIndex: 1000 }}>
                <li>
                  <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                      <span className="me-2 fs-4">
                        {isAdmin() ? '👑' : '👤'}
                      </span>
                      <div>
                        <div className="fw-semibold">{user?.fullName || user?.username}</div>
                        <small className="text-muted">{user?.email}</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                
                <li>
                  <div className="dropdown-item-text">
                    <span className="small text-muted">Role: </span>
                    <span className={`badge ${isAdmin() ? 'bg-warning text-dark' : 'bg-primary'}`}>
                      {isAdmin() ? 'Administrator' : 'User'}
                    </span>
                  </div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                
                <li>
                  <Link 
                    to="/profile" 
                    className="dropdown-item"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <i className="fa-solid fa-user me-2"></i>
                    Profile
                  </Link>
                </li>
                
                <li>
                  <Link 
                    to="/settings" 
                    className="dropdown-item"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <i className="fa-solid fa-gear me-2"></i>
                    Settings
                  </Link>
                </li>
                
                {isAdmin() && (
                  <>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link 
                        to="/admin" 
                        className="dropdown-item text-warning"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        <i className="fa-solid fa-shield-halved me-2"></i>
                        Admin Dashboard
                      </Link>
                    </li>
                  </>
                )}
                
                <li><hr className="dropdown-divider" /></li>
                
                <li>
                  <button 
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-right-from-bracket me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}