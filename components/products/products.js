"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductDeepDive() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* ===================== AIR SECTION ===================== */}
        <section id="air">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16"
          >
            <p className="text-sm uppercase tracking-wide text-sky-600 font-semibold mb-3">
              Product 01
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Automated Ice Reservoir (AIR)
            </h2>
            <p className="text-lg text-gray-600">
              AIR is a managed ice-storage system designed for cold, high-altitude
              regions where winter water availability exceeds summer supply.
              It transforms excess winter water into predictable, usable water
              during the agricultural season.
            </p>
          </motion.div>

          {/* About AIR */}
          <div className="grid md:grid-cols-2 gap-14 mb-20">
            <div>
              <h3 className="section-subtitle">What is AIR?</h3>
              <p className="section-text">
                AIR upgrades traditional ice stupas (artificial glaciers) by
                integrating automation, sensor-based monitoring, and controlled
                discharge. This enables predictable water availability,
                measurable outcomes, and significantly reduced maintenance.
              </p>
            </div>

            {/* Image / Video Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-80 bg-gray-100">
              <Image
                src="/products/air-hero.jpg"
                alt="Automated Ice Reservoir"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Problems AIR Addresses */}
          <div className="mb-20">
            <h3 className="section-subtitle">Problems AIR Addresses</h3>
            <ul className="grid md:grid-cols-2 gap-4 section-text">
              <li>• Seasonal mismatch between water availability and demand</li>
              <li>• Unpredictable glacier melt due to climate change</li>
              <li>• Shortened agricultural windows</li>
              <li>• High labour & maintenance needs of traditional ice structures</li>
              <li>• Outmigration due to declining agricultural viability</li>
            </ul>
          </div>

          {/* How AIR Works */}
          <div className="mb-20">
            <h3 className="section-subtitle">How AIR Works</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              {[
                "Winter water is diverted via gravity-fed pipelines",
                "Solar-powered valves regulate flow & freezing",
                "Sensors monitor temperature, flow & ice growth",
                "Ice melts gradually during spring & early summer",
                "Live dashboard tracks system performance",
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-6 text-gray-600 bg-sky-50"
                >
                  <p className="font-semibold text-sky-600 mb-2">
                    Step {i + 1}
                  </p>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* AIR as Product Kit */}
          <div className="mb-20 bg-sky-50 rounded-3xl p-10">
            <h3 className="section-subtitle">AIR as a Product Kit</h3>
            <ul className="grid md:grid-cols-2 gap-4 section-text">
              <li>• Modular hardware kit</li>
              <li>• Sensor & control systems</li>
              <li>• Installation & operations manual</li>
              <li>• Community training programs</li>
              <li>• Live monitoring dashboard access</li>
            </ul>
          </div>

          {/* Deployment Scale */}
          <div className="mb-20">
            <h3 className="section-subtitle">Deployment Scale & Geography</h3>
            <p className="section-text mb-4">
              AIR has been implemented across <strong>12 villages</strong> in Leh
              and Kargil districts.
            </p>
            <p className="section-text">
              Designed for replication across <strong>14,000+ high-altitude
              villages</strong> globally, supporting nearly <strong>14 million
              people</strong> across the Andes, Alps, and Hindu Kush Himalayan
              range.
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="section-subtitle">Outcomes & Evidence</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                ["18.4M L", "Water stored (2024-25)"],
                ["₹0.28/L", "Cost per litre"],
                ["↓ Labour", "Reduced maintenance visits"],
                ["↑ Ice Volume", "Year-on-year improvement"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border p-6 text-center"
                >
                  <p className="text-2xl font-bold text-sky-600">{value}</p>
                  <p className="text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== AMIS SECTION ===================== */}
        <section id="amis">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16"
          >
            <p className="text-sm uppercase tracking-wide text-emerald-600 font-semibold mb-3">
              Product 02
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Automated Micro-Irrigation System (AMIS)
            </h2>
            <p className="text-lg text-gray-600">
              AMIS is a precision irrigation solution that converts intuition-based
              irrigation into sensor-driven, data-backed water delivery.
            </p>
          </motion.div>

          {/* AMIS Content */}
          <div className="grid md:grid-cols-2 gap-14 mb-20">
            <div>
              <h3 className="section-subtitle">What is AMIS?</h3>
              <p className="section-text">
                AMIS combines soil moisture sensing, automated valves, solar
                power, and remote monitoring to deliver water only when and
                where crops need it—especially in water-scarce regions.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 bg-gray-100">
              <Image
                src="/products/amis-hero.jpg"
                alt="Automated Micro Irrigation System"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Problems */}
          <div className="mb-20">
            <h3 className="section-subtitle">Problems AMIS Addresses</h3>
            <ul className="grid md:grid-cols-2 gap-4 section-text">
              <li>• Water wastage from flood irrigation</li>
              <li>• Top-soil erosion</li>
              <li>• Groundwater depletion</li>
              <li>• High manual irrigation labour</li>
              <li>• Crop stress due to irregular watering</li>
              <li>• Inefficiency in short growing seasons</li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="mb-20 bg-emerald-50 rounded-3xl p-10">
            <h3 className="section-subtitle">System Capabilities</h3>
            <ul className="grid md:grid-cols-2 gap-4 section-text">
              <li>• Soil moisture & environmental sensing</li>
              <li>• Automated irrigation scheduling</li>
              <li>• Solar-powered operation</li>
              <li>• Central monitoring dashboard</li>
              <li>• Remote performance tracking</li>
            </ul>
          </div>

          {/* Deployments & Outcomes */}
          <div>
            <h3 className="section-subtitle">Deployments & Outcomes</h3>
            <p className="section-text mb-4">
              Piloted in Saspol (Leh) with the Irrigation & Flood Control
              Department and deployed at Ladakh University / SKUAST.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["60-70%", "Water savings"],
                ["70-80%", "Labour reduction"],
                ["↑ Yield", "Improved crop outcomes"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-white p-6 text-center"
                >
                  <p className="text-2xl font-bold text-emerald-600">{value}</p>
                  <p className="text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* Utility classes (optional) */
