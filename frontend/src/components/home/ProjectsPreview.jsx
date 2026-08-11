import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../api/projectService";

// Local project images
import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.png";
import project3 from "../../assets/images/projects/project3.jpeg";

// Map database image names to local React images
const projectImages = {
  "portfolio.png": project1,
  "emp.png": project2,
  "jobportal.png": project3
};


// Get the correct local image
const getProjectImage = (imageUrl) => {
  if (imageUrl === "portfolio.png") {
    return project1;
  }

  if (imageUrl === "emp.png") {
    return project2;
  }

  if (imageUrl === "jobportal.png") {
    return project3;
  }

  return null;
};


function ProjectsPreview() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  // Load projects from Spring Boot
  useEffect(() => {
    loadProjects();
  }, []);


  const loadProjects = async () => {

    try {

      const response = await getProjects();

      // Show only first 3 projects on Home page
      setProjects(response.data.slice(0, 3));

    } catch (error) {

      console.error("Error loading projects:", error);

    } finally {

      setLoading(false);

    }
  };


  // Loading state
  if (loading) {

    return (
      <section className="container py-5 text-center">

        <h2 className="display-5 fw-bold">
          🚀 Featured Projects
        </h2>

        <p className="text-muted">
          Loading projects...
        </p>

      </section>
    );

  }


  return (

    <section className="container py-5 projects-preview">


      {/* =========================
          HEADING
      ========================== */}

      <div className="text-center mb-5">

        <h2 className="display-5 fw-bold">
          🚀 Featured Projects
        </h2>

        <p className="lead text-muted">
          Some of the projects I've built
        </p>

      </div>



      {/* =========================
          PROJECT CARDS
      ========================== */}

      <div className="row">

        {projects.length === 0 ? (

          <div className="col-12 text-center">

            <p className="text-muted">
              No projects available.
            </p>

          </div>

        ) : (

          projects.map((project) => {

            const image = getProjectImage(project.imageUrl);

            return (

              <div
                className="col-md-6 col-lg-4 mb-4"
                key={project.id}
              >

                <div className="card project-card h-100 shadow">


                  {/* =========================
                      PROJECT IMAGE
                  ========================== */}

                  {image ? (

                    <img
                      src={image}
                      className="card-img-top project-image"
                      alt={project.title}
                    />

                  ) : (

                    <div
                      className="project-image d-flex align-items-center justify-content-center bg-light"
                    >

                      <span className="text-muted">
                        Project Image
                      </span>

                    </div>

                  )}



                  {/* =========================
                      CARD CONTENT
                  ========================== */}

                  <div className="card-body d-flex flex-column">


                    <h4 className="fw-bold">
                      {project.title}
                    </h4>


                    <p className="text-muted">
                      {project.description}
                    </p>


                    <p>

                      <strong>
                        Technology:
                      </strong>

                      <br />

                      {project.technology}

                    </p>



                    {/* =========================
                        BUTTONS
                    ========================== */}

                    <div className="mt-auto d-flex gap-2">


                      {project.githubLink && (

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-dark"
                        >
                          GitHub
                        </a>

                      )}


                      {project.liveLink && (

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary"
                        >
                          Live Demo
                        </a>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            );

          })

        )}

      </div>



      {/* =========================
          VIEW ALL PROJECTS
      ========================== */}

      <div className="text-center mt-4">

        <Link
          to="/projects"
          className="btn btn-dark btn-lg"
        >
          View All Projects
        </Link>

      </div>


    </section>

  );
}


export default ProjectsPreview;