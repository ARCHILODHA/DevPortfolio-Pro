function Certificates() {

  const certificates = [
    {
      title: "Google Student Ambassador 2026",
      issuer: "Google",
      year: "2026"
    },
    {
      title: "NASA Space Apps Challenge",
      issuer: "NASA",
      year: "2025"
    },
    {
      title: "Microsoft AI Skills Fest",
      issuer: "Microsoft",
      year: "2026"
    },
    {
      title: "GeeksforGeeks Campus Mantri",
      issuer: "GeeksforGeeks",
      year: "2026"
    },
    {
      title: "LetsUpgrade Student Ambassador",
      issuer: "LetsUpgrade",
      year: "2026"
    },
    {
      title: "Women Techmakers",
      issuer: "Google",
      year: "2026"
    }
  ];

  return (
    <section className="container py-5">

      <h1 className="text-center mb-5">
        🏆 My Certificates
      </h1>

      <div className="row">

        {certificates.map((item, index) => (

          <div className="col-md-6 col-lg-4 mb-4" key={index}>

            <div className="card certificate-card shadow h-100">

              <div className="card-body">

                <h5>{item.title}</h5>

                <p>{item.issuer}</p>

                <span className="badge bg-success">
                  {item.year}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;