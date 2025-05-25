"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    email: "",
    checkin: "",
    checkout: "",
    rooms: "1",
    adults: "2",
    child: "0",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.email || !form.checkin || !form.checkout) {
      setError("E-mail address, check-in and check-out dates are mandatory!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validate()) return;

    try {
      const res = await fetch("/api/sendBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Booking request sent successfully!");
        setForm({
          email: "",
          checkin: "",
          checkout: "",
          rooms: "1",
          adults: "2",
          child: "0",
        });
      } else {
        setError("Failed to send booking request.");
      }
    } catch (err: any) {
      setError("Error sending request: " + (err.message || String(err)));
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
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

      <form
        onSubmit={handleSubmit}
        className="w-[100%] mx-auto flex flex-wrap items-end justify-between gap-1 py-1"
      >
        <div className="flex flex-col w-[40%] min-w-[300px]">
          <label className="text-sm">Your E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded shadow-sm"
          />
        </div>

        <div className="flex flex-col w-[20%] min-w-[200px]">
          <label className="text-sm">Check-in</label>
          <input
            type="date"
            name="checkin"
            value={form.checkin}
            onChange={handleChange}
            className="p-2 border rounded shadow-sm"
          />
        </div>

        <div className="flex flex-col w-[20%] min-w-[200px]">
          <label className="text-sm">Check-out</label>
          <input
            type="date"
            name="checkout"
            value={form.checkout}
            onChange={handleChange}
            className="p-2 border rounded shadow-sm"
          />
        </div>

        <div className="flex flex-col w-[10%] min-w-[80px]">
          <label className="text-sm">Rooms</label>
          <select
            name="rooms"
            value={form.rooms}
            onChange={handleChange}
            className="p-2 border rounded shadow-sm"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-[10%] min-w-[80px]">
          <label className="text-sm">Adults</label>
          <select
            name="adults"
            value={form.adults}
            onChange={handleChange}
            className="p-2 border rounded shadow-sm"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-[10%] min-w-[80px]">
          <label className="text-sm">Child</label>
          <select
            name="child"
            value={form.child}
            onChange={handleChange}
            className="p-2 border rounded shadow-sm"
          >
            {[0, 1, 2, 3].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="w-[20%] min-w-[200px] flex justify-end">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition w-full"
          >
            BOOK NOW →
          </button>
        </div>
      </form>
    </div>
  );
}
