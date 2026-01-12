import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 40 },
    { name: "JavaScript ", level: 85 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Node.js / Express", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "Firebase", level: 88 },
    { name: "Git & GitHub", level: 92 },
  ];

  // FULL-COLOR OFFICIAL LOGOS
  const techLogos = [
    "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  ];

  // Duplicate enough times for TRUE seamless infinite loop
  const infiniteLogos = [
    ...techLogos,
    ...techLogos,
    ...techLogos,
    ...techLogos,
    ...techLogos,
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0a0a1a] via-[#0c0c1e] to-[#0f0f2f]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
            My <span className="text-purple-400">Skills</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I use to build fast, modern, and beautiful web
            applications
          </p>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-gray-300 mb-3">
                <span className="font-medium">{skill.name}</span>
                <span className="text-purple-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 skew-x-12 animate-shine"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PERFECT INFINITE MARQUEE - FULL COLOR */}
        <div className="relative overflow-hidden py-16 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10">
          <h2 className="text-center text-3xl font-bold text-white mb-12 relative tracking-tight">
            Tech <span className="text-purple-400">Stack</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "142px" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-9 left-1/2 -translate-x-1/2  h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>

          <div className="marquee-wrapper">
            <div className="marquee-content">
              {infiniteLogos.map((logo, i) => (
                <div key={i} className="marquee-item">
                  <img
                    src={logo}
                    alt="Tech logo"
                    className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl 
                               hover:scale-125 hover:-rotate-6 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-content">
              {infiniteLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="marquee-item">
                  <img
                    src={logo}
                    alt="Tech logo"
                    className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl 
                               hover:scale-125 hover:-rotate-6 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a1a] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0f0f2f] to-transparent"></div>
        </div>
      </div>

      {/* 100% SMOOTH INFINITE LOOP CSS */}
      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          animation: scroll 40s linear infinite;
        }
        .marquee-item {
          flex: 0 0 auto;
          padding: 0 3.5rem;
          display: flex;
          align-items: center;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }
        .animate-shine {
          animation: shine 2.5s infinite linear;
        }
      `}</style>
    </section>
  );
}
