import { useEffect, useState } from "react";
import { getSkills } from "../api/skillService";
import LoadingSpinner from "../components/common/LoadingSpinner";
function Skills() {

  const [skills, setSkills] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
  try {
    const response = await getSkills();
    setSkills(response.data);
  } catch (error) {
    console.error("Error loading skills:", error);
    setError("Unable to load skills. Please try again later.");
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return <LoadingSpinner />;
}
if (error) {
  return (
    <div className="container py-5">
      <div className="alert alert-danger">
        {error}
      </div>
    </div>
  );
}

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        💻 My Skills
      </h1>

      <div className="row">

       {skills.length === 0 ? (
  <h4 className="text-center">No Skills Found</h4>
) : (
  skills.map((skill) => (

          <div className="col-md-4 mb-4" key={skill.id}>

            <div className="card shadow h-100">

              <div className="card-body">

                <h5>{skill.name}</h5>

                <p>
                  <strong>Category:</strong> {skill.category}
                </p>

                <div className="progress">

                  <div
                    className="progress-bar bg-success"
                    style={{ width: `${skill.proficiency}%` }}
                  >
                    {skill.proficiency}%
                  </div>

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

export default Skills;