import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          DevPortfolio-Pro
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">Home</Link>

          <Link className="nav-link" to="/about">About</Link>

          <Link className="nav-link" to="/projects">Projects</Link>

          <Link className="nav-link" to="/skills">Skills</Link>

          <Link className="nav-link" to="/certificates">Certificates</Link>

          <Link className="nav-link" to="/contact">Contact</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;