"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Room = {
  id: number;
  name: string;
  price: string;
  description: string;
  thumbnail: string;
  gallery: string[];
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
  },
];

// export default function RoomGallery() {
//   const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

//   const openGallery = (room: Room) => setSelectedRoom(room);

//   const closeGallery = () => setSelectedRoom(null);

//   return (
//     <section className="py-16 bg-gray-100 px-4">
//       <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
//         Our Premium Rooms
//       </h2>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {premiumRooms.map((room) => (
//           <div
//             key={room.id}
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
//               <p className="text-sm">{room.description}</p>
//               <p className="text-yellow-300 font-bold mt-1">{room.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for full gallery */}
//       {selectedRoom && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center px-4 py-8 overflow-auto">
//           <button
//             className="text-white absolute top-6 right-6"
//             onClick={closeGallery}
//           >
//             <X size={30} />
//           </button>
//           <h3 className="text-2xl font-bold text-white mb-4">
//             {selectedRoom.name}
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {selectedRoom.gallery.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`${selectedRoom.name} ${index + 1}`}
//                 width={500}
//                 height={300}
//                 className="rounded-lg shadow-lg"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
export default function RoomGallery() {
  // const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  //const openGallery = (room: Room) => setSelectedRoom(room);
  // const closeGallery = () => setSelectedRoom(null);
  const router = useRouter();
  const openGallery = (room: Room) => {
    router.push(`/rooms/${room.id}`);
  };

  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
        Our Premium Rooms
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {premiumRooms.map((room) => (
          <SwiperSlide key={room.id}>
            <div
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openGallery(room)}
            >
              <Image
                src={room.thumbnail}
                alt={room.name}
                width={600}
                height={400}
                className="transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-md shadow text-yellow-600 font-bold text-sm">
                {room.price}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <p className="text-sm">{room.description}</p>
                <p className="text-yellow-300 font-bold mt-1">{room.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
