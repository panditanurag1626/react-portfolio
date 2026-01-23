import React from "react";

export default function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-list">

        <div className="experience-card">
          <h2 className="exp-role">Fresher – Front-End Developer</h2>
          <span className="exp-duration">2025 – Present</span>
          <p className="exp-details">
            Completed hands-on practice in React, JavaScript, HTML, and CSS by
            building personal projects such as Portfolio Website, Contact Form,
            Navbar, Skills and Projects sections.
          </p>
        </div>

        <div className="experience-card">
          <h2 className="exp-role">Academic & Self Learning Projects</h2>
          <span className="exp-duration">2025 – 2026</span>
          <p className="exp-details">
            Gained practical experience through academic projects and self-learning.
            Focused on responsive UI design, component-based development, and
            clean code practices.
          </p>
        </div>

      </div>
    </section>
  );
}
