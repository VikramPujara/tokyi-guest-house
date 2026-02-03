"use client";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function TopHeader() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 down-5 w-full bg-[#2d4069] text-white text-sm z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <span>📞 +977-01-4512705, +977-1-4528946</span>
          <span>📧 tokyi@ntc.net.np, tokyi@gmail.com</span>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-google" />
          </a>
        </div>
      </div>
    </div>
  );
}
