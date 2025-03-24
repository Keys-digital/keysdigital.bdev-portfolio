import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  githubRepo: string;
  images: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 5000); // Change every 5s

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-10">
      {/* Project Image Slideshow */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        {project.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Project Content */}
      <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
      <p className="text-gray-400 mt-2">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-blue-500 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Live Demo →
        </a>
        <span className="mx-2">|</span>
        <a
          href={project.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub Repo →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
