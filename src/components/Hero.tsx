"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DoodleArrow,
  DoodleStar,
  DoodlePencil,
  DoodleHeart,
} from "./Doodles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Avatar + Heading */}
          <div className="lg:col-span-7">
            {/* Avatar Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              {/* Illustrated Avatar */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-pastel-pink border-2 border-ink overflow-hidden flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Hair */}
                    <path
                      d="M14 18C14 12 18 6 24 6C30 6 34 12 34 18C36 18 38 20 38 22C38 24 36 24 36 24L36 20C36 14 30 8 24 8C18 8 12 14 12 20L12 24C12 24 10 24 10 22C10 20 12 18 14 18Z"
                      fill="#1a1a1a"
                    />
                    {/* Face */}
                    <ellipse cx="24" cy="24" rx="12" ry="14" fill="#FDDCB5" />
                    {/* Eyes */}
                    <circle cx="20" cy="22" r="1.5" fill="#1a1a1a" />
                    <circle cx="28" cy="22" r="1.5" fill="#1a1a1a" />
                    {/* Smile */}
                    <path
                      d="M21 28C22 30 26 30 27 28"
                      stroke="#1a1a1a"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Blush */}
                    <circle cx="17" cy="26" r="2" fill="#F8BBD0" opacity="0.5" />
                    <circle cx="31" cy="26" r="2" fill="#F8BBD0" opacity="0.5" />
                    {/* Hair bangs */}
                    <path
                      d="M14 18C14 14 18 8 24 8C20 8 16 12 15 18Z"
                      fill="#1a1a1a"
                    />
                    <path
                      d="M18 16C19 12 22 8 24 8C21 8 18 11 17 16Z"
                      fill="#1a1a1a"
                    />
                  </svg>
                </div>
                {/* Doodle decoration */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <DoodleStar size={16} fill="#FFE066" />
                </motion.div>
              </div>

              {/* Name tag */}
              <div className="relative">
                <div className="bg-pastel-yellow px-3 py-1 border-2 border-ink rounded-sm font-hand text-lg font-bold -rotate-2">
                  Durgesh Khire
                </div>
                <DoodleArrow
                  className="absolute -bottom-10 -left-4 -rotate-45 opacity-60"
                  style={{ width: 50, height: 40 }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
            >
              I{" "}
              <span className="marker-highlight relative">
                design
                <motion.span
                  className="absolute -top-3 -right-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <DoodleStar size={18} fill="#FF6B9D" />
                </motion.span>
              </span>{" "}
              top
              <br />
              notch websites
            </motion.h1>

            {/* Doodle elements around heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <DoodlePencil
                className="absolute -top-16 right-24 hidden lg:block wiggle-animation"
                size={32}
              />
            </motion.div>
          </div>

          {/* Right Side - Intro Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-ink-light text-base leading-relaxed max-w-sm">
                Creative <span className="font-bold text-ink">Graphic Designer</span> and{" "}
                <span className="font-bold text-ink">UI Designer</span> with a passion for
                crafting visually engaging designs and user-friendly digital
                experiences. I specialize in branding, social media creatives,
                and modern UI designs that blend creativity with functionality.
              </p>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-ink text-white px-8 py-3.5 font-bold text-sm tracking-wide sketch-btn cursor-pointer"
              >
                Hire me
              </motion.a>

              {/* Decorative elements */}
              <div className="flex items-center gap-3 pt-4">
                <DoodleHeart size={16} />
                <span className="font-hand text-lg text-ink-light">
                  Let&apos;s create something beautiful
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating decorative stars */}
        <motion.div
          className="absolute top-32 right-12 hidden xl:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <DoodleStar size={14} fill="#BBDEFB" />
        </motion.div>
        <motion.div
          className="absolute top-48 right-32 hidden xl:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <DoodleStar size={10} fill="#E1BEE7" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
