import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";


import LoadingSpinner from "../components/common/LoadingSpinner";
function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

 const loadProjects = async () => {
  try {
    const response = await getProjects();
    setProjects(response.data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    setError("Unable to load projects. Please try again later.");
  } finally {
    setLoading(false);
  }
};
if (error) {
  return (
    <div className="container py-5">
      <div className="alert alert-danger">
        {error}
      </div>
    </div>
  );
}

if (loading) {
  return <LoadingSpinner />;
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

          <div className="card shadow h-100 project-card">

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