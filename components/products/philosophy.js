"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiLayers, FiUsers, FiGlobe, FiTool, FiDroplet, FiBarChart2 } from "react-icons/fi";
import Image from "next/image";

/* ---------------- Animated Counter ---------------- */
function Counter({ value, suffix = "", duration = 2500 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
}

/* ---------------- Slideshow ---------------- */
const images = [
  "/images/products/air-1.jpg",
  "/images/products/air-2.jpg",
  "/images/products/amis-1.jpg",
  "/images/products/amis-2.jpg",
];

function ProductSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image src={images[index]} alt="Product preview" fill className="object-cover" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Kit Card ---------------- */
function KitCard({ img, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="bg-[#DFF6DD] rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md"
    >
      <div className="w-20 h-20 mb-3 relative">
        <Image src={img} alt={title} fill className="object-contain" />
      </div>
      <h4 className="text-[#0B3D91] font-semibold mb-1">{title}</h4>
      <p className="text-[#222222] text-sm">{desc}</p>
    </motion.div>
  );
}

/* ---------------- Main Component ---------------- */
export default function ProductPhilosophy() {
  return (
    <section className=" bg-white linear-gradient(135deg, #27AE60 0%, #0B3D91 100%) py-28 -mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-4xl uppercase tracking-wide font-semibold text-[#0B3D91] mb-2">
            Product Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Built to Scale. <span className="text-[#27AE60]">Designed to Endure.</span>
          </h2>
          <p className="text-[#222222] text-base">
            Modular, climate-resilient systems built for high-altitude and water-stressed regions — engineered for reliability and scale.
          </p>
        </motion.div>

        {/* Philosophy + Slideshow */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FiLayers className="text-[#27AE60] text-xl" />
              <h3 className="text-xl font-semibold text-[#0B3D91]">Modular & Replicable</h3>
            </div>

            <p className="text-[#222222] mb-4">
              Each product is a standardized yet adaptable kit enabling rapid replication with predictable performance across geographies.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#DFF6DD] p-3 flex flex-col items-center">
                <p className="text-[#27AE60] font-bold text-lg">
                  <Counter value={14000} suffix="+" />
                </p>
                <p className="text-[#222222] text-sm mt-1">High-altitude villages</p>
              </div>
              <div className="rounded-xl bg-[#D0E6FF] p-3 flex flex-col items-center">
                <p className="text-[#0B3D91] font-bold text-lg">
                  <Counter value={14000000} suffix="+" />
                </p>
                <p className="text-[#222222] text-sm mt-1">People supported</p>
              </div>
            </div>
          </motion.div>

          {/* Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ProductSlideshow />
          </motion.div>
        </div>

        {/* Kit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 max-w-7xl"
        >
          <h3 className="text-2xl font-semibold text-[#0B3D91] mb-8 text-center">What Each Product Kit Includes</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <KitCard
              img="/images/icons/hardware.png"
              title="Modular Hardware"
              desc="Components designed for easy assembly and replication."
            />
            <KitCard
              img="/images/icons/sensors.png"
              title="Sensor & Control"
              desc="Automated systems for monitoring and regulation."
            />
            <KitCard
              img="/images/icons/documentation.png"
              title="Documentation"
              desc="Installation manuals and operational guides."
            />
            <KitCard
              img="/images/icons/training.png"
              title="Training"
              desc="Community & operator education for seamless adoption."
            />
            <KitCard
              img="/images/icons/dashboard.png"
              title="Dashboard / App"
              desc="Live performance monitoring & analytics."
            />
          </div>
        </motion.div>

        {/* Deployment Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-[#0B3D91] mb-6">Deployment Models</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <FiUsers />, title: "Standalone Purchase", desc: "Independent kits with full documentation." },
              { icon: <FiGlobe />, title: "Partner / Government", desc: "NGOs & government-led deployments." },
              { icon: <FiTool />, title: "Full Acres of Ice Support", desc: "End-to-end implementation & monitoring." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#0B3D91] bg-[#D0E6FF] p-4 hover:shadow-lg transition"
              >
                <div className="text-[#0B3D91] text-xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-[#0B3D91] mb-1">{item.title}</h4>
                <p className="text-[#222222] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Evidence */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-xl font-semibold text-[#0B3D91] mb-3">Automated Ice Reservoir (AIR)</h4>
            <p className="text-[#222222] mb-2">Sensor-driven ice reservoirs delivering predictable seasonal meltwater.</p>
            <div className="flex justify-around mt-2 text-[#222222]">
              <div className="flex gap-2 items-center">
                <FiDroplet className="text-[#27AE60]" />
                <span><Counter value={18400000} suffix="L" /></span>
              </div>
              <div className="flex gap-2 items-center">
                <FiBarChart2 className="text-[#F2C94C]" />
                <span>₹0.28/L</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-xl font-semibold text-[#0B3D91] mb-3">Automated Micro-Irrigation System (AMIS)</h4>
            <ul className="space-y-1 text-[#222222]">
              <li><strong className="text-[#27AE60]">60-70%</strong> water savings</li>
              <li><strong className="text-[#27AE60]">70-80%</strong> labour reduction</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
