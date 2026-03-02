"use client";
import { useState } from "react";
import BannerSection from "../components/BannerSection";

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validate()) return;
    try {
      const res = await fetch("/api/bookContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Your messege sent successfully!");
        setForm({
          email: "",
          name: "",
          message: "",
        });
      } else {
        setError("Failed to send booking request.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Error sending request: " + err.message);
      } else {
        setError("Error sending request: " + String(err));
      }
    }
  };

  const validate = () => {
    if (!form.email && !form.name && !form.message) {
      setError("Name,email and message fields are mandatory");
      return false;
    }
    return true;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <BannerSection
        backgroundImage="/rooms/gardeen/17.jpg"
        subTitle="GET IN TOUCH"
        title="Contact Us"
      />

      <div
        className="max-w-7xl max-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Hotel Information</h2>
            <p className="text-gray-600">
              Mahakal Road Boudha, Kathmandu, Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <p className="text-gray-700">📞 Landline: +977 015178282</p>
            <p className="text-gray-700">💬 WhatsApp: +977 9851133344</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded shadow-md mb-4 text-center">
              ❗ {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-4 rounded shadow-md mb-4 text-center">
              ✅ {success}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
              value={form.name}
              onChange={handleChange}
              name="name"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border px-4 py-2 rounded"
              value={form.message}
              onChange={handleChange}
              name="message"
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
          src={`https://www.google.com/maps?q=27.726675,85.361197&hl=es;z=14&output=embed`}
        ></iframe>
      </div>
    </>
  );
}
