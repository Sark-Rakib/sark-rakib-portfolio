import React from "react";
import { motion } from "framer-motion";
// import {
//   SiJavascript,
//   SiTailwindcss,
//   SiMongodb,
//   SiFirebase,
// } from "react-icons/si";
// import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

export default function Skills() {
  // const skills = [
  //   { name: "React.js", icon: <FaReact /> },
  //   { name: "JavaScript", icon: <SiJavascript /> },
  //   { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  //   { name: "Node.js", icon: <FaNodeJs /> },
  //   { name: "MongoDB", icon: <SiMongodb /> },
  //   { name: "Firebase", icon: <SiFirebase /> },
  //   { name: "Git", icon: <FaGitAlt /> },
  //   { name: "GitHub", icon: <FaGithub /> },
  // ];

  return (
    <section
      id="skills"
      className="py-10 bg-linear-to-b from-[#0a0a1a] via-[#0c0c1e] to-[#0f0f2f]"
    >
      {/* Tech Stack Marquee */}
      <div className="relative overflow-hidden py-10 text-center">
        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
          Tech <span className="text-purple-400 ">Stack</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "95%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r from-purple-500 rounded-full"
          />
        </h2>

        <div className="mt-15 overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {[
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
            ]
              .concat([
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
              ])
              .map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="tech"
                  className="h-14 md:h-16 w-auto object-contain"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
