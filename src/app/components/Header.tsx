"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [opendrop, setopendrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const isRoomPage =
    pathname.includes("/roomtype") || pathname.includes("/rooms");
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isRoomPage
          ? "bg-[#D4AF37] shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/tokyilogo.png"
            alt="Logo"
            width={scrolled ? 80 : 100}
            height={scrolled ? 80 : 100}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-medium text-sm uppercase tracking-wide items-center">
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <div className="relative group inline-block z-50">
            <div className="hover:text-yellow-500 transition cursor-pointer">
              ROOMS
            </div>

            {/* Dropdown - no margin here */}
            <div className="absolute left-0 top-full group-hover:block hidden bg-white text-gray-800 shadow-lg rounded-md min-w-[380px] z-50">
              <a
                href="/roomtype?type=Single"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Twin room with attached bathroom
              </a>
              <a
                href="/roomtype?type=Double"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Double bedroom with attached bathroom
              </a>
              <a
                href="/roomtype?type=Family"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Twin bedroom with common bathroom
              </a>
              <a
                href="/roomtype?type=Service-apartment"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service apartment with with attached bathroom and fully equipped
                kitchen
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="w-full text-left px-4 py-2 font-semibold text-white"
              onClick={() => setopendrop(!opendrop)}
            >
              Rooms
            </button>
            {opendrop && (
              <div className="pl-6">
                <Link
                  href="/roomtype?type=Single"
                  className="block py-1 text-sm text-white"
                >
                  Twin room with attached bathroom
                </Link>
                <Link
                  href="/roomtype?type=Double"
                  className="block py-1 text-sm text-white"
                >
                  Double bedroom with attached bathroom
                </Link>
                <Link
                  href="/roomtype?type=Family"
                  className="block py-1 text-sm text-white"
                >
                  Twin bedroom with common bathroom
                </Link>
                <Link
                  href="/roomtype?type=Service-apartment"
                  className="block py-1 text-sm text-white"
                >
                  Service apartment with with attached bathroom and fully
                  equipped kitchen
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-yellow-500 transition">
            services
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </nav>

        {/* Contact & CTA */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 rounded-full p-2">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 5h2l3.5 7-1.5 2.5a17.928 17.928 0 008.5 8.5L14 18.5 21 22v-2c0-9.94-8.06-18-18-18z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">01-5178282</span>
          </div>

          <Link
            href="/booking"
            className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1b1b1b] text-white py-4 px-4 space-y-3">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="block hover:text-yellow-400"
          >
            About
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <div className="font-semibold">Rooms</div>
            <div className="ml-4 mt-2 space-y-1 text-sm">
              <Link
                href="/roomtype?type=single"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Twin room with attached bathroom
              </Link>
              <Link
                href="/roomtype?type=double"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Double bedroom with attached bathroom
              </Link>
              <Link
                href="/roomtype?type=family"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Twin bedroom with common bathroom
              </Link>
              <Link
                href="/roomtype?type=Service-apartment"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Service apartment with with attached bathroom and fully equipped
                kitchen
              </Link>
            </div>
          </div>

          <Link
            href="/services"
            onClick={handleLinkClick}
            className="block hover:text-yellow-400"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block hover:text-yellow-400"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block bg-yellow-500 text-black text-center rounded-full py-2 mt-3 font-semibold"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
