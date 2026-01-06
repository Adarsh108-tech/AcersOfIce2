"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "About Us",
    links: [
      { name: "Our Story", href: "/about/story" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Web Development", href: "/services/web" },
      { name: "App Development", href: "/services/app" },
      { name: "AI Solutions", href: "/services/ai" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Blogs", href: "/media/blogs" },
      { name: "News", href: "/media/news" },
      { name: "Gallery", href: "/media/gallery" },
    ],
  },
  {
    title: "Case Study",
    links: [
      { name: "Startups", href: "/case-study/startups" },
      { name: "Enterprise", href: "/case-study/enterprise" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { name: "General", href: "/faq/general" },
      { name: "Pricing", href: "/faq/pricing" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4
          flex items-center justify-between transition-all duration-300
          ${
            scrolled
              ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/comapnyDarkLogo.png"
            alt="Company Logo"
            width={50}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <motion.div
                className={`cursor-pointer font-medium relative ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                whileHover="hover"
              >
                {item.title}
                <motion.span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left ${
                    scrolled ? "bg-gray-900" : "bg-white"
                  }`}
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  initial="initial"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {activeMenu === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute top-10 left-0 bg-white/80 backdrop-blur-xl
                      shadow-xl rounded-xl p-4 min-w-[220px]"
                  >
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="block px-3 py-2 rounded-md
                          text-gray-700 hover:bg-gray-100 transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* 🔥 STYLED HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setMobileMenuOpen(true)}
          className={`md:hidden flex items-center justify-center
            w-11 h-11 rounded-full transition-all duration-300
            ${
              scrolled
                ? "bg-black/5 text-gray-900"
                : "bg-white/10 text-white backdrop-blur-md"
            }
          `}
        >
          <Menu size={22} />
        </motion.button>
      </motion.nav>

     {/* MOBILE MENU DRAWER */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
    >
      {/* GLASS DRAWER */}
      <div
        className="
          absolute right-0 top-0
          w-[70%] sm:w-[60%] max-w-sm
          h-full
          bg-white/20 backdrop-blur-2xl
          border-l border-white/30
          p-6 overflow-y-auto
        "
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(false)}
            className="
              w-10 h-10 rounded-full
              bg-white/30 backdrop-blur-md
              border border-white/40
              flex items-center justify-center
              text-gray-900
            "
          >
            <X size={20} />
          </motion.button>
        </div>

        {/* Mobile Links */}
        <div className="space-y-6">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === index ? null : index)
                }
                className="w-full text-left font-semibold text-lg text-white"
              >
                {item.title}
              </button>

              <AnimatePresence>
                {activeMenu === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 mt-3 space-y-2 overflow-hidden"
                  >
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="
                          block text-white
                        hover:text-black
                          transition
                        "
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
