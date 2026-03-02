// src/app/about/page.tsx
import BannerSection from "../components/BannerSection";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* 1. Hero Banner */}

      <BannerSection
        backgroundImage="/rooms/gardeen/2.PNG"
        subTitle="A luxurious stay in the heart of Kathmandu"
        title="About Tokyi Guest House"
      />
      {/* <section
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/img-tokyi-guest-house-kathmandu-12.jpg')",
        }}
      >
        <div className="bg-black/50 h-full flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <p className="text-xl">
              A luxurious stay in the heart of Kathmandu
            </p>
            <h1 className="text-5xl font-bold">About Tokyi Guest House</h1>

            <button className="bg-yellow-500 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-600 transition">
              Book Your Stay
            </button>
          </div>
        </div>
      </section> */}

      {/* 2. About */}
      <section className="py-16 bg-white text-center px-4 md:px-16">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto">
          Tokyi means “Comfortable and Happy” in Tibetan — and that is exactly
          the feeling we hope every guest experiences during their stay with us.
        </p>
        <p className="max-w-3xl mx-auto">
          Nestled in the peaceful neighborhood of Mahankal, just a short walk
          from the sacred Boudhanath Stupa, Tokyi Guest House was created as a
          quiet sanctuary in the heart of vibrant Kathmandu.
        </p>
        <p className="max-w-3xl mx-auto">
          Living in a busy city can sometimes feel overwhelming — the traffic,
          the noise, the fast pace. We wanted to create a space where travelers
          can slow down, breathe deeply, and truly relax. A place where mornings
          begin with soft sunlight and fresh air, and evenings end with peaceful
          valley views of Kapan Phulari, surrounding monasteries, and the
          distant Himalayas. Tokyi is more than just a guest house. It is a home
          built with care, simplicity, and warmth. Our 18 thoughtfully designed
          rooms offer comfort and privacy, while our garden, terrace, and
          on-site restaurant provide space to unwind and connect. Whether you
          are visiting for pilgrimage, travel, work, or retreat, our aim is
          simple — to make you feel safe, welcomed, and happy.
        </p>
      </section>
    </div>
  );
}
