import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/react.png";
import { getAuthState, logout } from "../../utility/authUtility";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = getAuthState();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        borderBottom: "1px solid #777",
      }}
    >
      <div className="container-fluid">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="React Logo"
            style={{
              height: "45px",
              marginRight: "10px",
            }}
          />

          <span>Learning React!</span>
        </Link>

        {/* Mobile Toggle */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer">
                Customer
              </Link>
            </li>
          </ul>
        </div>
        {/* Login Button - Right Corner */}
        <div className="ms-auto">
          {isAuthenticated ? (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
