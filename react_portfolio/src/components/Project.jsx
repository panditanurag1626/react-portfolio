export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>

            <div className="projects-box">
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>
                        <p>
                            Designed and developed a responsive portfolio website using React.
                            Showcases my skills, projects, and experience with smooth navigation,
                            modern UI design, and mobile-friendly layout.
                        </p>


                    </p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>BOOTSTRAP</span>
                        <span>JAVASCRIPT</span>
                        <span>REACTJS</span>
                    </div>
                    <div className="project-links">
                        <a href="#">GitHub</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Event Management System</h3>
                    <p>
                        A web-based event management system that allows users to view events,
                        register for events, and manage event details efficiently.
                    </p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>BOOTSTRAP</span>
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className="project-links">
                        <a href="https://panditanurag1626.github.io/eventmanagement/">GitHub</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Car Rental</h3>
                    <p>
                        A car rental management system built with HTML, CSS, and Bootstrap that
                        enables efficient CRUD operations for managing car listings and details.
                    </p>

                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                    </div>
                    <div className="project-links">
                        <a href="https://panditanurag1626.github.io/Car-Rental-Website1/">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
