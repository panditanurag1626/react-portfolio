import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you, " + formData.name);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact"  className="contact-container">
      <h1>Contact Me</h1>
      <div  className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="social-icons">
            <a href="https://github.com/panditanurag1626" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:panditanurag638@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/anurag-mishra-7b15072a5/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
