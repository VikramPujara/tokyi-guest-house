// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import TopHeader from "./TopHeader";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMobileOpen(!mobileOpen);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-[#1b1b1b] py-2 shadow-md" : "bg-transparent py-4"
//         }`}
//       >
//         <TopHeader />
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300">
//           {/* Logo */}
//           <Link href="/Home" className="text-2xl font-bold text-white">
//             <Image
//               src="/logo2-removebg-preview.png"
//               alt="Tokyi Guest House Logo"
//               width={100}
//               height={100}
//               className={`${
//                 scrolled ? "w-[70px]" : "w-[100px]"
//               } transition-all duration-300 mt-4`}
//             />
//             {/* <span className="text-xl font-bold text-white">HotelEase</span> */}
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center space-x-4 text-white">
//             <Link href="/" className="hover:text-yellow-300">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-yellow-300">
//               About
//             </Link>

//             {/* Dropdown Menu */}
//             <div className="relative group">
//               <button className="hover:text-yellow-300">Rooms</button>
//               <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md overflow-hidden z-20 min-w-[160px]">
//                 <Link
//                   href="/rooms/luxury"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Luxury Rooms
//                 </Link>
//                 <Link
//                   href="/rooms/deluxe"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Deluxe Rooms
//                 </Link>
//                 <Link
//                   href="/rooms/family"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Family Suites
//                 </Link>
//               </div>
//             </div>

//             <Link href="/services" className="hover:text-yellow-300">
//               Services
//             </Link>
//             <Link href="/contact" className="hover:text-yellow-300">
//               Contact
//             </Link>
//           </nav>

//           {/* Mobile Toggle */}
//           <button onClick={toggleMenu} className="md:hidden text-white">
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-[#0e3f63] text-white border-t border-white/20">
//             <Link href="/" className="block px-4 py-2 hover:bg-[#174a6e]">
//               Home
//             </Link>
//             <Link href="/about" className="block px-4 py-2 hover:bg-[#174a6e]">
//               About
//             </Link>

//             <div className="border-t px-4 py-2">
//               <p className="font-semibold">Rooms</p>
//               <Link
//                 href="/rooms/luxury"
//                 className="block px-4 py-1 text-sm hover:text-yellow-300"
//               >
//                 Luxury Rooms
//               </Link>
//               <Link
//                 href="/rooms/deluxe"
//                 className="block px-4 py-1 text-sm hover:text-yellow-300"
//               >
//                 Deluxe Rooms
//               </Link>
//               <Link
//                 href="/rooms/family"
//                 className="block px-4 py-1 text-sm hover:text-yellow-300"
//               >
//                 Family Suites
//               </Link>
//             </div>

//             <Link
//               href="/services"
//               className="block px-4 py-2 hover:bg-[#174a6e]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               className="block px-4 py-2 hover:bg-[#174a6e]"
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1b1b1b] shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/logo2-removebg-preview.png"
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

          {/* Dropdown */}
          <div className="relative group">
            <button className="hover:text-yellow-500 transition">ROOMS</button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md overflow-hidden z-20 min-w-[180px]">
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
            <span className="text-sm font-semibold">+1 234 567 890</span>
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
                href="/rooms/luxury"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Luxury Rooms
              </Link>
              <Link
                href="/rooms/deluxe"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Deluxe Rooms
              </Link>
              <Link
                href="/rooms/family"
                onClick={handleLinkClick}
                className="block hover:text-yellow-400"
              >
                Family Suites
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
