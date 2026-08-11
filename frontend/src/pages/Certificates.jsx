import { useEffect, useState } from "react";
import { getCertificates } from "../api/certificateService";
import LoadingSpinner from "../components/common/LoadingSpinner";
function Certificates() {

  const [certificates, setCertificates] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  useEffect(() => {
    loadCertificates();
  }, []);

 const loadCertificates = async () => {
  try {
    const response = await getCertificates();
    setCertificates(response.data);
  } catch (error) {
    console.error("Error loading certificates:", error);
    setError("Unable to load certificates. Please try again later.");
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
        🏆 My Certificates
      </h1>

      <div className="row">

        {certificates.length === 0 ? (

  <h4 className="text-center">
    No Certificates Found
  </h4>

) : (

  certificates.map((certificate) => (

          <div className="col-md-6 col-lg-4 mb-4" key={certificate.id}>

            <div className="card shadow h-100 certificate-card">

              <div className="card-body">

                <h5>{certificate.title}</h5>

                <p className="text-muted">
                  {certificate.issuer}
                </p>

                <span className="badge bg-success">
                  {certificate.year}
                </span>

              </div>

            </div>

          </div>

        ))
      )}

      </div>

    </div>
  );
}

export default Certificates;