import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2025 – Present",
      // description:
      //   "Building full-stack web applications using React, Node.js, Express, MongoDB, and Firebase. Focused on creating fast, responsive, and modern user experiences with clean code and pixel-perfect design.",
      description:
        "Entry-level frontend developer focused on learning modern tools like React & Tailwind by building practical, real projects.",
      current: true,
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Self-Taught & Open Source",
    //   location: "Worldwide",
    //   period: "2022 – 2023",
    //   description:
    //     "Mastered React, Tailwind CSS, Next.js, and modern frontend tools. Built 10+ real-world projects including e-commerce, dashboards, news portals, and AI tools. Contributed to open-source and learned best practices.",
    // },
    // {
    //   title: "Web Development Journey",
    //   company: "Learning Phase",
    //   location: "Bangladesh",
    //   period: "2021 – 2022",
    //   description:
    //     "Started with HTML, CSS, JavaScript → Learned React → Explored backend with Node.js & MongoDB → Built full-stack MERN projects → Deployed on Netlify, Vercel, and Render.",
    // },
  ];

  return (
    <section
      id="experience"
      className="py-10 bg-gradient-to-b from-[#0a0a1a] via-[#0c0c1e] to-[#0f0f2f]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
            My <span className="text-purple-400">Journey</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From learning the basics to building full-stack applications —
            here's how I grew
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start mb-16 last:mb-0 group"
            >
              {/* Dot */}
              <div className="flex-shrink-0 w-16 h-16 relative">
                <div
                  className={`absolute top-3 left-8 w-5 h-5 rounded-full border-4 border-[#0c0c1e] shadow-2xl transition-all duration-500
                    ${
                      exp.current
                        ? "bg-gradient-to-br from-purple-500 to-cyan-500 animate-pulse ring-4 ring-purple-500/30"
                        : "bg-gray-600"
                    }`}
                ></div>
                {exp.current && (
                  <span className="absolute -top-10 left-0 text-xs font-bold text-cyan-400 whitespace-nowrap animate-pulse">
                    Current
                  </span>
                )}
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className="ml-8 md:ml-12 flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 
                hover:bg-white/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-purple-400 mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-purple-500/30 text-purple-300 text-sm font-medium rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
