"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DoodleStar } from "./Doodles";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <DoodleStar size={20} fill="#1a1a1a" />
          </motion.div>
          <span className="font-bold text-lg tracking-tight">Durgesh Khire</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            href="#projects"
            className="text-sm font-medium text-ink-light hover:text-ink transition-colors relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marker-pink group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium bg-ink text-white px-5 py-2 sketch-btn"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
