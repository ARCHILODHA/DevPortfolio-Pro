import profile from "../../assets/images/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import { downloadResume } from "../../api/resumeService";

function Hero() {
  const handleDownload = async () => {
  try {
    const response = await downloadResume();

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Error downloading resume:", error);
    alert("Unable to download resume.");
  }
};
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <h5 className="text-primary fw-bold">
              👋 Hello, I'm
            </h5>

            <h1 className="display-3 fw-bold">
              Archi Lodha
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Java Developer",
                2000,
                "React Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="h3"
              speed={40}
              repeat={Infinity}
              className="typing-text mb-4"
            />

            <p className="lead">
              Passionate about building scalable web applications using
              Java, Spring Boot, React and MySQL.
            </p>

            {/* Buttons */}
            <div className="mt-4">

              <Link
                to="/projects"
                className="btn btn-primary btn-lg me-3"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Icons */}
            <div className="mt-4">

              <a
                href="https://github.com/archilodha"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark me-2"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/archilodha"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:archilodha1@gmail.com"
                className="btn btn-danger me-2"
              >
                <FaEnvelope />
              </a>

             <button
  className="btn btn-success"
  onClick={handleDownload}
>
  <FaDownload /> Resume
</button>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg profile-image"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;