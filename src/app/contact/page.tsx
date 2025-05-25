"use client";
import { useState } from "react";

import BannerSection from "../components/BannerSection";
import BookingForm from "../components/BookingForm";

export default function contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phnumber: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <BannerSection
        backgroundImage="/img-tokyi-guest-house-kathmandu-12.jpg"
        subTitle="GET IN TOUCH"
        title="Contact Us"
      />
      {/* Tow column section */}
      <div
        className="max-w-7xl max-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Hotel Information</h2>
            <p className="text-gray-600">
              Hotel XYZ, 123 Beachside Avenue, Miami, FL
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <p className="text-gray-700">📞 Landline: (123) 456-7890</p>
            <p className="text-gray-700">💬 WhatsApp: +1 234-567-8901</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border px-4 py-2 rounded"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=27.7172,85.324&hl=es;z=14&output=embed`}
        ></iframe>
      </div>
    </>
  );
}
