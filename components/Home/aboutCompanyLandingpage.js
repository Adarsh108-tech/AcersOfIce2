"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* 🔹 Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutGlaciers({ id }) {
  return (
    <section
      id={id}
      className="
        relative w-full overflow-hidden
        bg-gradient-to-b
        from-[#A28587] via-[#645D63] via-[#3D424E] to-[#213140]
        pt-24 pb-24 px-6 md:px-16
      "
    >
      {/* ⛰️ TOP TRANSITION MOUNTAIN */}
      <div
        className="absolute top-0 left-0 w-full h-[22%] bg-repeat-x z-[0]"
        style={{
          backgroundImage: "url('/mountains/mountains-inverted1.png')",
          backgroundSize: "auto 100%",
        }}
      />

      {/* 🌟 MAIN CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT CONTENT */}
        <motion.div variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm font-semibold text-[#E7C8C1]"
          >
            Why It Matters
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-bold text-[#F5F5F5] leading-tight"
          >
            Himalayan Glaciers
            <br />
            <span className="text-[#9ED6C0]">
              A Lifeline Under Threat
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[#E3E3E3] leading-relaxed"
          >
            The Hindu Kush-Himalayan region functions as Asia&#39;s water reserve,
            supporting over a billion people downstream. Rapid warming,
            shrinking snow cover, and unpredictable snowfall are disrupting
            natural meltwater cycles — particularly in high-altitude regions
            like Ladakh.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#D6D6D6] leading-relaxed"
          >
            Communities dependent on seasonal meltwater now face delayed or
            insufficient water during critical farming periods. At the same
            time, over-extraction of groundwater is draining aquifers faster
            than they can recharge.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#D0D0D0] leading-relaxed"
          >
            This convergence of climate stress and loss of traditional water
            practices calls for solutions that are both technologically robust
            and locally grounded.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 border-l-4 border-[#FFC653] pl-4"
          >
            <p className="text-[#F1F1F1] font-medium">
              Acres of Ice responds by transforming how meltwater is stored,
              managed, and released — ensuring reliability without disrupting
              cultural wisdom.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT INFOGRAPHIC */}
        <motion.div variants={stagger} className="relative">
          <div className="grid grid-cols-2 gap-6">
            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#9ED6C0]/10 border border-[#9ED6C0]/30 rounded-xl p-6"
            >
              <h4 className="text-[#9ED6C0] font-semibold text-lg">
                Climate Pressure
              </h4>
              <p className="mt-2 text-sm text-[#E6E6E6]">
                Rising temperatures and erratic snowfall reduce dependable
                meltwater availability during early growing seasons.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#7FC8FF]/10 border border-[#7FC8FF]/30 rounded-xl p-6"
            >
              <h4 className="text-[#7FC8FF] font-semibold text-lg">
                Water Scarcity
              </h4>
              <p className="mt-2 text-sm text-[#E6E6E6]">
                Seasonal shortages force communities to rely on unsustainable
                groundwater extraction.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#FFC653]/20 border border-[#FFC653]/40 rounded-xl p-6 col-span-2"
            >
              <h4 className="text-[#FFF2C2] font-semibold text-lg">
                Our Intervention
              </h4>
              <p className="mt-2 text-sm text-[#F1F1F1]">
                Automated Ice Reservoirs are constructed during winter,
                storing water safely as ice and releasing it early in the
                growing season using automated, freeze-resistant systems.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-xl p-6 col-span-2"
            >
              <h4 className="text-[#F5F5F5] font-semibold text-lg">
                Technology + Tradition
              </h4>
              <p className="mt-2 text-sm text-[#DADADA]">
                By combining indigenous knowledge with automation and
                data-driven control, we reduce labor, prevent infrastructure
                failure, and enhance long-term water resilience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
