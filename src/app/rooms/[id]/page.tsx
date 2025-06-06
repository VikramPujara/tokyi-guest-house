// app/rooms/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import rooms from "@/data/room";
import BannerSection from "@/app/components/BannerSection";

// ✅ CORRECT TYPE
interface RoomDetailsPageProps {
  params: {
    id: string;
  };
}

// ✅ Ensure the function is async (even if not using await)
export default async function RoomDetailsPage({
  params,
}: RoomDetailsPageProps) {
  const room = rooms.find((r) => r.id.toString() === params.id);

  if (!room) return notFound();

  return (
    <>
      <BannerSection
        backgroundImage="/img-tokyi-guest-house-kathmandu-12.jpg"
        subTitle="A luxurious stay in the heart of Kathmandu"
        title="About Tokyi Guest House"
      />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
        <p className="text-gray-600 mb-6">{room.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {room.gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${room.name} image ${index + 1}`}
              width={500}
              height={300}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </>
  );
}

// ✅ Correct return type for dynamic routes
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return rooms.map((room) => ({
    id: room.id.toString(),
  }));
}
