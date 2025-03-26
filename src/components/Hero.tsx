import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-20 bg-[#0a192f] text-white text-center md:text-left">
      {/* Intro Text */}
      <div className="ml-12">
        <p className="text-teal-400 text-lg md:text-xl">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">Light Ikoyo.</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-teal-300 mt-2 max-w-xl relative">
          I craft backend systems that power seamless user experiences.
        </h2>
        <p className="text-gray-400 max-w-xl mt-4 leading-relaxed">
          Building scalable, secure, and high-performance backend solutions, I
          am a backend software engineer specializing in
          <strong>Node.js, Express.js, and MongoDB</strong>. From designing
          robust RESTful APIs to optimizing cloud-based deployments, I transform
          ideas into efficient, scalable applications.
          <span className="text-teal-400">
            Passionate about authentication, role-based access control (RBAC),
            and DevOps.
          </span>
        </p>
      </div>

      {/* Updated CTA Button with Next.js Link */}
      <Link href="/recentprojects">
        <button className="mt-6 ml-12 border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out">
          View My Recent Projects!
        </button>
      </Link>
    </section>
  );
};

export default Hero;
