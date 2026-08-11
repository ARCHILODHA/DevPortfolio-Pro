function AboutPreview() {
  return (
    <section className="container py-5 about-preview">

      {/* Section Heading */}
      <div className="text-center mb-5">

        <h2 className="display-5 fw-bold">
          About Me
        </h2>

        <p className="lead text-muted">
          Full Stack Java Developer & Software Engineer
        </p>

      </div>


      {/* Main Content */}
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-7">

          <h3 className="fw-bold mb-3">
            Building Ideas Into Real Applications 🚀
          </h3>

          <p>
            I'm a Computer Science undergraduate passionate about
            building scalable and user-friendly web applications.
          </p>

          <p>
            I work with Java, Spring Boot, React and MySQL to
            develop complete full-stack applications. I enjoy
            solving problems, learning new technologies and
            turning ideas into practical software.
          </p>

          <p>
            My current focus is strengthening my Data Structures
            and Algorithms skills while continuing to build
            real-world projects.
          </p>

        </div>


        {/* Right Side */}
        <div className="col-lg-5 mt-4 mt-lg-0">

          <div className="card shadow about-preview-card p-4">

            <h4 className="fw-bold mb-4">
              My Focus
            </h4>

            <p>
              ☕ Java & Spring Boot
            </p>

            <p>
              ⚛️ React Development
            </p>

            <p>
              🗄️ MySQL & REST APIs
            </p>

            <p>
              🧠 Data Structures & Algorithms
            </p>

            <p className="mb-0">
              🚀 Software Engineering
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;