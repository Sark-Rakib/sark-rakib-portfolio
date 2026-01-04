import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Pixel-perfect, responsive websites using React, Next.js, Tailwind, and modern frameworks.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, intuitive, and user-centered designs with Figma — focused on great experience.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "MERN Stack Solutions",
      description:
        "Full end-to-end web apps with MongoDB, Express, React, and Node.js.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
          />
        </svg>
      ),
    },
    {
      title: "Performance & SEO",
      description:
        "Lightning-fast websites with 95+ Lighthouse scores, lazy loading, and SEO optimization.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Responsive Design",
      description:
        "Flawless experience on mobile, tablet, and desktop — mobile-first approach.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing updates, bug fixes, new features, and reliable deployment support.",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#0f0f2f] via-[#0c0c1e] to-[#0a0a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
            What <span className="text-purple-400">I Do</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I help businesses and individuals bring their ideas to life with
            modern, fast, and beautiful web solutions.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, x: -90, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Gradient hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
