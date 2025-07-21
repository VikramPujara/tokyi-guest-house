"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type Room = {
  id: number;
  name: string;
  price: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  type: "Single" | "Double" | "Suite" | "Service-apartment";
};

const premiumRooms: Room[] = [
  {
    id: 1,
    name: "Premium Sea View",
    price: "$120/night",
    description: "Luxurious room with ocean view, king-size bed, and balcony.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-1.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-18.jpg",
      "/rooms/tokyi-guest-house-kathmandu-pic-1.jpg",
      "/rooms/premium3.jpg",
    ],
    type: "Single",
  },
  {
    id: 2,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
    gallery: [
      "/rooms/img-tokyi-guest-house-kathmandu-8.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Double",
  },
  {
    id: 3,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Double",
  },
  {
    id: 4,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 5,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 6,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 7,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 8,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 9,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 10,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Suite",
  },
  {
    id: 11,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Single",
  },
  {
    id: 12,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
  {
    id: 13,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
  {
    id: 14,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
  {
    id: 15,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
  {
    id: 16,
    name: "Deluxe Garden View",
    price: "$100/night",
    description: "Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
  {
    id: 17,
    name: "Deluxe Garden View",
    price: "$100/night",
    description:
      "Spacious room with garden view and elegant interior.Spacious room with garden view and elegant interior.Spacious room with garden view and elegant interior.",
    thumbnail: "/rooms/tokyi-guest-house-kathmandu-pic-8.jpg",
    gallery: [
      "/rooms/tokyi-guest-house-kathmandu-pic-7.jpg",
      "/rooms/deluxe2.jpg",
      "/rooms/deluxe3.jpg",
    ],
    type: "Service-apartment",
  },
];

export default function RoomType() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeFileter = searchParams.get("type");
  const filteredRooms = typeFileter
    ? premiumRooms.filter((room) => room.type === typeFileter)
    : premiumRooms;

  const openGallery = (room: Room) => {
    router.push(`/rooms/${room.id}`);
  };

  // return (
  //   <section className="py-16 bg-gray-100 px-4">
  //     <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
  //       {typeFileter ? `${typeFileter} Rooms` : ` Our Premium Rooms`}
  //     </h2>
  //     <Swiper
  //       modules={[Navigation, Autoplay]}
  //       navigation
  //       autoplay={{ delay: 3000 }}
  //       spaceBetween={20}
  //       slidesPerView={1}
  //       breakpoints={{
  //         640: { slidesPerView: 1 },
  //         768: { slidesPerView: 2 },
  //         1024: { slidesPerView: 3 },
  //       }}
  //     >
  //       {filteredRooms.map((room) => (
  //         <SwiperSlide key={room.id}>
  //           <div
  //             className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
  //             onClick={() => openGallery(room)}
  //           >
  //             <Image
  //               src={room.thumbnail}
  //               alt={room.name}
  //               width={600}
  //               height={400}
  //               className="transform group-hover:scale-105 transition duration-300"
  //             />
  //             <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-md shadow text-yellow-600 font-bold text-sm">
  //               {room.price}
  //             </div>
  //             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
  //               <h3 className="text-lg font-semibold">{room.name}</h3>
  //               {/* <p className="text-sm">{room.description}</p> */}
  //               <p className="text-yellow-300 font-bold mt-1">{room.price}</p>
  //             </div>
  //           </div>
  //           <div className="description">{room.description}</div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </section>
  // );

  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63] m-[15px]">
        {typeFileter ? `${typeFileter} Rooms` : `Gellary`}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="relative  group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openGallery(room)}
          >
            <Image
              src={room.thumbnail}
              alt={room.name}
              width={600}
              height={400}
              className="transform group-hover:scale-105 transition duration-300 w-full"
            />
            <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-md shadow text-yellow-600 font-bold text-sm">
              {room.price}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{room.name}</h3>
              <p className="text-yellow-300 font-bold mt-1">{room.price}</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">{room.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
