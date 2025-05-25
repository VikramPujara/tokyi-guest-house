"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
//fix missing marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const position: [number, number] = [27.7172, 85.324];

export default function Map() {
  return (
    // <MapContainer
    //   center={position}
    //   zoom={13}
    //   scrollWheelZoom={false}
    //   className="h-[400px] w-full rounded-md z-0"
    // >
    //   {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
    //   {/* <TileLayer
    //     url="https://{s}.tile.openstreetmap.fr/osm-en/{z}/{x}/{y}.png"
    //     attribution="&copy; OpenStreetMap contributors, tiles from osm-fr (English)"
    //   /> */}
    //   <TileLayer
    //     url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a> contributors'
    //   />

    //   <Marker position={position}>
    //     <Popup>
    //       Tokey Guest House, <String>Kathmandu</String>
    //     </Popup>
    //   </Marker>
    // </MapContainer>
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
