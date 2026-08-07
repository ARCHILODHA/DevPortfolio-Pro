function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="row align-items-center">

        <div className="col-lg-6">

          <h5 className="text-primary fw-bold">
            👋 Hello, I'm
          </h5>

          <h1 className="display-3 fw-bold">
            Archi Lodha
          </h1>

          <h3 className="text-secondary mb-4">
            Full Stack Java Developer
          </h3>

          <p className="lead">
            Passionate about building scalable web applications using
            Java, Spring Boot, React and MySQL.
          </p>

          <div className="mt-4">
  <button className="btn btn-primary btn-lg me-3 px-4">
    View Projects
  </button>

  <button className="btn btn-outline-light btn-lg px-4">
    Contact Me
  </button>
</div>
        </div>

        <div className="col-lg-6 text-center mt-5 mt-lg-0">

          <img
  src="https://via.placeholder.com/350"
  alt="Profile"
  className="img-fluid rounded-circle shadow-lg profile-image"
/>

        </div>

      </div>
    </section>
  );
}

export default Hero;