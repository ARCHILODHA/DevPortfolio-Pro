import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../api/projectService";


function ProjectsPreview() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container py-5">

      <h2 className="text-center mb-5">
        Featured Projects
      </h2>

      <div className="row">

        {projects.map((project) => (

          <div className="col-md-4 mb-4" key={project.id}>

            <div className="card h-100 shadow">

              <div className="card-body">

                <h5>{project.title}</h5>

                <p>{project.description}</p>

                <p>
                  <strong>{project.technology}</strong>
                </p>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="text-center mt-4">
        <Link to="/projects" className="btn btn-dark">
          View All Projects
        </Link>
      </div>

    </section>
  );
}

export default ProjectsPreview;