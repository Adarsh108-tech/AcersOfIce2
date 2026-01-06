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
  visible: { transition: { staggerChildren: 0.12 } },
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
   Carousel Row
   ====================== */
const CarouselRow = ({ title, children, carouselRef }) => {
  const scroll = (dir) => {
    if (!carouselRef.current) return;

    const width = window.innerWidth;
    const amount =
      width < 640 ? 240 : width < 1024 ? 300 : 360;

    carouselRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
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
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Buttons hidden on very small screens */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full
              text-white hover:text-black border
              flex items-center justify-center
              hover:bg-white transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full
              text-white hover:text-black border
              flex items-center justify-center
              hover:bg-white transition"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1 pb-4"
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
        newsRef.current?.scrollBy({ left: -300, behavior: "smooth" });
      if (e.key === "ArrowRight")
        newsRef.current?.scrollBy({ left: 300, behavior: "smooth" });
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
      className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/background/mountain_back.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-14"
          variants={fadeUp}
        >
          Latest News & Insights
        </motion.h2>

        {/* News Row */}
        <CarouselRow title="In the Headlines" carouselRef={newsRef}>
          <motion.div
            className="flex gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsData.map((news, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="
                  min-w-[240px] sm:min-w-[260px]
                  md:min-w-[280px] lg:min-w-[300px]
                  flex-shrink-0
                "
              >
                <Link href={news.href}>
                  <div className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition">
                    <div className="relative h-[140px] sm:h-[150px] md:h-[160px]">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 sm:p-5 h-[170px] flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                          {news.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
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

        <hr className="my-16 border-white/20" />

        {/* Video Row */}
        <CarouselRow title="Field Documentation" carouselRef={videoRef}>
          <motion.div
            className="flex gap-4 sm:gap-6"
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
                className="
                  min-w-[260px] sm:min-w-[300px]
                  md:min-w-[340px] lg:min-w-[380px]
                  flex-shrink-0
                "
              >
                <div className="aspect-video rounded-2xl overflow-hidden border shadow-lg bg-black">
                  <iframe
                    src={link}
                    title={`video-${index}`}
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
