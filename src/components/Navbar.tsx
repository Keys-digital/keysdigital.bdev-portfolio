"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-4">
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
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-20 inset-x-0 bg-[#0a192f] z-10 md:hidden px-10 py-6 flex flex-col gap-y-4">
          <Link
            href="/about"
            className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
