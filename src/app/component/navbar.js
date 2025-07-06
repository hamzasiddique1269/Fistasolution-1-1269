"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow border-b border-gray-200" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assert/logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Decagon
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button
              className={`flex items-center gap-1 font-medium ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Product
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  stroke={scrolled ? "#222" : "#fff"}
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className={`font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Resources
          </a>
          <a
            href="#"
            className={`font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Customers
          </a>
          <a
            href="#"
            className={`font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Careers
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`h-11 px-6 rounded-full border transition-colors font-medium text-base ${
              scrolled
                ? "border-gray-300 text-gray-800 bg-white hover:bg-gray-100"
                : "border-white text-white bg-black hover:bg-gray-900"
            }`}
          >
            Sign in
          </button>
          <button className="h-11 px-6 rounded-full bg-[#6366f1] text-white font-medium text-base flex items-center gap-2 hover:bg-[#5851db] transition-colors">
            Get a demo
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#fff"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                stroke={scrolled ? "#222" : "#fff"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden w-full max-w-screen-sm mx-auto px-4 pb-6 pt-2 flex flex-col gap-4 border-t border-gray-200 transition-all duration-300 text-sm overflow-x-hidden ${
            scrolled ? "bg-white" : "bg-black"
          }`}
        >
          <a
            href="#"
            className={`font-medium py-2 px-2 rounded ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-gray-800"
            }`}
          >
            Product
          </a>
          <a
            href="#"
            className={`font-medium py-2 px-2 rounded ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-gray-800"
            }`}
          >
            Resources
          </a>
          <a
            href="#"
            className={`font-medium py-2 px-2 rounded ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-gray-800"
            }`}
          >
            Customers
          </a>
          <a
            href="#"
            className={`font-medium py-2 px-2 rounded ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-gray-800"
            }`}
          >
            Careers
          </a>

          <button
            className={`h-10 px-5 rounded-full border transition-colors font-medium ${
              scrolled
                ? "border-gray-300 text-gray-800 bg-white hover:bg-gray-100"
                : "border-white text-white bg-black hover:bg-gray-900"
            }`}
          >
            Sign in
          </button>
          <button className="h-10 px-5 rounded-full bg-[#6366f1] text-white font-medium flex items-center gap-2 hover:bg-[#5851db] transition-colors">
            Get a demo
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#fff"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}
