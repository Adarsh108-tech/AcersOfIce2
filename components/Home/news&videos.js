"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

/* ======================
   Animation Variants
   ====================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

/* ======================
   Data
   ====================== */
const newsData = [
  {
    title: "Climate-Resilient Water Systems Expand in Ladakh",
    description:
      "New automated ice reservoirs improve early-season irrigation for remote communities.",
    image: "/mountain&river2.jpg",
    href: "/mountain&river2.jpg",
  },
  {
    title: "Automation Redefines High-Altitude Water Storage",
    description:
      "Technology-driven ice reservoirs reduce labor and improve seasonal water access.",
    image: "/mountain&river2.jpg",
    href: "/mountain&river2.jpg",
  },
  {
    title: "Community-Led Innovation Strengthens Water Security",
    description:
      "Local partnerships enable sustainable adoption of automated ice reservoirs.",
    image: "/mountain&river2.jpg",
    href: "/mountain&river2.jpg",
  },
  {
    title: "Research-Backed Solutions Address Glacier Retreat",
    description:
      "Data-driven design supports scalable water infrastructure in mountains.",
    image: "/mountain&river2.jpg",
    href: "/mountain&river2.jpg",
  },
  {
    title: "Next-Gen Irrigation Systems Reduce Water Stress",
    description:
      "Micro-irrigation improves efficiency during critical growing periods.",
    image: "/mountain&river2.jpg",
    href: "/news/micro-irrigation",
  },
  {
    title: "Policy Collaboration Accelerates Water Innovation",
    description:
      "Public-sector engagement enables faster deployment of water technologies.",
    image: "/mountain&river2.jpg",
    href: "/mountain&river2.jpg",
  },
];

const videoLinks = [
  "https://www.youtube.com/embed/OvnrQJnVkUs",
  "https://www.youtube.com/embed/HqLYnptAKfc",
  "https://www.youtube.com/embed/lmYgq8UY3H0",
  "https://www.youtube.com/embed/HPExh0UvxOo",
];

const truncateWords = (text, limit = 10) =>
  text.split(" ").slice(0, limit).join(" ") + "...";

/* ======================
   Carousel Row Component
   ====================== */
const CarouselRow = ({ title, children, carouselRef }) => {
  const scroll = (direction) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="mb-20 last:mb-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-end mb-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full text-white hover:text-black font-bold  shadow-md flex items-center justify-center hover:bg-gray-50 border transition-all"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full text-white hover:text-black font-bold shadow-md flex items-center justify-center hover:bg-gray-50 border transition-all"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
      >
        {children}
      </div>
    </motion.div>
  );
};

/* ======================
   Main Component
   ====================== */
export default function LatestInsights({ id }) {
  const newsRef = useRef(null);
  const videoRef = useRef(null);

  /* Keyboard + Wheel Scroll */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft")
        newsRef.current?.scrollBy({ left: -320, behavior: "smooth" });
      if (e.key === "ArrowRight")
        newsRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    };

    const setupWheel = (ref) => {
      const el = ref.current;
      if (!el) return;
      const handleWheel = (e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY, behavior: "smooth" });
        }
      };
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    };

    window.addEventListener("keydown", handleKeyDown);
    const cleanNews = setupWheel(newsRef);
    const cleanVideo = setupWheel(videoRef);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cleanNews?.();
      cleanVideo?.();
    };
  }, []);

  return (
    <motion.section
      id={id}
      className="w-full py-24 px-6 md:px-16 overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background/mountain_back.png')",
        backgroundSize: "cover",
      }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center md:text-left"
          variants={fadeUp}
        >
          Latest News & Insights
        </motion.h2>

        {/* News Row */}
        <CarouselRow title="In the Headlines" carouselRef={newsRef}>
          <motion.div
            className="flex gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsData.map((news, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="min-w-[280px] max-w-[280px] flex-shrink-0"
              >
                <Link href={news.href}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden h-full border border-blue-50">
                    <div className="relative h-[160px] w-full">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between h-[180px]">
                      <div>
                        <h4 className="text-md font-bold text-gray-900 mb-2">
                          {news.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {truncateWords(news.description, 12)}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">
                        Read Story →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </CarouselRow>

        <hr className="my-16 border-gray-100" />

        {/* Video Row */}
        <CarouselRow title="Field Documentation" carouselRef={videoRef}>
          <motion.div
            className="flex gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videoLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={scaleFade}
                whileHover={{ scale: 1.03 }}
                className="min-w-[340px] max-w-[340px] flex-shrink-0"
              >
                <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                  <iframe
                    src={link}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CarouselRow>
      </div>
    </motion.section>
  );
}
