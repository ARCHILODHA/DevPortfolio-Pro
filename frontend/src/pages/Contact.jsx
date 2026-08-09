import { useState } from "react";
import { sendMessage } from "../api/contactService";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(formData);

      setSuccess("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        📩 Contact Me
      </h1>

      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;