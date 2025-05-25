import React from "react";
// src/app/services/page.tsx
import { BedDouble, Coffee, Car, Leaf, Wifi, Users } from "lucide-react";
import BannerSection from "../components/BannerSection";

const services = [
  {
    icon: <BedDouble className="w-8 h-8 text-yellow-500" />,
    title: "Comfortable Rooms",
    description: "Spacious and cozy rooms with city or mountain views.",
  },
  {
    icon: <Coffee className="w-8 h-8 text-yellow-500" />,
    title: "Complimentary Breakfast",
    description: "Enjoy local and continental breakfast every morning.",
  },
  {
    icon: <Car className="w-8 h-8 text-yellow-500" />,
    title: "Airport Pickup & Drop",
    description: "Free transportation service to and from the airport.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-yellow-500" />,
    title: "Yoga & Sound Healing",
    description:
      "Relax with guided yoga and traditional sound healing sessions.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-yellow-500" />,
    title: "Free Wi-Fi",
    description: "High-speed internet access in every room and public area.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: "Family Friendly",
    description: "Spacious rooms and a safe environment for all ages.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BannerSection
        backgroundImage="/img-tokyi-guest-house-kathmandu-20.jpg"
        subTitle="A luxurious stay in the heart of Kathmandu"
        title="About Tokyi Guest House"
      />

      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-[#0e3f63] mb-10">
          Our Hotel Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0e3f63] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
