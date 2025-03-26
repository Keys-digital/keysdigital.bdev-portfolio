import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-10 bg-[#0a192f] px-10 py-6 flex justify-between items-center">
      {/* Logo with Link */}
      <Link href="/">
        <Image
          src="/logo.png" // Ensure this file is in `/public`
          alt="Logo"
          width={60} // Adjust size as needed
          height={60}
          className="drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Navbar Links */}
      <div className="flex gap-x-4">
        <Link
          href="/about"
          className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
        >
          About
        </Link>
        <Link
          href="/skills"
          className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
        >
          Contact
        </Link>

        {/* View Resume Button (opens in a new tab) */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
        >
          View Resume
        </a>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
