import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/IMG_20250905_174354610_HDR_AEabou-removebg-preview.png";

export default function About() {
  // Variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const facts = [
    { label: "Location", value: "Bangladesh" },
    { label: "Experience", value: "Fresher+" },
    { label: "Availability", value: "Open to Work", color: "text-green-400" },
    { label: "Freelance", value: "Available", color: "text-cyan-400" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0c0c1e] to-[#0f0f2f] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 tracking-tight relative inline-block">
            About <span className="text-purple-400">Me</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A little bit about who I am and what drives me
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Floating + Tilt on Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ rotate: 3, scale: 1.03 }}
              className="relative group cursor-pointer"
            >
              {/* Dynamic Glow */}
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-1 bg-purple-600 rounded-3xl blur-xl opacity-40"
              />

              {/* Profile Image */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img
                  src={ProfilePic}
                  alt="Rakib Sarker"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Floating Orbs */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <motion.h3
              variants={item}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Hi, I'm <span className="text-purple-400">Rakib Sarker</span>
            </motion.h3>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              {[
                "I'm a passionate MERN Stack Developer who loves turning ideas into beautiful, functional, and lightning-fast digital experiences.",
                "I specialize in React, Node.js, and modern web technologies to build products that people love to use — from pixel-perfect UIs to scalable backend systems.",
                "When I'm not coding, you’ll find me exploring new tech, designing clean UIs in Figma, contributing to open-source, or helping junior developers grow.",
                "I believe in writing clean, maintainable code and creating interfaces that work flawlessly on every device. Every project is a chance to learn, improve, and deliver something exceptional.",
              ].map((paragraph, i) => (
                <motion.p key={i} variants={item} className="opacity-90">
                  {paragraph.split("MERN Stack Developer")[0]}
                  {i === 0 && (
                    <span className="text-purple-400 font-semibold">
                      MERN Stack Developer
                    </span>
                  )}
                  {paragraph.split("MERN Stack Developer")[1] || paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick Facts Cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center shadow-lg"
                >
                  <p className="text-sm text-gray-400">{fact.label}</p>
                  <p
                    className={`font-bold text-lg mt-1 ${
                      fact.color || "text-white"
                    }`}
                  >
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-purple-500/30 text-purple-300 font-bold text-lg rounded-full shadow-xl"
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
