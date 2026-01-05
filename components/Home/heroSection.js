"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import { FiX } from "react-icons/fi";

export default function HeroSection() {
  const ref = useRef(null);
  const [openQuiz, setOpenQuiz] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layerBack = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const layerMid = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const layerFront = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setOpenQuiz(false);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={ref}
        className="relative h-[100vh] w-screen overflow-hidden"
      >
        {/* 🖼️ BACKGROUND IMAGE */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: bgParallax,
            backgroundImage: "url('/bg-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* 🌑 DARK OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* ❄️ SNOW */}
        <Snowfall
          snowflakeCount={60}
          style={{ position: "absolute", inset: 0, zIndex: 5 }}
        />

        {/* 🏔️ PARALLAX MOUNTAINS */}
        <motion.div
          className="absolute bottom-28 left-0 w-full h-[55%] bg-repeat-x z-[2]"
          style={{
            y: layerFront,
            backgroundImage: "url('/mountains/mountains1.svg')",
            backgroundSize: "auto 100%",
          }}
        />

        <motion.div
          className="absolute bottom-24 left-0 w-full h-[45%] bg-repeat-x z-[3]"
          style={{
            y: layerMid,
            backgroundImage: "url('/mountains/mountains2.svg')",
            backgroundSize: "auto 100%",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full h-[35%] bg-repeat-x z-[4]"
          style={{
            y: layerBack,
            backgroundImage: "url('/mountains/mountains.svg')",
            backgroundSize: "auto 100%",
          }}
        />

        {/* 🌟 CONTENT */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
              Acres Of Ice
            </h1>

            <p className="text-lg md:text-xl text-[#E0F2FE] mb-8 leading-relaxed">
              Acres of Ice builds scalable, research-backed water-management
              technologies for high-altitude and climate-vulnerable regions.
            </p>

            {/* 🔗 QUICK LINKS */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { label: "Why It Matters", id: "why-it-matters" },
                { label: "Latest News & Videos", id: "news" },
                { label: "Our Products", id: "products" },
                { label: "Volunteer With Us", id: "volunteer" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => scrollToSection(btn.id)}
                  className="px-5 py-2 rounded-full bg-white/90 text-[#1E3A8A] font-semibold shadow-md hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* 🎯 QUIZ CTA */}
            <button
              onClick={() => setOpenQuiz(true)}
              className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Take a Quiz & Know How We Can Help You
            </button>
          </div>
        </div>
      </section>

      {/* 🧠 QUIZ MODAL */}
      <AnimatePresence>
        {openQuiz && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#F8FAFC] rounded-2xl w-full max-w-lg p-6 relative shadow-2xl"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
            >
              <button
                onClick={() => setOpenQuiz(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <FiX size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-3 text-[#1E40AF]">
                Water Impact Quiz
              </h2>

              <p className="text-gray-600 mb-5">
                Answer a few quick questions and we’ll show how our solutions
                can help your region.
              </p>

              <div className="space-y-3">
                {[
                  "High-Altitude Region",
                  "Seasonal Water Shortage",
                  "Rural Community",
                ].map((opt) => (
                  <button
                    key={opt}
                    className="w-full py-2 rounded-lg bg-[#E0F2FE] text-[#0B1D3A] font-medium hover:bg-[#BAE6FD] transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
