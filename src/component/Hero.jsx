import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I'm a Passionate Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1foNlNUNZuBVljpo1_rXrkYnUYJDakYiG/view";

  // Stagger container for children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Individual child animation
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Beautiful SVG Wave Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0c0c1e]" />
        <svg
          className="absolute bottom-0 w-full h-96 opacity-30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#a78bfa40"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z;
                      M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z;
                      M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z"
              dur="20s"
              repeatCount="indefinite"
            />
          </motion.path>
          <motion.path
            fill="#a78bfa30"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,218.7C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,218.7C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z;
                      M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,186.7C840,192,960,192,1080,176C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z;
                      M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,218.7C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
              dur="25s"
              repeatCount="indefinite"
            />
          </motion.path>
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-lg sm:text-xl mt-25 sm:mt-10 md:mt-10 text-purple-400 font-medium mb-4"
        >
          Hi there, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          RAKIB SARK<span className="text-purple-400">E</span>R
        </motion.h1>

        <motion.div
          variants={item}
          className="h-20 flex items-center justify-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300">
            {text}
            <AnimatePresence>
              {showCursor && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-block w-1 h-10 bg-purple-400 ml-1"
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              )}
            </AnimatePresence>
          </h2>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          I craft beautiful, fast, and user-friendly web experiences using
          modern technologies like React and Tailwind CSS.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-5 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-xl"
          >
            View My Work
          </motion.button>

          <motion.a
            href={resumeUrl}
            download="Rakib-Sarker-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="mt-5 sm:mt-15 md:mt-17"
        >
          <svg
            className="w-8 h-8 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
