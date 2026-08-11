import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer mt-5">

      <div className="container py-5">

        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">

            <h4 className="fw-bold">
              DevPortfolio-Pro
            </h4>

            <p>
              Full Stack Java Developer passionate about
              building scalable and modern web applications.
            </p>

          </div>


          {/* Quick Links */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold">
              Quick Links
            </h5>

            <div className="d-flex flex-column gap-2">

              <Link to="/" className="footer-link">
                Home
              </Link>

              <Link to="/about" className="footer-link">
                About
              </Link>

              <Link to="/skills" className="footer-link">
                Skills
              </Link>

              <Link to="/projects" className="footer-link">
                Projects
              </Link>

              <Link to="/certificates" className="footer-link">
                Certificates
              </Link>

              <Link to="/contact" className="footer-link">
                Contact
              </Link>

            </div>

          </div>


          {/* Connect */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold">
              Connect With Me
            </h5>

            <div className="d-flex gap-2 mt-3">

              <a
                href="https://github.com/archilodha"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/archilodha"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:archilodha1@gmail.com"
                className="social-link"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <div className="container d-flex justify-content-between align-items-center">

          <p className="mb-0">
            © 2026 Archi Lodha | DevPortfolio-Pro
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;