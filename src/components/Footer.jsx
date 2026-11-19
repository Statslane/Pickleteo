
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer bg-[#D0B060] py-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-12">
        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start gap-4">
          <img loading="lazy" decoding="async" src="/optimized/Pickleteologo.webp" alt="PickleTeo" className="h-28 sm:h-28 md:h-32 w-auto flex-shrink-0" />
          <div className="mt-2 sm:mt-4">
            <div className="font-semibold text-base sm:text-xl text-[#0F5050] mb-2">PICKLETEO PADDLE CLUB</div>
            <p className="text-[#0F5050] text-sm sm:text-base max-w-sm font-normal leading-relaxed">Your place to play, connect, and belong. Our locally owned indoor pickleball club serving the Mukilteo and Everett area brings people together—from their first game to their weekly routine—to build friendships, improve, and keep coming back.</p>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-[#0F5050] mb-4 uppercase tracking-widest text-xs">Explore</h2>
          <ul className="space-y-2 text-[#0F5050] text-sm font-normal">
            <li><a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" target="_blank" rel="noopener noreferrer" className="hover:text-black">Book a Court</a></li>
            <li><a href="/open-play" className="hover:text-black">Join an Open Play</a></li>
            <li><a href="/learn-improve">Learn & Improve</a></li><li><a href="/the-club" className="hover:text-black">The Club</a></li>
            <li><a href="/membership" className="hover:text-black">Membership</a></li><li><a href="/policies">Club policies</a></li><li><a href="/policies/pickleteo-privacy.pdf">Privacy policy (PDF)</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-[#0F5050] mb-4 uppercase tracking-widest text-xs">Visit Us</h2>
          <ul className="space-y-2 text-[#0F5050] text-sm mb-4 font-normal">
            <li>2716 119th Street SW</li>
            <li>Everett, WA 98204</li>
            <li className="pt-1"><a href="tel:4255138946" className="hover:text-black">(425) 513-8946</a></li>
            <li><a href="mailto:Info@pickleteo.com" className="hover:text-black">Info@pickleteo.com</a></li>
            <li className="pt-1 font-medium">Open Daily</li>
            <li>5:00 AM – 11:00 PM</li><li className="text-xs max-w-xs">May close early when bookings are light.</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a aria-label="Pickleteo on Facebook" href="https://www.facebook.com/people/Pickleteo-Paddle-Club/61592873541442/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#0F5050] rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-200">
              <FaFacebookF className="w-3.5 h-3.5 text-white" />
            </a>
            <a aria-label="Pickleteo on Instagram" href="https://www.instagram.com/pickleteopaddleclub/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#0F5050] rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors duration-200">
              <FaInstagram className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-8 border-t border-[#0F5050] text-sm text-[#0F5050] flex flex-col md:flex-row justify-between items-center text-center md:text-left font-normal">
        <p className="font-medium">© 2026 NW Recreation LLC. All rights reserved.</p>
        <div className="mt-4 md:mt-0 text-xs md:ml-auto">
          Designed by <a href="https://www.statslane.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Statslane</a>
        </div>
      </div>
    </footer>
  );
}
