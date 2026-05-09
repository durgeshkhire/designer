"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DoodleStar, DoodleHeart } from "./Doodles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-ink/10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label bg-marker-pink text-white mb-6">
                Contact here
              </div>

              {/* Doodle */}
              <motion.div
                className="my-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <DoodleHeart size={28} />
              </motion.div>

              <p className="font-hand text-2xl leading-snug">
                Have a project idea?
                <br />
                just say me{" "}
                <span className="marker-highlight font-bold">Hi</span>.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-8">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 max-w-lg"
            >
              {/* Name Field */}
              <div className="relative">
                <label className="inline-block mb-2">
                  <span className="floating-tag bg-pastel-yellow text-sm">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Zamir Niko"
                  className="sketch-input"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="inline-block mb-2">
                  <span className="floating-tag bg-pastel-blue text-sm">
                    Your email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mr.niko12@gmail.com"
                  className="sketch-input"
                  required
                />
              </div>

              {/* Project Field */}
              <div className="relative">
                <label className="inline-block mb-2">
                  <span className="floating-tag bg-pastel-pink text-sm">
                    About Project
                  </span>
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="I want to discuss about..."
                  className="sketch-input"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ink text-white px-8 py-3.5 font-bold text-sm tracking-wide sketch-btn cursor-pointer flex items-center gap-2"
              >
                Send Here
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Decorative */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <DoodleStar size={10} fill="#FFE066" />
            <DoodleStar size={8} fill="#BBDEFB" />
            <DoodleStar size={12} fill="#F8BBD0" />
            <DoodleStar size={8} fill="#E1BEE7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
