"use client";

import React from "react";
import { motion } from "framer-motion";
import { DoodleStar } from "./Doodles";

const experiences = [
  {
    number: "1",
    role: "Design Intern",
    company: "WeLabs Pvt Ltd",
    description:
      "Worked on creating dynamic mobile interfaces for enterprise clients.",
    color: "bg-pastel-yellow",
    period: "OCT 2025 - APR 2026",
    preposition: "at",
  },
  {
    number: "2",
    role: "Master's of Computer Application",
    company: "IMCC College Pune",
    description:
      "Product Design, UI/UX Design",
    color: "bg-pastel-blue",
    period: "2023 - 2025",
    preposition: "from",
  },
  {
    number: "3",
    role: "Bachelor of Computer Applications",
    company: "M.E.S Senior College, Pune",
    description:
      "Web Design, Graphic Design",
    color: "bg-pastel-pink",
    period: "2020 - 2023",
    preposition: "from",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-ink/10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <div className="section-label bg-pastel-purple mb-6">
                Work Experience and Education
              </div>

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

              <p className="font-hand text-xl text-ink-light">
                Have been designing since my{" "}
                <span className="font-bold text-ink marker-highlight-green">
                  past 4 years
                </span>
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/15 hidden lg:block" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.number}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Number Badge */}
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className={`sticky-note ${exp.color} w-14 h-14 flex items-center justify-center flex-shrink-0 z-10`}
                    >
                      <span className="font-hand text-2xl font-bold">
                        {exp.number}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <span className="text-ink-light text-sm">
                          {exp.preposition}{" "}
                          <span className="font-semibold text-ink">
                            {exp.company}
                          </span>
                        </span>
                      </div>
                      <p className="text-ink-light text-sm leading-relaxed mb-2">
                        {exp.description}
                      </p>
                      <span className="font-hand text-sm text-ink-light">
                        {exp.period}
                      </span>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-[22px] top-6 timeline-dot hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <DoodleStar size={10} fill="#E1BEE7" />
            <DoodleStar size={14} fill="#FFE066" />
            <DoodleStar size={10} fill="#F8BBD0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
