import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#DDB764] py-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-12">
        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start gap-4">
          <img src="/Pickleteologo.png" alt="PickleTeo" className="h-28 sm:h-28 md:h-32 w-auto flex-shrink-0" />
          <div className="mt-2 sm:mt-4">
            <div className="font-bold text-base sm:text-xl text-[#0E3E57] mb-2">PICKLETEO PADDLE CLUB</div>
            <p className="text-[#0E3E57] text-sm sm:text-base max-w-sm">Washington's locally owned indoor <br/> pickleball club. 8 courts, year-round <br/> play, and a community built from the <br/> ground up.</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#0E3E57] mb-4">Play</h4>
          <ul className="space-y-2 text-[#0E3E57] text-sm">
            <li><a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" target="_blank" rel="noopener noreferrer" className="hover:text-black">Book a Court</a></li>
            <li><a href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17390/102214" target="_blank" rel="noopener noreferrer" className="hover:text-black">Join an Open Play</a></li>
            <li><a href="/the-club" className="hover:text-black">The Club</a></li>
            <li><a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="hover:text-black">Membership</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#0E3E57] mb-4">Mukilteo</h4>
          <ul className="space-y-2 text-[#0E3E57] text-sm mb-4">
            <li>2716 119th Street SW</li>
            <li>Everett, WA 98204</li>
            <li className="pt-1"><a href="tel:4255138946" className="hover:text-black">(425) 513-8946</a></li>
            <li><a href="mailto:Info@pickleteo.com" className="hover:text-black">Info@pickleteo.com</a></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/people/Side-Out-Pickleball-Centers/61559033286696/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0E3E57] rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-200">
              <FaFacebookF className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://www.instagram.com/sideoutpickleballcenters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0E3E57] rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors duration-200">
              <FaInstagram className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://www.youtube.com/@SideOutPickleballCenters" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0E3E57] rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors duration-200">
              <FaYoutube className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://www.tiktok.com/@pickleteo" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0E3E57] rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200">
              <FaTiktok className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-8 border-t border-[#0E3E57] text-sm text-[#0E3E57] flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p>© 2026 PICKLETEO LLC. All rights reserved.</p>
        <div className="mt-4 md:mt-0 text-sm">
          Designed by <a href="http://www.statslane.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">STATSLANE</a>
        </div>
      </div>
    </footer>
  );
}
