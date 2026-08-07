function ProjectsPreview() {

  const projects = [
    {
      title: "DevPortfolio-Pro",
      description: "Full Stack Portfolio using React & Spring Boot"
    },
    {
      title: "Employee Management",
      description: "CRUD application using Spring Boot and MySQL"
    },
    {
      title: "Job Portal",
      description: "AI Powered Career Platform"
    }
  ];

  return (
    <section id="projects" className="container py-5">

      <h2 className="text-center mb-5">
        Featured Projects
      </h2>

      <div className="row">

        {projects.map((project, index) => (

          <div className="col-lg-4 mb-4" key={index}>

            <div className="card shadow project-card h-100">

              <div className="card-body">

                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <button className="btn btn-primary">
                  View Project
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProjectsPreview;