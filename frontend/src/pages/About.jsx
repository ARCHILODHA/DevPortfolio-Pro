function About() {
  return (
    <section className="about-section container py-5">

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          About Me
        </h1>

        <p className="lead text-muted">
          Full Stack Java Developer | Software Engineer
        </p>
      </div>

      <div className="row align-items-center">

        {/* About Text */}

        <div className="col-lg-7">

          <h2 className="fw-bold mb-4">
            Hi, I'm Archi 👋
          </h2>

          <p className="lead">
            I'm a Computer Science undergraduate and aspiring
            Software Engineer passionate about building scalable
            and user-friendly web applications.
          </p>

          <p>
            I work primarily with Java, Spring Boot, React and
            MySQL. I enjoy developing complete full-stack
            applications and understanding how different parts
            of a system work together.
          </p>

          <p>
            My current focus is strengthening my Data Structures
            and Algorithms skills while building real-world
            projects using modern web technologies.
          </p>

          <div className="mt-4">

            <span className="badge bg-primary me-2 p-2">
              Java
            </span>

            <span className="badge bg-primary me-2 p-2">
              Spring Boot
            </span>

            <span className="badge bg-primary me-2 p-2">
              React
            </span>

            <span className="badge bg-primary me-2 p-2">
              MySQL
            </span>

          </div>

        </div>


        {/* Highlights */}

        <div className="col-lg-5 mt-5 mt-lg-0">

          <div className="card shadow about-card p-4">

            <h4 className="fw-bold mb-4">
              What I Do
            </h4>

            <div className="mb-3">
              <h5>💻 Full Stack Development</h5>
              <p className="text-muted mb-0">
                Building complete web applications using
                React, Spring Boot and MySQL.
              </p>
            </div>

            <div className="mb-3">
              <h5>☕ Java Development</h5>
              <p className="text-muted mb-0">
                Developing backend applications and REST APIs
                using Java and Spring Boot.
              </p>
            </div>

            <div>
              <h5>🧠 Problem Solving</h5>
              <p className="text-muted mb-0">
                Continuously improving Data Structures and
                Algorithms skills.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;