"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Contact Me
        </motion.h1>
        <p className="mt-4 text-gray-300">
          Let’s build something great together! 🚀
        </p>
        <Image
          src="/digitalgirl.png"
          alt="Contact"
          width={300}
          height={300}
          className="mt-6 rounded-lg"
        />
      </section>

      {/* Contact Form Section */}
      <section className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-300">Name</span>
            <input {...register("name")} className="input-field" />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-300">Phone Number</span>
            <input {...register("phone")} className="input-field" />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-300">Email</span>
            <input {...register("email")} className="input-field" />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-300">Message (Optional)</span>
            <textarea
              {...register("message")}
              className="input-field resize-none h-28"
            ></textarea>
          </label>

          <button
            type="submit"
            className="btn-primary mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "GET IN TOUCH"}
          </button>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-400"
          >
            ✅ Message Sent Successfully!
          </motion.p>
        )}
      </section>

      {/* Additional Contact Information */}
      <section className="text-center mt-10">
        <p className="text-gray-400">Email: keysdigitalcreations@gmail.com</p>
        <p className="text-gray-400">
          GitHub:{" "}
          <a href="https://github.com/Keys-digital/" className="text-blue-400">
            Keys Digital
          </a>
        </p>
      </section>
    </div>
  );
}
