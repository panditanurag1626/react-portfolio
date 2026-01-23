export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-box">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            Designed and developed a responsive portfolio website using React.
            It showcases my skills, projects, and experience with smooth navigation,
            modern UI design, and a mobile-friendly layout.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Event Management System</h3>

          <p>
            A web-based event management system that allows users to view events,
            register for events, and efficiently manage event details.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="https://panditanurag1626.github.io/eventmanagement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Car Rental System</h3>

          <p>
            A car rental management system built using HTML, CSS, and Bootstrap
            that supports efficient CRUD operations for managing car listings.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
          </div>

          <div className="project-links">
            <a
              href="https://panditanurag1626.github.io/Car-Rental-Website1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
