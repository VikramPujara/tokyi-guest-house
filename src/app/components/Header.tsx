"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isRoomPage, setIsRoomPage] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setRoomsOpen(false);
    setServiceOpen(false);
  };

  useEffect(() => {
    // setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    // Safe client-only logic
    if (pathname.includes("/roomtype") || pathname.includes("/rooms")) {
      setIsRoomPage(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only compute after mount
  // const isRoomPage =
  //   mounted && (pathname.includes("/roomtype") || pathname.includes("/rooms"));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isRoomPage
          ? "bg-[#D4AF37] shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Tokyilogoupdated.png"
            alt="Logo"
            width={100}
            height={100}
            className={`transition-transform duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
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

          {/* Rooms (desktop hover) */}
          <div className="relative inline-block z-50 group">
            <div className="hover:text-yellow-500 transition cursor-pointer">
              ROOMS
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md min-w-[380px] z-50">
              <Link
                href="/rooms/1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Twin room with attached bathroom
              </Link>
              <Link
                href="/rooms/2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Double bedroom with attached bathroom
              </Link>
              <Link
                href="/rooms/3"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Twin bedroom with common bathroom
              </Link>
              <div className="relative">
                <div className="group/service hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Service apartment with attached bathroom and kitchen
                  <div className="absolute left-full top-0 hidden group-hover/service:block bg-white text-gray-800 shadow-lg rounded-md w-64 z-50">
                    <a
                      href="/rooms/5"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Lomanthang apartment
                    </a>
                    <Link
                      href="/rooms/6"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Thengar apartment
                    </Link>
                    <Link
                      href="/rooms/7"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Ghemi apartment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/services" className="hover:text-yellow-500 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </nav>

        {/* Contact & CTA (desktop) */}
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
          aria-label="Toggle menu"
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
        <div className="md:hidden bg-white text-gray-800 py-4 px-4 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="block px-4 py-2 font-semibold hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="block px-4 py-2 font-semibold hover:text-yellow-500"
          >
            About
          </Link>

          {/* Rooms (mobile click toggle) */}
          <button
            className="w-full text-left px-4 py-2 font-semibold hover:text-yellow-500"
            onClick={() => setRoomsOpen((v) => !v)}
            aria-expanded={roomsOpen}
          >
            Rooms
          </button>
          {roomsOpen && (
            <div className="ml-4 mt-1 space-y-1 text-sm">
              <Link
                href="/rooms/1"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Twin room with attached bathroom
              </Link>
              <Link
                href="/rooms/2"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Double bedroom with attached bathroom
              </Link>
              <Link
                href="/rooms/3"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Twin bedroom with common bathroom
              </Link>

              {/* Service Apartment nested toggle */}
              <button
                className="w-full text-left px-4 py-2 font-semibold hover:text-yellow-500"
                onClick={() => setServiceOpen((v) => !v)}
                aria-expanded={serviceOpen}
              >
                Service apartment with attached bathroom and kitchen
              </button>
              {serviceOpen && (
                <div className="ml-4 mt-1 space-y-1 text-sm">
                  <Link
                    href="/rooms/5"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Lomanthang apartment
                  </Link>
                  <Link
                    href="/rooms/6"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Thengar apartment
                  </Link>
                  <Link
                    href="/rooms/7"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Ghemi apartment
                  </Link>
                </div>
              )}
            </div>
          )}

          <Link
            href="/services"
            onClick={handleLinkClick}
            className="block px-4 py-2 font-semibold hover:text-yellow-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block px-4 py-2 font-semibold hover:text-yellow-500"
          >
            Contact
          </Link>
          <Link
            href="/booking"
            onClick={handleLinkClick}
            className="block bg-yellow-500 text-black text-center rounded-full py-2 mt-3 font-semibold hover:bg-yellow-400"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
