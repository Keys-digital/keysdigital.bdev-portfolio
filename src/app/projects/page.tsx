"use client";

import { useState } from "react";
import Link from "next/link";
import Slideshow from "../../components/Slideshow";

// Project Data
const projects = [
  {
    title: "Conference Expense Planner",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A smart expense tracker tailored for professionals and event organizers to manage conference budgets efficiently. Users can track spending, categorize expenses, and generate financial reports.",
    liveDemo: "https://keys-digital.github.io/conference_event_planner/",
    repo: "https://github.com/Keys-digital/conference_event_planner",
    slideshowImages: [
      "/eventplanner.app.1.png",
      "/eventplanner.app.2.png",
      "/eventplanner.app.3.png",
      "/eventplanner.apphomepage.png",
    ],
    thumbnail: "/eventplanner.app.png",
  },
  {
    title: "Paradise Nursery",
    techStack: ["Next.js", "Express.js", "MongoDB", "Bootstrap"],
    description:
      "A seamless e-commerce platform for plant enthusiasts, offering an intuitive shopping experience for a variety of plants. Features include a dynamic product catalog, secure checkout, and a blog for gardening tips.",
    liveDemo: "https://keys-digital.github.io/e-plantShopping/",
    repo: "https://github.com/Keys-digital/e-plantShopping",
    slideshowImages: [
      "/paradisenursery.app.1.png",
      "/paradisenursery.app.2.png",
      "/paradisenursery.apphomepage.png",
    ],
    thumbnail: "/paradisenursery.app.png",
  },
  {
    title: "GiftLink",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    description:
      "A full-stack web application that enables users to give away and receive free household items, promoting sustainable living through community-driven sharing.",
    liveDemo: "Deployment in progress",
    repo: "https://github.com/Keys-digital/giftlink",
    slideshowImages: [
      "/giftlinkwebsite.1.png",
      "/giftlinkwebsite.2.png",
      "/giftlinkwebsite.3.png",
      "/giftlinkwebsitehomepage.png",
    ],
    thumbnail: "/giftlinkwebsite.png",
  },
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
    <div className="w-full flex flex-col items-center bg-gray-900 text-white py-12 px-6 mt-[5px]">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <p className="text-lg text-gray-300 text-center mb-12">
        Building Scalable, Secure, and High-Performance Backends
      </p>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 min-h-[350px]"
          >
            {/* Project Content - Flex Layout */}
            <div className="flex flex-col md:flex-row items-stretch h-full">
              {/* Slideshow */}
              <div className="md:w-2/3 mb-4 md:mb-0">
                <Slideshow
                  images={project.slideshowImages}
                  alt={project.title}
                />
              </div>
              {/* Project Details */}
              <div className="md:w-2/3 md:pl-6 flex flex-col justify-between">
                <div className="flex flex-col h-full">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-2">
                    {project.techStack.join(" • ")}
                  </p>
                  <p className="text-gray-300 mt-2 flex-grow">
                    {project.description}
                  </p>
                  {/* Project Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    {project.liveDemo.startsWith("http") ? (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-500"
                      >
                        Live Demo
                      </Link>
                    ) : (
                      <span className="text-yellow-400">
                        Deployment in Progress
                      </span>
                    )}
                    <Link
                      href={project.repo}
                      target="_blank"
                      className="bg-gray-700 px-4 py-2 text-white rounded-lg hover:bg-gray-600"
                    >
                      GitHub Repo
                    </Link>
                  </div>
                </div>
              </div>
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
        <Link
          href="/recentprojects"
          className="text-blue-400 hover:underline text-lg"
        >
          View My Recent Projects →
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
