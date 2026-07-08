import React, { useState, useEffect } from 'react';

function MoreDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="transition-colors capitalize flex items-center gap-1 relative" style={{ color: open ? '#DDB764' : '' }}>
        More <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
        <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#DDB764] transition-all duration-300 ${open ? 'w-full' : 'w-0'}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 w-48">
          <div className="pt-2">
            <div className="bg-white text-zinc-900 rounded-md shadow-lg overflow-hidden animate-dropdown">
              <a href="/sponsor" className="block px-4 py-3 text-sm transition-colors hover:bg-[#DDB764] hover:text-white">Sponsor</a>              <a href="/about" className="block px-4 py-3 text-sm transition-colors hover:bg-[#DDB764] hover:text-white">About Us</a>
              <a href="https://pickleteo.com/register" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm transition-colors hover:bg-[#DDB764] hover:text-white">Register</a>
              <a href="https://pickleteo.com/contact" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm transition-colors hover:bg-[#DDB764] hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ alwaysVisible = false }) {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setVisible(window.scrollY < window.innerHeight);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [alwaysVisible]);

  return (
    <>
      <header className={`fixed top-0 z-[60] w-full transition-transform duration-300 ${visible || alwaysVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full px-4 sm:px-6 h-14 sm:h-20 lg:h-28 flex items-center">
          <a href="/">
            <img src="/Pickleteologo.png" alt="PickleTeo" className="w-auto h-10 sm:h-16 lg:h-24" />
          </a>
          <nav className="hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm font-medium text-white/80 ml-auto mr-2 lg:mr-8 -mt-4">
            <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" target="_blank" rel="noopener noreferrer" className="transition-colors capitalize relative group hover:text-[#DDB764] whitespace-nowrap">
              Book a Court
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DDB764] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17390/102214" target="_blank" rel="noopener noreferrer" className="transition-colors capitalize relative group hover:text-[#DDB764] whitespace-nowrap">
              Join an Open Play
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DDB764] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/the-club" className="transition-colors capitalize relative group hover:text-[#DDB764] whitespace-nowrap">
              The Club
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DDB764] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="transition-colors capitalize relative group hover:text-[#DDB764] whitespace-nowrap">
              Membership
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DDB764] transition-all duration-300 group-hover:w-full" />
            </a>
            <MoreDropdown />
          </nav>

          <button className="md:hidden ml-auto text-white relative z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 text-white px-6 pt-20 pb-6 flex flex-col gap-1 overflow-y-auto z-50">
          <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Book a Court</a>
          <a href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17390/102214" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Join an Open Play</a>
          <a href="/the-club" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">The Club</a>
          <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Membership</a>
          <div className="border-b border-white/10">
            <button onClick={() => setMoreOpen(!moreOpen)} className="w-full flex justify-between items-center py-3 hover:text-[#DDB764] transition-colors">
              More <span className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {moreOpen && (
              <div className="pl-4 pb-2 flex flex-col gap-1">
                <a href="/sponsor" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Sponsor</a>
                <a href="/about" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">About Us</a>
                <a href="https://pickleteo.com/register" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Register</a>
                <a href="https://pickleteo.com/contact" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Contact Us</a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
