// app/components/HeroSliderClient.tsx
"use client";

import { useEffect, useState } from "react";

const images = [
  "/img-tokyi-guest-house-kathmandu-12.jpg",
  "/img-tokyi-guest-house-kathmandu-18.jpg",
  "/img-tokyi-guest-house-kathmandu-19.jpg",
  "/img-tokyi-guest-house-kathmandu-23.jpg",
  "/img-tokyi-guest-house-kathmandu-12.jpg",
];

interface HeroSliderClientProps {
  currentIndex: number;
}

export default function HeroSliderClient({
  currentIndex,
}: HeroSliderClientProps) {
  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-[-1]" : "opacity-0 z-[-1]"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}
    </div>
  );
}
