"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "air",
    title: "Automated Ice Reservoir (AIR)",
    description:
      "A climate-resilient ice storage system that captures winter water and releases it gradually during dry seasons.",
    image: "/products/air.jpg", // replace with actual image
    href: "/products/air",
  },
  {
    id: "amis",
    title: "Automated Micro-Irrigation System (AMIS)",
    description:
      "A precision, sensor-based irrigation system that delivers water only when and where crops need it.",
    image: "/products/amis.jpg", // replace with actual image
    href: "/products/amis",
  },
];

export default function ProductCatalogue() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-3">
            Product Catalogue
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Explore Acres of Ice’s modular, scalable products designed for
            high-altitude, water-scarce, and climate-stressed environments.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
            >
              {/* Image / Video */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 transition"
                >
                  View details
                  <span className="ml-2 group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catalogue Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-sky-200 bg-white p-8"
        >
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Looking for detailed specifications?
            </h4>
            <p className="text-gray-600">
              Access the complete product catalogue with technical details,
              deployment models, and documentation.
            </p>
          </div>

          <Link
            href="https://docs.google.com/document/d/17skvFKy8eqXeV8m91rQiq4Npua0-L_gYoJoASnT2Mxg/edit"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
          >
            View Full Catalogue
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
