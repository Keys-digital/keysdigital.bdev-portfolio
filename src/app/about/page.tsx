"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0a192f] to-transparent overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 animate-moveBackground"
        style={{ backgroundImage: "url('/techbg.png')" }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 md:px-12">
        {/* Image Section */}
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/photo.me"
            alt="Light Ikoyo"
            width={288}
            height={288}
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="mt-8 md:mt-0 md:ml-12 text-white">
          <h1 className="text-4xl font-bold text-teal-400">Light Ikoyo</h1>
          <p className="text-xl text-gray-300 mt-2">
            I create backend solutions that are functional and built to last.
          </p>

          <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
            I am a Backend Software Engineer passionate about building secure,
            scalable, and high-performance applications with expertise in{" "}
            <span className="text-teal-400">
              Node.js, Express.js, MongoDB, and cloud-based deployments.
            </span>{" "}
            I thrive on solving complex problems, whether it’s designing RESTful
            APIs, implementing authentication & RBAC, or optimizing database
            performance for seamless data flow.
          </p>

          <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
            My experience spans{" "}
            <span className="text-teal-400">MERN stack development</span>,{" "}
            <span className="text-teal-400">DevOps practices</span>, and{" "}
            <span className="text-teal-400">CI/CD pipelines</span>, ensuring
            efficiency from development to deployment.
          </p>

          {/* Call to Action */}
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-teal-400 text-[#0a192f] font-semibold rounded shadow-lg hover:bg-teal-500 transition"
          >
            Work with Me!
          </Link>
        </div>
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes moveBackground {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-moveBackground {
          animation: moveBackground 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;
