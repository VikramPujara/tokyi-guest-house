"use client";
import HeroSection from "./components/HeroSection";
import RoomGallery from "./components/RoomGallery";
import BookingForm from "./components/BookingForm";
import Link from "next/link";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="absolute bottom-10 left-[40%] transform -translate-x-[40%] z-20 w-[100%]">
        <BookingForm />
      </div>
      <section
        className="text-black py-16 px-4 md:px-20"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="flex flex-col md:flex-row item-center md:item-start gap-10">
          {/* Left: Text Section */}
          <div className="md:w-1/2">
            <h5 className="text-yellow-500 uppercase tracking-widest mb-2">
              About Tokiy Guest House
            </h5>
            <h5 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 gap-10">
              {/* Welcome to the best <br /> hotel in kathmandu */}
            </h5>
            <p className="mb-4 text-gray-500">
              Tokyi guest house,{" "}
              <span className="font-semibold text-black">
                Mahankal is just 7 minuts
              </span>{" "}
              walk from Boudhanath stupa.A 25 minut walk from Pashupatinath
              Temple and only 5.8 km from Kathmandu Darbar Square.
            </p>
            <p className="mb-6 text-gray-400">
              <strong>Tokyi Guest House</strong> provide a peaceful environment
              in the middle of the chaotic city of Kathmandu.You can enjoy
              beautiful valley view of kapan,phulari, monostries and Himalayas.
            </p>
            <p>
              <strong>Room types:</strong>
            </p>
            <li className="mb-2 text-gray-400">
              Twin bedroom with attached bathroom.
            </li>
            <li className="mb-2 text-gray-400">
              Double badroom with attached bathroom.
            </li>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md font-medium transition">
                About Hotel
              </button> */}
              <Link
                href="/about"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md font-medium transition"
              >
                About Hotel
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border border-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h2l3.6 7.59a1 1 0 00.7.41h7.55a1 1 0 00.71-.29l3.7-3.7a1 1 0 00-.7-1.71H5.21"
                    />
                  </svg>
                </div>
                <span className="text-lg">+01-5178282</span>
              </div>
            </div>
          </div>
          {/* Right: Photos */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/img-tokyi-guest-house-kathmandu-26.webp" // Replace with actual path
              alt="hotel"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/img-tokyi-guest-house-kathmandu-25.webp" // Replace with actual path
              alt="Sandal by Pool"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/img-tokyi-guest-house-kathmandu-25.webp" // Replace with actual path
              alt="Sandal by Pool"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
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
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{ backgroundColor: "#f8f9fa" }}
        >
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
            <p>Just minutes away from the Boudhanath stupa.</p>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Free Parking</h4>
            <p>Free parking space.</p>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Camara surveillance</h4>
            <p>Security Camara surveillance</p>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h4 className="font-bold">Airport pick & drop</h4>
            <p>Paid airport pick up and drop off service</p>
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
