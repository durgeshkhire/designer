"use client";

import React from "react";
import { motion } from "framer-motion";
import { DoodleCurlyArrow, DoodleStar } from "./Doodles";

const services = [
  {
    title: "Graphic Design",
    color: "bg-pastel-yellow",
    borderColor: "border-ink",
    rotation: "-rotate-2",
    floatingTag: "Adobe Photoshop/ Canva",
    tagColor: "bg-pastel-orange",
    tagPosition: "-top-4 -right-2",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="14" r="6" stroke="#1a1a1a" strokeWidth="2" fill="#FFF9C4" />
        <path
          d="M8 30C8 24 12 20 18 20C24 20 28 24 28 30"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="26" cy="10" r="4" stroke="#1a1a1a" strokeWidth="1.5" fill="#FFE066" />
        <path d="M26 8V12M24 10H28" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "UI & Product Design",
    color: "bg-pastel-blue",
    borderColor: "border-ink",
    rotation: "rotate-1",
    floatingTag: "Figma",
    tagColor: "bg-pastel-purple",
    tagPosition: "-top-4 left-1/2 -translate-x-1/2",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="4" width="24" height="28" rx="3" stroke="#1a1a1a" strokeWidth="2" fill="#BBDEFB" />
        <rect x="10" y="10" width="16" height="10" rx="2" stroke="#1a1a1a" strokeWidth="1.5" fill="#90CAF9" />
        <line x1="10" y1="25" x2="20" y2="25" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="28" x2="16" y2="28" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    color: "bg-pastel-pink",
    borderColor: "border-ink",
    rotation: "-rotate-1",
    floatingTag: "DaVinci Resolve",
    tagColor: "bg-pastel-blue",
    tagPosition: "-top-4 -right-2",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="6" width="28" height="20" rx="3" stroke="#1a1a1a" strokeWidth="2" fill="#F8BBD0" />
        <path d="M12 16L16 20L12 24" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="24" x2="24" y2="24" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="30" x2="24" y2="30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="section-label bg-pastel-yellow">What I do?</div>
          <DoodleCurlyArrow className="opacity-40 hidden md:block" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                rotate: 0,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className={`sticky-note ${service.color} ${service.rotation} p-8 relative cursor-default`}
            >
              {/* Floating Tag */}
              <div
                className={`floating-tag ${service.tagColor} absolute ${service.tagPosition} z-10`}
              >
                {service.floatingTag}
              </div>

              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="font-hand text-2xl font-bold leading-tight">
                {service.title}
              </h3>

              {/* Decorative star */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <DoodleStar size={16} fill="#1a1a1a" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
