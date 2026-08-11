import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navClass = ({ isActive }) =>
    isActive
      ? "nav-link active fw-bold"
      : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          DevPortfolio-Pro
        </Link>


        {/* Mobile Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation */}

        <div
          className="collapse navbar-collapse"
          id="portfolioNavbar"
        >

          <div className="navbar-nav ms-auto">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
            >
              About
            </NavLink>

            <NavLink
              to="/skills"
              className={navClass}
            >
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              className={navClass}
            >
              Projects
            </NavLink>

            <NavLink
              to="/certificates"
              className={navClass}
            >
              Certificates
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
            >
              Contact
            </NavLink>

          </div>


          {/* Theme Button */}

          <button
            className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;