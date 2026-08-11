import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

function NotFound() {

  return (
    <div className="not-found-page">

      <div className="not-found-content">

        <h1 className="not-found-number">
          404
        </h1>

        <h2>
          Page Not Found
        </h2>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="mt-4">

          <Link
            to="/"
            className="btn btn-primary btn-lg me-3"
          >
            <FaHome className="me-2" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline-secondary btn-lg"
          >
            <FaArrowLeft className="me-2" />
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default NotFound;