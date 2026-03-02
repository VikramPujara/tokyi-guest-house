import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative bg-[#D4AF37] text-white py-8 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Side: Location and Contact */}
        <div className="space-y-2 text-sm text-left">
          <p className="font-bold text-lg">Tokyi Guest House & Restaurant</p>
          <p>Mahankal, Boudha, Kathmandu</p>

          <p className="flex items-center gap-2">
            <svg
              className="w-5 h-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.5L0 6V18h24V6l-12 7.5zM12 12L0 4h24L12 12z" />
            </svg>
            tokyihouse@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <span>📞 01-5178282</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Whatsapp: +977 9851133344</span>
          </p>
        </div>

        {/* Right Side: Tripadvisor Logo */}
        <a
          href="https://www.tripadvisor.com/Hotel_Review-g293890-d23217248-Reviews-Tokyi_Guest_House-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/tripadvisor.png"
            alt="Tripadvisor"
            width={100} // Set width in pixels
            height={48} // Set height in pixels
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 text-sm">
        &copy; 2025 Tokyi Guest House & Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
