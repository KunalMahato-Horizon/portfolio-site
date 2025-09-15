import React from "react";
import ProjectCard from "./ProjectCard";

// Temporary dummy data
const projects = [
  {
    id: 1,
    title: "Sonvitri Foundation",
    description: "An NGO website built to serve the community.",
    tech: ["React", "Tailwind", "Node.js"],
    demoLink: "#",
    codeLink: "#",
    image: "https://via.placeholder.com/400x250", // replace later
  },
  {
    id: 2,
    title: "Video Editor",
    description: "A simple video editing tool for beginners.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoLink: "#",
    codeLink: "#",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
