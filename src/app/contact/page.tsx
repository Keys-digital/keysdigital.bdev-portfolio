"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

//  Form Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .regex(/^\d{10,15}$/, "Enter a valid phone number (10-15 digits)"),
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

//  TypeScript Type Inference
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (formData: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <motion.div
        className="min-h-screen text-white flex flex-col items-center justify-start px-6 lg:px-24 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: "url('/techbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          animation: "moveBackground 30s infinite linear",
        }}
      >
        <style>{`
        @keyframes moveBackground {
          0% { background-position: center top; }
          50% { background-position: center center; }
          100% { background-position: center bottom; }
        }
      `}</style>

        {/*  Two-Column Layout */}
        <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12 py-12">
          {/*  Left Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold tracking-wider uppercase mt-35 text-white stroke-gray-800 drop-shadow-[2px_2px_0px_rgba(31,41,55,1)] glow-gold">
              LIGHT IKOYO
            </h1>
            <h2 className="text-3xl font-extrabold tracking-wider mt-2 text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)] glow-gold">
              Backend Software Engineer
            </h2>

            {/*  Selling Skills Section */}
            <section className="mt-6 w-full max-w-2xl">
              <div className="bg-teal-900/60 border border-teal-600 rounded-lg p-6 shadow-lg backdrop-blur-md">
                {/*  Skill List */}
                <ul className="space-y-4">
                  {/*  Cloud-Native Development */}
                  <li className="flex items-center gap-4">
                    <Image
                      src="/cloud-native.png"
                      alt="Cloud Native"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-xl font-bold text-gray-200 text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)]">
                      Cloud-Native Development & DevOps
                      <span className="text-blue-300">
                        {" "}
                        (AWS, Kubernetes, Docker, CI/CD)
                      </span>
                    </span>
                  </li>

                  {/*  Scalable System Design */}
                  <li className="flex items-center gap-4">
                    <Image
                      src="/scalability.png"
                      alt="Scalability"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-xl font-bold text-gray-200 text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)]">
                      Scalable & High-Performance System Design
                    </span>
                  </li>

                  {/*  Security & Authentication */}
                  <li className="flex items-center gap-4">
                    <Image
                      src="/cyber-security.png"
                      alt="Cyber Security"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-xl font-bold text-gray-200 text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)]">
                      Security & Authentication
                      <span className="text-blue-300">
                        {" "}
                        (OAuth, JWT, Zero Trust Security)
                      </span>
                    </span>
                  </li>
                </ul>

                {/*  Description */}
                <p className="mt-6 text-gray-300 text-lg leading-relaxed text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)]">
                  Build{" "}
                  <strong>
                    scalable, secure, and cloud-optimized backend systems
                  </strong>
                  with high-performance APIs, advanced authentication{" "}
                  <span className="text-blue-300">(OAuth, JWT, RBAC)</span>, and
                  cloud-native deployment using{" "}
                  <span className="text-blue-300">AWS, Docker, and CI/CD</span>.
                  Ensure <strong>reliability, security, and efficiency</strong>{" "}
                  for seamless business operations.
                </p>

                {/*  Contact Information */}
                <p className="mt-4 text-gray-200 text-lg text-white stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)]">
                  Interested? Reach out via email at&nbsp;
                  <a
                    href="mailto:your.email@example.com"
                    className="text-yellow-400 text-xl hover:underline"
                  >
                    eseogheneikoyo23@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/*  Contact Info */}
            <div className="mt-0.5 bg-teal-900/60 border border-teal-600 text-xl text-white text-center p-6 rounded-lg shadow-lg max-w-x1 mx-auto">
              <p>keysdigitalcreations@gmail.com</p>
              <p>
                GitHub:{" "}
                <Link
                  href="https://github.com/Keys-digital/"
                  className="text-blue-300 text-xl stroke-gray-800 drop-shadow-[1px_1px_0px_rgba(31,41,55,1)] hover:underline"
                >
                  Keys Digital
                </Link>
              </p>
            </div>

            {/*  Call to Action Button */}
            <div className="mt-4 flex justify-center">
              <Link href="/projects">
                <button className="bg-gray-800 text-white border-2 border-yellow-400 px-6 py-3 rounded-md transition duration-300 transform hover:border-yellow-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(255,215,0,0.6)]">
                  View My Work
                </button>
              </Link>
            </div>
          </motion.div>

          {/*  Right Section: Contact Form & Girl Image */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/*  Girl Image */}
            <div className="relative w-[400px] h-[400px] mb-30">
              <Image
                src="/digitalgirl.png"
                fill
                style={{ objectFit: "cover" }}
                alt="A girl using a laptop surrounded by digital icons"
              />
            </div>

            {/*  Contact Form */}
            <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[420px] mt-[-135]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/*  Name Field */}
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm">Name</span>
                  <input
                    type="text"
                    {...register("name")}
                    className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </label>

                {/*  Phone Number Field */}
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm">Phone Number</span>
                  <input
                    {...register("phone")}
                    className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
                    placeholder="Connect with me on WhatsApp"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">
                      {errors.phone.message}
                    </span>
                  )}
                </label>

                {/*  Email Field */}
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm">Email</span>
                  <input
                    {...register("email")}
                    className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </label>

                {/*  Message Field */}
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm">
                    Message (Optional)
                  </span>
                  <textarea
                    {...register("message")}
                    className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 h-16 resize-none focus:border-blue-500"
                    placeholder="Your message here"
                  />
                </label>

                {/*  Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition mt-2 disabled:bg-blue-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "GET IN TOUCH"}
                </button>
              </form>

              {/*  Success Message */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-400 text-center"
                >
                  Message Sent Successfully!
                </motion.p>
              )}
            </section>
          </motion.div>
        </section>

        {/*  Statistics Section */}
        <section className="relative w-screen bg-gray-900 text-white py-4 mt-16 border-t border-gray-500">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
            <div className="text-gray-300">
              <h3 className="text-3xl font-extrabold text-white drop-shadow-md">
                10+
              </h3>
              <p className="text-lg text-gray-400">Projects Completed</p>
            </div>
            <div className="text-gray-300">
              <h3 className="text-3xl font-extrabold text-white drop-shadow-md">
                12+
              </h3>
              <p className="text-lg text-gray-400">Client Feedbacks</p>
            </div>
            <div className="text-gray-300">
              <h3 className="text-2xl font-extrabold text-white drop-shadow-md">
                50+
              </h3>
              <p className="text-lg text-gray-400">Users Engaged</p>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
