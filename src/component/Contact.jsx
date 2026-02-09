import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-7 h-7"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339-1.4 267.8-21.9 208.3 1.2c-59.4 23.1-102.1 79.6-102.8 142.5-.5 52.7 24.8 102 65.1 133.9L64 448l172.3-81.1c31.9 18.6 68.1 29.5 104.4 30.2 63.2.9 122.2-34.2 147.1-91.2 24.9-57 14-123.2-29.3-167.8zm-156.9 294.1c-55.5 0-100.5-45-100.5-100.5s45-100.5 100.5-100.5 100.5 45 100.5 100.5-45 100.5-100.5 100.5zm52.1-69.3l-27.7-12.6c-2.2-1-5.1-0.5-6.9 1.3l-12.3 12.3c-1.6 1.6-4.1 1.8-5.9.5l-18.3-13.7c-2.1-1.6-5-1.5-6.9.1l-14.8 13.7c-6.3 5.8-15.1 9-24 9.1-12.4 0-24.7-4.7-34.1-13.2-13.3-11.8-20.3-29.1-19.7-46.9.3-8.5 3-16.8 7.9-24.1l12.1-18.6c1.5-2.3 1-5.4-1.2-7.1l-22.6-17.5c-1.3-1-3-1.5-4.6-1.3-8.4.8-16.8 3.2-24.2 7.1-12.8 7.2-16 15.5-16.8 24-2 17.6 3.7 35.5 16.2 49.4 15.7 17.9 39.4 27.2 63.6 27.2 23.5 0 45.5-8.8 62.5-24.9l12.6-12.1c1.9-1.8 2.2-4.7.7-6.9z" />
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
      className="py-5 bg-gradient-to-b from-[#0f0f25] via-[#0c0c1e] to-[#0f0f2f]"
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

        <div className="flex flex-col-reverse justify-between items-center md:flex-row">
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
            <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
              Feel free to reach out — I'm always open to discussing new
              projects, <br />
              ideas, or opportunities.
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
        <p className=" text-gray-500 text-base sm:text-lg">
          <hr className="mb-2" />© 2026 Rakib Sarker. All rights reserved.
        </p>
      </div>
    </section>
  );
}
