import { Link } from "react-router-dom";
import logo from "../../Images/react.png";

function Header() {
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

            {/* Projects */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/count-o-pedia">
                    Counter App
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/contact-o-pedia">
                    Contact App
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
