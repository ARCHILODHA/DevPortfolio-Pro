function SkillsPreview() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "JavaScript",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-5">My Skills</h2>

      <div className="row">

        {skills.map((skill, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="card shadow skill-card text-center p-4">

              <h4>{skill}</h4>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SkillsPreview;