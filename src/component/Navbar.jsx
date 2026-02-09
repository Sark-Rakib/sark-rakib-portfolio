import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Compact-logo-designs.png";
import { CiHome } from "react-icons/ci";

import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // useEffect(() => {
  //   const sections = ["home", "about", "projects", "experience", "contact"];

  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //     const scrollPos = window.scrollY + 120;

  //     // for (let sec of sections) {
  //     //   const el = document.getElementById(sec);
  //     //   if (
  //     //     el &&
  //     //     scrollPos >= el.offsetTop &&
  //     //     scrollPos < el.offsetTop + el.offsetHeight
  //     //   ) {
  //     //     setActiveLink(sec);
  //     //   }
  //     // }
  //     for (let i = 0; i < sections.length; i++) {
  //       const sec = sections[i];
  //       const el = document.getElementById(sec);
  //       if (!el) continue;

  //       const isLast = i === sections.length - 1;

  //       if (
  //         scrollPos >= el.offsetTop &&
  //         (isLast || scrollPos < el.offsetTop + el.offsetHeight)
  //       ) {
  //         setActiveLink(sec);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "experience", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveLink(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // page load e active detect korar jonno
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <CiHome /> },
    { name: "About", href: "#about", icon: <AiOutlineUser /> },
    { name: "Projects", href: "#projects", icon: <AiOutlineProject /> },
    {
      name: "Experience",
      href: "#experience",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { name: "Contact", href: "#contact", icon: <AiOutlineMail /> },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-50 transition-all duration-500 rounded-4xl ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-4"
      >
        <div className="flex justify-between items-center h-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="text-2xl font-bold tracking-tight"
          >
            <img className="w-30 h-12" src={logo} alt="logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 relative">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-200"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-4xl bg-purple-500/20 backdrop-blur-md"
                    />
                  )}

                  <span className="relative z-10 text-lg">{link.icon}</span>
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              scrolled
                ? "text-gray-200 hover:bg-white/10"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2 bg-black/30 backdrop-blur-xl border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`flex items-center gap-2 py-3 px-4 rounded-4xl transition ${
                activeLink === link.href.replace("#", "")
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-200"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
