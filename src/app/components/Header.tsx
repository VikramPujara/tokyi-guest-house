"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import TopHeader from "./TopHeader";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 bott w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0e3f63] text-black shadow-md #2C2C2C"
            : "bg-transparent text-black"
        }`}
      >
        <TopHeader />
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/Home" className="text-2xl font-bold text-white">
            <Image
              src="/logo2-removebg-preview.png"
              alt="Tokyi Guest House Logo"
              width={100}
              height={100}
              className="mt-4"
            />
            {/* <span className="text-xl font-bold text-white">HotelEase</span> */}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-white">
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-300">
              About
            </Link>

            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="hover:text-yellow-300">Rooms</button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md overflow-hidden z-20 min-w-[160px]">
                <Link
                  href="/rooms/luxury"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Luxury Rooms
                </Link>
                <Link
                  href="/rooms/deluxe"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Deluxe Rooms
                </Link>
                <Link
                  href="/rooms/family"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Family Suites
                </Link>
              </div>
            </div>

            <Link href="/services" className="hover:text-yellow-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0e3f63] text-white border-t border-white/20">
            <Link href="/" className="block px-4 py-2 hover:bg-[#174a6e]">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-[#174a6e]">
              About
            </Link>

            <div className="border-t px-4 py-2">
              <p className="font-semibold">Rooms</p>
              <Link
                href="/rooms/luxury"
                className="block px-4 py-1 text-sm hover:text-yellow-300"
              >
                Luxury Rooms
              </Link>
              <Link
                href="/rooms/deluxe"
                className="block px-4 py-1 text-sm hover:text-yellow-300"
              >
                Deluxe Rooms
              </Link>
              <Link
                href="/rooms/family"
                className="block px-4 py-1 text-sm hover:text-yellow-300"
              >
                Family Suites
              </Link>
            </div>

            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-[#174a6e]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-[#174a6e]"
            >
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
