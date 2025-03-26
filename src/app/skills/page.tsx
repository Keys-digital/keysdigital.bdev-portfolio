"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const skillsData = [
  { name: "Problem-Solving & Debugging", level: 90, color: "bg-orange-500" },
  { name: "Node.js & Express.js", level: 90, color: "bg-blue-500" },
  {
    name: "RESTful API Design & Development",
    level: 90,
    color: "bg-purple-500",
  },
  { name: "Git & Version Control", level: 90, color: "bg-gray-800" },
  {
    name: "Authentication (JWT, OAuth 2.0, Sessions)",
    level: 85,
    color: "bg-red-500",
  },
  {
    name: "Role-Based Access Control (RBAC)",
    level: 85,
    color: "bg-yellow-500",
  },
  { name: "MongoDB & Database Optimization", level: 85, color: "bg-green-500" },
  { name: "TypeScript & JavaScript", level: 85, color: "bg-orange-500" },
  {
    name: "Secure Coding Practices & Data Protection",
    level: 85,
    color: "bg-red-500",
  },
  {
    name: "Technical Documentation & Code Refactoring",
    level: 85,
    color: "bg-grey-300",
  },
  {
    name: "CI/CD Pipelines (GitHub Actions, Jenkins)",
    level: 80,
    color: "bg-blue-500",
  },
  { name: "Agile & Scrum Methodologies", level: 80, color: "bg-yellow-500" },
  {
    name: "HTML, CSS, Tailwind CSS, Bootstrap",
    level: 80,
    color: "bg-purple-500",
  },
  { name: "Database Query Optimization", level: 80, color: "bg-green-500" },
  { name: "AWS (EC2, S3, Cloud Deployment)", level: 75, color: "bg-blue-500" },
  { name: "Docker & Containerization", level: 75, color: "bg-gray-800" },
  { name: "React.js & Redux", level: 75, color: "bg-purple-500" },
  { name: "Scalability & Load Handling", level: 75, color: "bg-orange-500" },
  { name: "WordPress & SEO Optimization", level: 85, color: "bg-blue-500" },
];

const categories = [
  {
    title: "Backend Development & API Engineering",
    icon: "/backend-api.png",
    description:
      "Expertise in Node.js, Express.js, and MongoDB, designing scalable RESTful APIs, optimizing database performance, and implementing secure authentication (JWT, OAuth 2.0).",
  },
  {
    title: "Cloud Deployment & DevOps",
    icon: "/cddvops.png",
    description:
      "Skilled in AWS, CI/CD pipelines, Docker, and Git, ensuring seamless cloud-based deployment, scalability, and automation for high-performance applications.",
  },
  {
    title: "Authentication & Role-Based Access Control (RBAC)",
    icon: "/rbac.png",
    description:
      "Proficient in implementing secure user authentication, fine-grained RBAC, and data protection to enforce access policies and enhance system security.",
  },
];

const Skills: React.FC = () => {
  const [currentSkills, setCurrentSkills] = useState(skillsData.slice(0, 7)); // Show first 7 skills

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkills((prev) => {
        const startIndex = skillsData.indexOf(prev[0]);
        const nextIndex = (startIndex + 7) % skillsData.length;
        return skillsData.slice(nextIndex, nextIndex + 7);
      });
    }, 6800); // Change every 6.8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f] to-transparent px-6 py-12">
      {/* Hero Text */}
      <h1 className="text-4xl font-bold text-teal-400 mt-22">My Skills</h1>
      <p className="text-gray-300 text-lg mb-12 text-center max-w-lg">
        I create backend solutions that are functional and built to last.
      </p>

      {/* Skill Categories */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-lg shadow-lg flex items-start space-x-4"
          >
            <Image
              src={category.icon}
              alt={category.title}
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-xl font-semibold text-teal-400">
                {category.title}
              </h3>
              <p className="text-gray-300 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Progress Bars */}
      <div className="mt-12 w-full max-w-3xl">
        {currentSkills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-[#040720] font-medium">{skill.name}</p>
            <div className="w-full bg-gray-700 h-4 rounded-md overflow-hidden">
              <div
                className={`${skill.color} h-4 transition-all duration-700`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
