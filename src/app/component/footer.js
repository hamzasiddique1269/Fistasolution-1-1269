import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-700 px-4 md:px-12 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
      {/* Left: Footer2 image and copyright */}
      <div className="flex flex-col items-center md:items-start gap-2 flex-1 min-w-[200px]">
        <Image src="/assert/footer2.webp" alt="Footer Icon 2" width={48} height={48} className="w-12 h-12 object-contain" />
        <span className="text-base md:text-lg text-gray-300 font-sans mt-2 md:mt-0">© 2025 Decagon. All rights reserved.</span>
      </div>
      {/* Center: Footer logo */}
      <div className="flex-1 flex justify-center items-center min-w-[120px]">
        <Image src="/assert/footerlogo.png" alt="Footer Logo Center" width={120} height={120} className="w-16 h-16 object-contain" />
      </div>
      {/* Right: Navigation links */}
      <div className="flex-1 flex flex-col md:flex-row justify-end items-center md:items-start gap-8 md:gap-16 min-w-[250px]">
        <div className="flex flex-col gap-3 text-gray-300 text-lg font-sans">
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Security</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Settings</a>
          <a href="#" className="hover:underline">Docs</a>
        </div>
        <div className="flex flex-col gap-3 text-gray-300 text-lg font-sans">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Sales</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Join us!</a>
        </div>
      </div>
    </footer>
  );
}
