"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ProjectMilestones from "@/components/ProjectMilestones";
import LiveUpdateFeed from "@/components/LiveUpdateFeed";
import TechStackBadges from "@/components/TechStackBadges";
import ProjectGallery from "@/components/ProjectGallery";
import { useState, useEffect } from "react";

const RecentProjects = () => {
  // Apply slight zoom effect to logo
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prev) => !prev);
    }, 3000); // Zoom effect every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-black">
        {/* Background Image */}
        <Image
          src="/backenddev.png"
          alt="Backend Development"
          layout="fill"
          style={{ objectFit: "cover" }}
          className="opacity-40"
        />

        {/* Hero Text */}
        <div className="absolute text-center">
          <h1 className="text-4xl font-bold text-white">Recent Projects</h1>
          <p className="text-lg text-gray-300">
            Engineering Scalable Solutions – From Code to Deployment
          </p>
        </div>

        {/* Logo & Motto Section (Positioned Correctly) */}
        <div className="absolute top-67 right-8 flex flex-col items-center">
          <Image
            src="/shopinkeyslogo.png"
            alt="ShopInKeys Logo"
            width={100}
            height={100}
            className={`transition-transform duration-500 ${
              zoom ? "scale-105" : "scale-100"
            }`}
          />
          <p className="text-white text-sm font-normal mt-2 text-center italic">
            &quot;Think Keys, Shop Strategically&quot;
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">
          Featured Projects
        </h2>

        {/* ShopInKeys Project */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <Image
            src="/shopinkeysbanner.png"
            alt="ShopInKeys Banner"
            width={1200}
            height={500}
            className="rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-2xl font-bold">
              ShopInKeys – The Ultimate Tech & Wellness Affiliate Hub
            </h3>
            <p className="text-gray-400 italic">
              &quot;Empowering Smart Shopping &amp; Wellness Through Tech-Driven
              Insights&quot;
            </p>
            <p className="mt-4 text-gray-300">
              In the growing world of wearable tech and wellness, consumers
              struggle to find trusted insights. ShopInKeys is a{" "}
              <strong>one-stop platform</strong> integrating expert reviews,
              community engagement, and seamless affiliate shopping to enhance
              decision-making.
            </p>
          </div>

          {/* Live Updates & Milestones */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold">Development Status</h4>
            <LiveUpdateFeed />
            <ProjectMilestones />
          </div>

          {/* Tech Stack Badges */}
          <TechStackBadges
            stack={[
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "AWS",
              "Docker",
            ]}
          />

          {/* Screenshot Gallery (ShopInKeys Logo Removed) */}
          <ProjectGallery
            images={[
              "/promopix.png",
              "/techworkspace.png",
              "/codingui.png",
              "/dashboardui.png",
              "/e-commerce.png",
              "/softwaremockup.png",
              "/affiliatemarketing.png",
            ]}
          />

          {/* Links & CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://github.com/Keys-digital/shopinkeys"
              target="_blank"
              className="flex items-center bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </Link>

            {/* Keys Digital Portfolio Project */}
            <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
              <Image
                src="/keysdevportfoliohomepage.png"
                alt="Keys Digital Portfolio hompage image"
                width={1200}
                height={500}
                className="rounded-lg"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold">
                  Portfolio Website – Keys Digital Portfolio
                </h3>
                <p className="text-gray-400 italic">
                  &quot;Showcasing My Work, Skills, and Expertise&quot;
                </p>
                <p className="mt-4 text-gray-300">
                  This portfolio is built to highlight my latest projects,
                  technical skills, and contact details. Designed with a
                  **modern UI/UX**, it offers a **smooth user experience**,
                  **performance optimization**, and full **mobile
                  responsiveness**.
                </p>
              </div>

              {/* Live Updates & Milestones */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold">Development Status</h4>
                <LiveUpdateFeed />
                <ProjectMilestones />
              </div>

              {/* Tech Stack Badges */}
              <TechStackBadges
                stack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ]}
              />

              {/* Screenshot Gallery */}
              <ProjectGallery
                images={[
                  "/keysdevportfolio.png",
                  "/keysdevportfolio.1.png",
                  "/keysdevportfolio.2.png",
                  "/keysdevportfolio.3.png",
                  "/keysdevportfolio.4.png",
                  "/keysdevportfolio.7.png",
                ]}
              />

              {/* Links & CTA */}
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://github.com/Keys-digital/keys.dev-portfolio"
                  target="_blank"
                  className="flex items-center bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </Link>
                <Link
                  href="https://keysdevportfolio.netlify.app/"
                  target="_blank"
                  className="bg-green-600 px-6 py-2 rounded-md text-white hover:bg-green-500 transition"
                >
                  Live Demo
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentProjects;
