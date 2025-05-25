"use client";
import HeroSection from "./components/HeroSection";
import RoomGallery from "./components/RoomGallery";
import BookingForm from "./components/BookingForm";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="absolute bottom-10 left-[40%] transform -translate-x-[40%] z-20 w-[100%]">
        <BookingForm />
      </div>
      <RoomGallery />
      <section
        className="max-w-5xl mx-auto p-6 text-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
        <p className="text-gray-700 mb-8">
          We provide premium services with deluxe rooms, sea views, and gourmet
          dining.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Luxury Rooms</h4>
            <p>Enjoy your stay in comfort and elegance.</p>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Fine Dining</h4>
            <p>Delicious cuisine prepared by top chefs.</p>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Great Location</h4>
            <p>Just minutes away from the beach and nightlife.</p>
          </div>
        </div>
      </section>
      {/* 4. Amenities */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-10">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <img src="/treatment.png" alt="Spa" className="mx-auto w-12 mb-2" />
            <p>Spa & Wellness</p>
          </div>
          <div>
            <img src="/wifi-on.png" alt="WiFi" className="mx-auto w-12 mb-2" />
            <p>Free Wi-Fi</p>
          </div>
          <div>
            <img src="/diving.png" alt="Pool" className="mx-auto w-12 mb-2" />
            <p>Infinity Pool</p>
          </div>
          <div>
            <img
              src="/restaurant.png"
              alt="Restaurant"
              className="mx-auto w-12 mb-2"
            />
            <p>Fine Dining</p>
          </div>
        </div>
      </section>
      <div className="py-12">
        <section className="py-16 bg-white text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">Find Us</h2>
          <p className="mb-4">Thamel, Kathmandu, Nepal</p>
          <Map />
        </section>
      </div>
      {/* 7. Newsletter */}
      <section className="py-12 bg-yellow-500 text-black text-center px-4">
        <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Get exclusive offers and news</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l outline-none"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
