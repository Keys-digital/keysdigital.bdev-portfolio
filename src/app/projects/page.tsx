"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Project Data
const projects = [
  {
    title: "Conference Expense Planner",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://keys-digital.github.io/conference_event_planner/",
    repo: "https://github.com/Keys-digital/conference_event_planner",
    thumbnail: "/eventplanner.app",
  },
  {
    title: "Paradise Nursery",
    techStack: ["Next.js", "Express.js", "MongoDB", "Bootstrap"],
    liveDemo: "https://keys-digital.github.io/e-plantShopping/",
    repo: "https://github.com/Keys-digital/e-plantShopping",
    thumbnail: "/paradisenursery.app",
  },
  {
    title: "GiftLink",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    liveDemo: "Deployment in progress",
    repo: "https://github.com/Keys-digital/giftlink",
    thumbnail: "/giftlinkwebsite.png",
  },
  // More projects can be added here...
];

// Pagination Configuration
const PROJECTS_PER_PAGE = 3;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  // Slice projects for current page
  const displayedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <p className="text-lg text-gray-300 text-center mb-12">
        Building Scalable, Secure, and High-Performance Backends
      </p>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={500}
              height={300}
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">
              {project.techStack.join(" • ")}
            </p>
            <div className="flex justify-between items-center mt-4">
              {project.liveDemo !== "Deployment in progress" ? (
                <Link href={project.liveDemo} target="_blank">
                  <a className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-500">
                    Live Demo
                  </a>
                </Link>
              ) : (
                <span className="text-yellow-400">
                  🚀 Deployment in Progress
                </span>
              )}
              <Link href={project.repo} target="_blank">
                <a className="bg-gray-700 px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                  GitHub Repo
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <button
            className={`px-4 py-2 mx-2 ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            } text-white rounded-lg`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-lg text-gray-300 mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 mx-2 ${
              currentPage === totalPages
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            } text-white rounded-lg`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* CTA Link to Recent Projects */}
      <div className="mt-12 text-center">
        <Link href="/recentprojects">
          <a className="text-blue-400 hover:underline text-lg">
            View My Recent Projects →
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
