const Footer = () => {
  return (
    <footer className="bg-[#D4AF37] py-2 shadow-md text-white py-8 px-4 text-center">
      <p>&copy; 2025 Tokyi Guest House. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
