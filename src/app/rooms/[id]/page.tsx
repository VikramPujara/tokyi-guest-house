import { notFound } from "next/navigation";
import Image from "next/image";
import { premiumRooms } from "@/data/room";
import BannerSection from "@/app/components/BannerSection";

interface RoomDetailsPageProps {
  params: Promise<{ id: string }>; // ✅ params is a Promise
}

export default async function RoomDetailsPage({
  params,
}: RoomDetailsPageProps) {
  const { id } = await params; // ✅ unwrap the Promise

  const room = premiumRooms.find((r) => r.id.toString() === id);

  if (!room) return notFound();

  return (
    <>
      <BannerSection backgroundImage={room.thumbnail} subTitle="" title="" />
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
              height={400}
              className="rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return premiumRooms.map((room) => ({
    id: room.id.toString(),
  }));
}
