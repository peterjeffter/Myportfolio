import React, { useEffect, useState } from "react";
import projectImage from "./layers.png";
import projectLink from "./link.png";

const Projects = ({ resetTrigger }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const projects = [
    { title: "Project 1", description: "An App designed to ease public transportation within Abuja.", link: "https://peterjeffter.github.io/Public-Transport-/" },
    { title: "Project 2", description: "A cool Crypto mining App.", link:"https://peterjeffter.github.io/Crownbot/" },
    { title: "Project 3", description: "Geoinnovate.", link:"https://peterjeffter.github.io/geoinnovate/" },
    { title: "Project 4", description: "A cool app designed to aid children with learning.", link:"" }
  ];

  useEffect(() => {
    setActiveIndices([]); // Reset indices
    let timeouts = [];
    projects.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setActiveIndices((prev) => [...prev, index]);
      }, index * 100); // Delay for each project
      timeouts.push(timeout);
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [resetTrigger]); // Re-run animation on resetTrigger change

  return (
    <section id="projects" className="projects">
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${activeIndices.includes(index) ? "active" : ""}`}
          >
            <p>{project.description}</p>
          
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" // Security enhancement
                className="project-link-wrapper"
              >
              <img
                src={projectLink}
                alt={project.title || `Project ${index + 1}`}
                className="project-link"
              />
             </a>

            </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
