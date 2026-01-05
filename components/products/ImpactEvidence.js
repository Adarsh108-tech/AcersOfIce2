"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------- Animated Counter ---------- */
function Counter({ value, suffix = "", duration = 2000 }) {
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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ---------- Main Component ---------- */
export default function ImpactEvidence() {
  return (
    <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-sky-400 font-semibold mb-3">
            Impact & Evidence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Measurable Impact Across Systems
          </h2>
          <p className="text-lg text-slate-300">
            Across water storage and irrigation solutions, Acres of Ice delivers
            verifiable outcomes—improving water security, reducing labour burden,
            and strengthening climate resilience in vulnerable regions.
          </p>
        </motion.div>

        {/* ---------- Key Metrics ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            {
              label: "Water Stored",
              value: 18.4,
              suffix: "M L",
              desc: "Stored using AIR systems (2024–25)",
            },
            {
              label: "Water Savings",
              value: 65,
              suffix: "%",
              desc: "Average reduction via AMIS",
            },
            {
              label: "Cost Efficiency",
              value: 0.28,
              suffix: " ₹/L",
              desc: "Cost per litre vs traditional storage",
            },
            {
              label: "Labour Reduction",
              value: 75,
              suffix: "%",
              desc: "Reduced manual irrigation & maintenance",
            },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-900 p-8 border border-slate-800"
            >
              <p className="text-sky-400 font-semibold mb-2">
                {metric.label}
              </p>
              <p className="text-4xl font-bold mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-slate-400 text-sm">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- Visuals: Map & Chart ---------- */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden bg-slate-800"
          >
            <Image
              src="/impact/global-map.jpg" // replace with map visual
              alt="Global deployment map"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
              <p className="text-sm text-slate-200">
                Deployments across the Himalayas, with scalable potential across
                Andes & Alps
              </p>
            </div>
          </motion.div>

          {/* Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900 p-8 border border-slate-800"
          >
            <h3 className="text-xl font-semibold mb-4">
              Performance Over Time
            </h3>
            <p className="text-slate-400 mb-6">
              Automation and sensor-driven control have delivered consistent
              year-on-year improvements in water storage and irrigation
              efficiency.
            </p>

            {/* Replace with real chart later */}
            <div className="h-40 rounded-xl bg-gradient-to-r from-sky-500/30 to-emerald-500/30 flex items-center justify-center text-slate-300">
              Chart / Data Visualization
            </div>
          </motion.div>
        </div>

        {/* ---------- Real-world Outcomes ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Agricultural Stability",
              desc: "Reliable early-season water improves crop yields and farm incomes, even in short growing windows.",
            },
            {
              title: "Reduced Outmigration",
              desc: "Improved water access strengthens rural livelihoods, reducing the need for seasonal or permanent migration.",
            },
            {
              title: "Climate Resilience",
              desc: "Communities gain adaptive infrastructure that buffers against glacial retreat and rainfall uncertainty.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-slate-900 p-8 border border-slate-800"
            >
              <h4 className="text-lg font-semibold mb-3">
                {item.title}
              </h4>
              <p className="text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -top-40 -right-40 h-96 w-96 bg-sky-500/20 blur-3xl rounded-full" />
    </section>
  );
}
