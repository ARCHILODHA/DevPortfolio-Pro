import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          DevPortfolio-Pro
        </Link>

        <div className="navbar-nav ms-auto">

        <a className="nav-link" href="#home">Home</a>

<a className="nav-link" href="#about">About</a>

<a className="nav-link" href="#skills">Skills</a>

<a className="nav-link" href="#projects">Projects</a>

<a className="nav-link" href="#certificates">Certificates</a>

<a className="nav-link" href="#contact">Contact</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;