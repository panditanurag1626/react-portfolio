import React from "react";
import "./index.css"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skill from "./components/Skill";      
import Project from "./components/Project";  
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Home />      {/* Home Section */}
        <Experience /> {/* Experience Section */}
        <Skill />     {/* Skills Section */}
        <Project />   {/* Projects Section */}
        <Contact />   {/* Contact Us Section */}
        <Footer />    {/* Footer Us Section */}

      </main>
    </>
  );
}

export default App;
