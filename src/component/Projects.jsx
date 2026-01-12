import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "ZapShift E-Commerce",
      description:
        "Full-stack online store with cart, Stripe payments, and admin dashboard.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://i.ibb.co.com/zWTpQGh3/Screenshot-2025-12-08-024406.png",
      featured: true,
    },
    {
      title: "AI - Model",
      description:
        "Advanced machine intelligence that delivers accurate and reliable predictions.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://ai-model-dev.netlify.app/",
      githubUrl: "https://github.com/Sark-Rakib/ai-model-client",
      image: "https://i.ibb.co.com/qFPVMJfv/Screenshot-2025-12-08-015911.png",
    },
    {
      title: "Tree Shop",
      description: "Modern plant shop with fresh delivery and gardening tools.",
      tech: ["React", "AOS", "Tailwind", "Firebase"],
      liveUrl: "https://buildtree-shop.netlify.app/",
      githubUrl: "https://github.com/Sark-Rakib/Tree-Shop",
      image: "https://i.ibb.co.com/RGP3M1GX/Screenshot-2025-12-08-020819.png",
    },
    {
      title: "Dragon News",
      description: "Fast, reliable news portal with real-time updates.",
      tech: ["React", "AOS", "Tailwind", "Firebase"],
      liveUrl: "https://dragonsnews.netlify.app/",
      githubUrl: "https://github.com/Sark-Rakib/The-Dragon-News",
      image: "https://i.ibb.co.com/TMJnZBRL/Screenshot-2025-12-08-020451.png",
    },
    {
      title: "Hero App",
      description: "Task management app with charts and productivity tools.",
      tech: ["React", "ReChart", "Tailwind"],
      liveUrl: "https://herooapps.netlify.app/",
      githubUrl: "https://github.com/Sark-Rakib/My-Hero-App",
      image: "https://i.ibb.co.com/zh65PbM0/Screenshot-2025-12-08-020617.png",
    },
    {
      title: "Green Earth",
      description: "Eco-friendly website promoting sustainable living.",
      tech: ["HTML", "Tailwind", "JavaScript"],
      liveUrl: "https://sark-rakib.github.io/Green-Earth/",
      githubUrl: "https://github.com/Sark-Rakib/Green-Earth",
      image: "https://i.ibb.co.com/xtRFQdKt/Screenshot-2025-12-08-015750.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0f0f2f] via-[#0c0c1e] to-[#0a0a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
            Featured <span className="text-purple-400">Projects</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "99%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent works that I'm really proud of.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl
                ${project.featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
              style={project.featured ? { height: "600px" } : {}}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 lg:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Clean & Beautiful Buttons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-10 py-2 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-purple-500/30 text-purple-300 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-purple-400 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-purple-500/30 text-purple-300 text-xs font-bold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 text-sm rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center mt-15"
        >
          <p className="text-lg text-purple-400 flex items-center justify-center gap-2 ">
            Want to see more? Check out my{" "}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-7 left-1/2 -translate-x-1/2  h-1 bg-gradient-to-r from-purple-500 rounded-full"
            />
            <a
              href="https://github.com/Sark-Rakib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 flex items-center gap-1 text-2xl"
            >
              <FaGithub className="bg-purple-500 text-black rounded-full p-1 hover:text-white" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
