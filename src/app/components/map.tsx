"use client";

export default function Map() {
  return (
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
  );
}
