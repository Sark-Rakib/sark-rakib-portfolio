import React from "react";
import { motion } from "framer-motion";

// Social icons data
const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rakib-sarker-",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: "bg-blue-700/40 hover:bg-blue-700/60",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rakib__sarker/?hl=en",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color:
      "bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-700/60 hover:to-pink-700/60",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/Cap_tain01",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "bg-gray-900/50 hover:bg-gray-900/70",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/01745762857",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-2.319 0-4.602-.463-6.796-1.364l-.487-.28-4.782.496.506-4.734-.28-.487c-.945-2.194-1.444-4.576-1.444-7.061 0-7.293 5.932-13.227 13.228-13.227 3.527 0 6.847 1.376 9.342 3.871 2.495 2.495 3.871 5.815 3.871 9.342 0 7.293-5.932 13.227-13.228 13.227m7.64-19.955c-2.994-2.994-6.979-4.643-11.207-4.643-8.727 0-15.82 7.093-15.82 15.82 0 2.794.726 5.519 2.102 7.891l-2.244 8.35 8.564-2.225c2.323 1.265 4.92 1.935 7.598 1.935 8.728 0 15.82-7.093 15.82-15.82-.001-4.228-1.65-8.213-4.643-11.206" />
      </svg>
    ),
    color: "bg-green-600/40 hover:bg-green-600/60",
  },
  {
    name: "Gmail",
    url: "mailto:mdrakibsarkar1@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.163-.8.438-1.1.45-.475.975-.7 1.562-.7H3l9 6.463L21 4H21.938c.588 0 1.113.225 1.562.7.275.3.438.675.438 1.1z" />
      </svg>
    ),
    color: "bg-red-600/40 hover:bg-red-600/60",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-b from-[#0a0a1a] via-[#0c0c1e] to-[#0f0f2f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
          Let's <span className="text-purple-400">Contact</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "98%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-9 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-1 bg-gradient-to-r from-purple-500 rounded-full"
          />
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Feel free to reach out — I'm always open to discussing new projects,{" "}
          <br />
          ideas, or opportunities.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer transition-transform duration-500 transform hover:scale-110 hover:-rotate-6 ${social.color}`}
              aria-label={social.name}
            >
              <div className="text-white">{social.icon}</div>
              {/* Hover overlay for extra glow */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>

        <p className="mt-16 text-gray-500 text-base sm:text-lg">
          © 2026 Rakib Sarker. All rights reserved.
        </p>
      </div>
    </section>
  );
}
