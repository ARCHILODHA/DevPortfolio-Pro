import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          DevPortfolio-Pro
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">Home</Link>

          <Link className="nav-link" to="/about">About</Link>

          <Link className="nav-link" to="/skills">Skills</Link>

          <Link className="nav-link" to="/projects">Projects</Link>

          <Link className="nav-link" to="/certificates">Certificates</Link>

          <Link className="nav-link" to="/contact">Contact</Link>

        </div>

        <button
          className={`btn ms-3 ${
            darkMode ? "btn-outline-light" : "btn-outline-dark"
          }`}
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;