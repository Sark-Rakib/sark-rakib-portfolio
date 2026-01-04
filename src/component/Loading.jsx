import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading({ onLoaded }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoaded) onLoaded();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c1e]"
    >
      {/* Subtle breathing background glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08), transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative">
        {/* Orbit Path */}
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          className="absolute inset-0 -top-12 -left-12"
        >
          <ellipse
            cx="120"
            cy="120"
            rx="95"
            ry="80"
            fill="none"
            stroke="#1e1e2f"
            strokeWidth="2"
          />
        </svg>

        {/* Orbiting Glow Dot */}
        <motion.div
          className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-md shadow-2xl"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            rotate: 360,
            translateX: 95,
            translateY: 80,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Full Name Reveal */}
        <motion.div
          className="flex flex-col items-center justify-center h-32"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide text-center"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            RAKIB <span className="text-purple-400">SARKER</span>
          </motion.h1>

          {/* Pulsing underline */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-6"
            animate={{ width: [80, 128, 80], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
