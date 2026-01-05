"use client";

import Image from "next/image";
import {
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/comapnyDarkLogo.png"
              alt="Acres of Ice Logo"
              width={44}
              height={44}
            />
            <span className="text-lg font-semibold">Acres of Ice</span>
          </div>

          <p className="text-sm text-gray-300">
            Sustainable ice solutions empowering Himalayan communities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-300">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FiInstagram className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FiLinkedin className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <FiYoutube className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="X">
              <FaXTwitter className="w-5 h-5 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-sm text-gray-300">
          <h3 className="font-semibold text-white">Contact</h3>
          <p>Shey Village, Leh</p>
          <p>contact@acresofice.com</p>
        </div>

        {/* Navigation */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-white">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/case-study" className="hover:text-white">Case Studies</a></li>
            <li><a href="/news" className="hover:text-white">News</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-300">
            Monthly updates. No spam.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md text-black text-sm focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Acres of Ice. All rights reserved.
      </div>
    </footer>
  );
}
