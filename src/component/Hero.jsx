import React, { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "I'm a Passionate Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1Sf3yTgfNRG5Qarsq1H2NlFge5eHr7r9x/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Professional Dark + Beautiful Infinite Wave Animation */}
      <div className="absolute inset-0 -z-10">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#0c0c1e]" />

        {/* Subtle flowing waves */}
        <div className="absolute inset-0 opacity-25">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-lg sm:text-xl mt-22 text-purple-400 font-medium mb-4">
          Hi there, my name is
        </p>

        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          RAKIB SARK<span className="text-purple-400">E</span>R
        </h1>

        <div className="h-20 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300">
            {text}
            <span className="inline-block w-1 h-10 bg-purple-400 ml-1 animate-blink"></span>
          </h2>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
          I craft beautiful, fast, and user-friendly web experiences using
          modern technologies like React and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll("#projects")}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            View My Work
          </button>

          <a
            href={resumeUrl}
            download="Rakib-Sarker-Resume.pdf"
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-15 animate-bounce">
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
        </div>
      </div>

      {/* Beautiful flowing wave animation */}
      <style jsx>{`
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 300px;
          background: linear-gradient(180deg, transparent, #a78bfa40);
          border-radius: 50%;
          animation: wave 18s linear infinite;
        }
        .wave1 {
          animation-duration: 20s;
          opacity: 0.3;
        }
        .wave2 {
          animation-duration: 25s;
          animation-delay: -5s;
          opacity: 0.2;
        }
        .wave3 {
          animation-duration: 30s;
          animation-delay: -10s;
          opacity: 0.15;
        }

        @keyframes wave {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25%) translateY(-40px);
          }
          100% {
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
