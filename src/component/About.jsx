import React from "react";
import ProfilePic from "../assets/IMG_20250905_174354610_HDR_AEabou-removebg-preview.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0c0c1e] to-[#0f0f2f]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A little bit about who I am and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Now with GLOW */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img
                  src={ProfilePic}
                  alt="Rakib Sarker"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating accent circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-bold text-white">
              Hi, I'm <span className="text-purple-400">Rakib Sarker</span>
            </h3>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-purple-400 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                who loves turning ideas into beautiful, functional, and
                lightning-fast digital experiences.
              </p>
              <p>
                I specialize in React, Node.js, and modern web technologies to
                build products that people love to use — from pixel-perfect UIs
                to scalable backend systems.
              </p>
              <p>
                When I'm not coding, you’ll find me exploring new tech,
                designing clean UIs in Figma, contributing to open-source, or
                helping junior developers grow.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating
                interfaces that work flawlessly on every device. Every project
                is a chance to learn, improve, and deliver something
                exceptional.
              </p>
            </div>

            {/* Quick Facts - Glass Cards */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Location", value: "Bangladesh", icon: "Location" },
                { label: "Experience", value: "Fresher+", icon: "Experience" },
                {
                  label: "Availability",
                  value: "Open to Work",
                  color: "text-green-400",
                },
                {
                  label: "Freelance",
                  value: "Available",
                  color: "text-cyan-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p
                    className={`font-bold text-lg mt-1 ${
                      item.color || "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-purple-500/30 text-purple-300 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
