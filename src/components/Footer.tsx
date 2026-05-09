"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DoodleStar } from "./Doodles";

const Footer = () => {
  const socialLinks = [
    { name: "khiredurgesh@gmail.com", href: "mailto:khiredurgesh@gmail.com", color: "bg-ink text-white" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/durgesh-khire2498/", color: "bg-pastel-blue text-ink" },
    { name: "Instagram", href: "https://www.instagram.com/durgesh.khire?igsh=eXJ4bjB1a3hoamZk", color: "bg-pastel-pink text-ink" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 relative"
    >
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-ink/10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <DoodleStar size={18} fill="#1a1a1a" />
            <span className="font-bold text-lg tracking-tight">Durgesh Khire</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`${link.color} px-4 py-2 text-xs font-bold border-2 border-ink rounded-sm sketch-btn`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-ink-light font-hand text-base">
            Copyright. Portfolio 2024
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
