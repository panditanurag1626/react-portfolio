import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav_bar">
      <div className="left nav_items">Portfolio</div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`right ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="nav_items" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#experience" className="nav_items" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" className="nav_items" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" className="nav_items" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="nav_items" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
