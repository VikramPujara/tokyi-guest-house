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
        src={`https://www.google.com/maps?q=27.726675,85.361197&hl=es;z=14&output=embed`}
      ></iframe>
    </div>
  );
}
