"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="fixed top-0 left-0 w-full min-h-screen justify-center items-center overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-transparent z-0"></div>

      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 animate-moveBackground"
        style={{ backgroundImage: "url('/techbg.png')" }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 md:px-12">
        {/* Image Section - Centered Image */}
        <div className="mt-10 md:mt-[80px]">
          <div className="relative w-80 h-96  md:w-80 md:h-[340px] p-2 bg-[#e9dc93] rounded-lg border-5 border-gray-500 shadow-lg flex justify-center items-center">
            <Image
              src="/photo.me.png" // Ensure correct path and extension
              alt="Light Ikoyo"
              width={270} // Adjust image size to fit
              height={270} // Adjust image size to fit
              className="object-contain rounded-lg relative -mt-4 md:-mt-6 drop-shadow-[2px_2px_0px_rgba(31,41,55,1)] "
            />
          </div>
        </div>

        {/* Text Content - Improved Contrast */}
        <div className="mt-4 md:mt-0 md:ml-12 md:mt-[80px] text-white">
          <h1 className="text-4xl font-bold mt-20 md:mt-[80px] text-teal-300 text-white stroke-gray-800 drop-shadow-lg">
            Light Ikoyo
          </h1>
          <p className="text-xl text-gray-100 mt-2 font-medium text-white stroke-gray-800 drop-shadow-lg border-b-1 border-blue-400">
            I create backend solutions that are functional and built to last.
          </p>

          <p className="text-gray-300 mt-4 text-white stroke-gray-800 max-w-lg leading-relaxed drop-shadow-lg">
            I am a Backend Software Engineer passionate about building secure,
            scalable, and high-performance applications with expertise in{" "}
            <span className="text-gray-900 font-semibold">
              Node.js, Express.js, MongoDB, and cloud-based deployments.
            </span>{" "}
            I thrive on solving complex problems, whether it’s designing RESTful
            APIs, implementing authentication & RBAC, or optimizing database
            performance for seamless data flow.
          </p>

          <p className="text-gray-900 mt-4 text-white stroke-gray-800 max-w-lg leading-relaxed drop-shadow-lg">
            My experience spans{" "}
            <span className="text-gray-900 font-semibold">
              MERN stack development
            </span>
            ,{" "}
            <span className="text-gray-900 font-semibold">
              DevOps practices
            </span>
            , and{" "}
            <span className="text-gray-900 font-semibold">CI/CD pipelines</span>
            , ensuring efficiency from development to deployment.
          </p>

          {/* Call to Action */}
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded shadow-lg border-2 border-yellow-300
  hover:bg-teal-900 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
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
