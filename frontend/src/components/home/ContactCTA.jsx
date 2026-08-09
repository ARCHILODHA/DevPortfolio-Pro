import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section id="contact" className="container py-5 text-center">

      <h2>Let's Work Together</h2>

      <p className="mb-4">
        Have a project in mind or want to collaborate?
        I'd love to hear from you.
      </p>

      <Link
        to="/contact"
        className="btn btn-primary btn-lg"
      >
        Contact Me
      </Link>

    </section>
  );
}

export default ContactCTA;