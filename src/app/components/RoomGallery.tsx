"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// // import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { X } from "lucide-react";
// import room from "../../data/room";

// type Room = {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
//   thumbnail: string;
//   gallery: string[];
//   type:
//     | "twin-room-attached"
//     | "double-room-attached"
//     | "twin-room-common"
//     | "Service-apartment"
//     | "Lomanthang"
//     | "Thengar"
//     | "Ghemi";
// };

// export default function RoomGallery() {
//   const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

//   const openGallery = (room: Room) => setSelectedRoom(room);

//   const closeGallery = () => setSelectedRoom(null);

//   return (
//     <section className="py-16 bg-gray-100 px-4">
//       <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
//         Gallery
//       </h2>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {room.map((room) => (
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
// // export default function RoomGallery() {
// //   const router = useRouter();
// //   const openGallery = (room: Room) => {
// //     router.push(`/rooms/${room.id}`);
// //   };

// //   return (
// //     <section className="py-16 bg-gray-100 px-4">
// //       <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
// //         Gallery
// //       </h2>
// //       <Swiper
// //         modules={[Navigation, Autoplay]}
// //         navigation
// //         autoplay={{ delay: 3000 }}
// //         spaceBetween={20}
// //         slidesPerView={1}
// //         breakpoints={{
// //           640: { slidesPerView: 1 },
// //           768: { slidesPerView: 2 },
// //           1024: { slidesPerView: 3 },
// //         }}
// //       >
// //         {premiumRooms.map((room) => (
// //           <SwiperSlide key={room.id}>
// //             <div
// //               className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
// //               onClick={() => openGallery(room)}
// //             >
// //               <Image
// //                 src={room.thumbnail}
// //                 alt={room.name}
// //                 width={600}
// //                 height={400}
// //                 className="transform group-hover:scale-105 transition duration-300"
// //               />
// //               <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-md shadow text-yellow-600 font-bold text-sm">
// //                 {room.price}
// //               </div>
// //               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
// //                 <h3 className="text-lg font-semibold">{room.name}</h3>
// //                 <p className="text-sm">{room.description}</p>
// //                 <p className="text-yellow-300 font-bold mt-1">{room.price}</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </section>
// //   );
// //}
"use client";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Room, premiumRooms } from "../../data/room";

// type Room = {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
//   thumbnail: string;
//   gallery: string[];
//   type:
//     | "twin-room-attached"
//     | "double-room-attached"
//     | "twin-room-common"
//     | "Service-apartment"
//     | "Lomanthang"
//     | "Thengar"
//     | "Ghemi";
// };

export default function RoomGallery() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openGallery = (room: Room) => {
    setSelectedRoom(room);
    setCurrentIndex(0); // start at first image
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    setCurrentIndex(0);
  };

  const showPrev = () => {
    if (selectedRoom) {
      setCurrentIndex((prev) =>
        prev === 0 ? selectedRoom.gallery.length - 1 : prev - 1
      );
    }
  };

  const showNext = () => {
    if (selectedRoom) {
      setCurrentIndex((prev) =>
        prev === selectedRoom.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#0e3f63]">
        Gallery
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {premiumRooms.map((room) => (
          <div
            key={room.id}
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
        ))}
      </div>

      {/* Modal for full gallery */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center px-4 py-8">
          <button
            className="text-white absolute top-6 right-6"
            onClick={closeGallery}
          >
            <X size={30} />
          </button>

          <h3 className="text-2xl font-bold text-white mb-4">
            {selectedRoom.name}
          </h3>

          {/* Image viewer */}
          <div className="relative flex items-center justify-center w-full max-w-4xl">
            <button
              className="absolute left-0 text-white p-4"
              onClick={showPrev}
            >
              <ChevronLeft size={40} />
            </button>

            <Image
              src={selectedRoom.gallery[currentIndex]}
              alt={`${selectedRoom.name} ${currentIndex + 1}`}
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />

            <button
              className="absolute right-0 text-white p-4"
              onClick={showNext}
            >
              <ChevronRight size={40} />
            </button>
          </div>

          {/* Small thumbnails below */}
          <div className="flex gap-2 mt-6 overflow-x-auto">
            {selectedRoom.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${selectedRoom.name} ${index + 1}`}
                width={100}
                height={70}
                className={`cursor-pointer rounded-md border ${
                  index === currentIndex
                    ? "border-yellow-400"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
