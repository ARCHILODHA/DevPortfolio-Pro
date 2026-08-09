import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h3>Loading Projects...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">🚀 My Projects</h1>

      <div className="row">

        {projects.length === 0 ? (
          <h4 className="text-center">No Projects Found</h4>
        ) : (
          projects.map((project) => (

            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>

              <div className="card shadow h-100">

                <div className="card-body">

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <p>
                    <strong>Technology:</strong>
                    <br />
                    {project.technology}
                  </p>

                  <div className="d-flex gap-2">

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Projects;