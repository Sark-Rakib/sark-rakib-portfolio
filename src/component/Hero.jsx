import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  // const [showCursor, setShowCursor] = useState(true);
  const fullText = "I'm a Passionate Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1foNlNUNZuBVljpo1_rXrkYnUYJDakYiG/view";

  // Social links - replace with your actual profiles
  const socialLinks = {
    facebook: "https://www.facebook.com/sarkrakib/",
    github: "https://github.com/Sark-Rakib",
    linkedin: "https://www.linkedin.com/in/rakib-sarker-",
  };

  // Stagger container
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
      {/* SVG Wave Background */}
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

      {/* Social Icons - Fixed Left Side (Vertical) */}
      <div className="fixed flex flex-col gap-6 right-6 top-1/2 -translate-y-1/2 z-20 md:flex md:flex-col md:gap-6">
        <motion.a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.2, x: 10 }}
          className="text-purple-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </motion.a>

        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.2, x: 10 }}
          className="text-purple-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>

        <motion.a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.2, x: 10 }}
          className="text-purple-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </motion.a>

        {/* Vertical line */}
        <div className="w-px h-32 bg-purple-400 mx-auto opacity-50" />
      </div>

      <motion.div
        className="relative z-10 w-11/12 px-2 sm:px-8 lg:px-30 text-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-lg sm:text-xl mt-23 sm:mt-10 md:mt-20 text-purple-400 font-medium mb-4"
        >
          Hi there, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
        >
          RAKIB SARK<span className="text-purple-400">E</span>R
        </motion.h1>

        <motion.div
          variants={item}
          className="h-20 flex items-center justify-start mb-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-purple-300">
            {text}
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>
          </h2>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          I craft beautiful, fast, and user-friendly web experiences <br />
          using modern technologies like React andTailwind CSS.
        </motion.p>

        {/* Buttons - Find Me button removed */}
        <motion.div
          variants={item}
          className="mt-5 flex flex-col justify-start items-start sm:flex-row gap-6 md:justify-start md:items-center"
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
            target="_blank"
            rel="noopener noreferrer"
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
          className="mt-2 sm:mt-20 md:mt-22"
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
