// src/app/about/page.tsx
import BannerSection from "../components/BannerSection";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* 1. Hero Banner */}

      <BannerSection
        backgroundImage="/img-tokyi-guest-house-kathmandu-12.jpg"
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
          Tokyi Guest House Kathmandu includes 18 rooms and is merely 0.7 km
          from Room. Guests who stay at the guest house can park their car on
          site. This property in Boudhha, which is a pilgrimage destination for
          Tibetans is within 10 minutes. drive of Pashupatinath Temple and a
          15-minute ride from such shopping venues as Kathmandu Durbar Square.
          Pullahari Monastery is around 25 minutes walk from the hotel and
          Tribhuvan airport is 10 km away. The area also includes natural sights
          like Garden of Dreams a 10-minute drive from the accommodation. There
          is Bhrikuti Chwok bus stop in proximity to Tokyi Guest House.
          Guestrooms offer a patio and a balcony, along with a sofa set for
          guests comfort. They have kitchen facilities, such as an electric
          kettle, a refrigerator, and kitchenware. Featuring a tub, a separate
          toilet, and a shower, the bathrooms also come with bath sheets and
          slippers. Asian cuisine is served at Asian Heritage Inn & Bistro that
          lies 18 minutes walk away.
        </p>
      </section>
    </div>
  );
}
