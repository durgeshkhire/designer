"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DoodleStar } from "./Doodles";

const projects = [
  {
    title: "Portfolio Design",
    subtitle: "A style Portfolio design",
    image: "/landingpagetemp.gif",
    tag: "No-Code",
    tagColor: "bg-marker-pink text-white",
    rotation: "rotate-0",
  },
  {
    title: "Forest Day Banner",
    subtitle: "Forest Day Banner",
    image: "/forestday-banner.png",
    tag: "Graphic Design",
    tagColor: "bg-pastel-blue text-ink",
    rotation: "rotate-0",
  },
  {
    title: "Presentation Design",
    subtitle: "Presentation Design",
    image: "/indradhanu.jpg",
    tag: "UX Design",
    tagColor: "bg-pastel-purple text-ink",
    rotation: "rotate-0",
    href: "https://canva.link/4y58yxnbjtf3afs",
  },
  {
    title: "WeLabs UI Design",
    subtitle: "WeLabs UI Design",
    image: "/project-weLabs.png",
    tag: "UI Design",
    tagColor: "bg-pastel-green text-ink",
    rotation: "rotate-0",
    href: "https://welabs.in/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side Label */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <div className="section-label bg-pastel-pink mb-6">
                Featured Projects
              </div>

              {/* Doodle */}
              <motion.div
                className="my-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5C10 10 5 15 8 25C10 30 15 28 15 23C15 18 10 17 8 22"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M6 20L8 22L10 18"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </motion.div>

              <p className="text-ink-light text-sm leading-relaxed font-hand text-xl">
                Have designed more than{" "}
                <span className="font-bold text-ink marker-highlight-yellow">
                  20 projects
                </span>
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  className="group cursor-pointer"
                >
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <div
                        className={`sticky-note bg-white ${project.rotation} overflow-hidden`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized={project.image.endsWith(".gif")}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-hand text-xl font-bold mb-2">
                            {project.subtitle}
                          </h3>
                          <span
                            className={`pill-tag ${project.tagColor} border border-ink/20`}
                          >
                            {project.tag}
                          </span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className={`sticky-note bg-white ${project.rotation} overflow-hidden`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          unoptimized={project.image.endsWith(".gif")}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-hand text-xl font-bold mb-2">
                          {project.subtitle}
                        </h3>
                        <span
                          className={`pill-tag ${project.tagColor} border border-ink/20`}
                        >
                          {project.tag}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <DoodleStar size={12} fill="#FFE066" />
            <DoodleStar size={8} fill="#F8BBD0" />
            <DoodleStar size={12} fill="#BBDEFB" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
