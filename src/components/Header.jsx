import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MoreDropdown() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}} onKeyDown={e=>{if(e.key==="Escape"){setOpen(false);trigger.current?.focus();}}}>
      <button ref={trigger} type="button" aria-controls="desktop-more-links" aria-expanded={open} onClick={() => setOpen(!open)} onKeyDown={e => { if (e.key === "Escape") setOpen(false); }} className="site-more-trigger transition-colors capitalize inline-flex items-center gap-1 relative" style={{ color: open ? '#D0B060' : '' }}>
        More <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
        <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D0B060] transition-all duration-300 ${open ? 'w-full' : 'w-0'}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full right-0 w-48 pt-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div id="desktop-more-links" className="site-more-panel bg-white text-zinc-900 rounded-xl shadow-lg overflow-hidden">
              <a href="/sponsor" className="block px-4 py-3 text-sm transition-colors hover:bg-[#D0B060] hover:text-white">Sponsor</a>
              <a href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17390/102215" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm transition-colors hover:bg-[#D0B060] hover:text-white">Events</a>
              <a href="/about" className="block px-4 py-3 text-sm transition-colors hover:bg-[#D0B060] hover:text-white">About Us</a>
              <a href="/contact" className="block px-4 py-3 text-sm transition-colors hover:bg-[#D0B060] hover:text-white">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ alwaysVisible = false }) {
  const [visible, setVisible] = useState(typeof window !== 'undefined' && window.scrollY > 24);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const menuToggle=useRef(null);
  const menuPanel=useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const previousFocus=document.activeElement;
    const excluded=[...menuPanel.current.parentElement.children].filter(el=>el.tagName!=='HEADER' && el!==menuPanel.current);
    const original=excluded.map(el=>({inert:el.hasAttribute('inert'),hidden:el.getAttribute('aria-hidden')}));excluded.forEach(el=>{el.setAttribute('inert','');el.setAttribute('aria-hidden','true');});
    const focusables=()=>[menuToggle.current,...menuPanel.current.querySelectorAll('a[href],button:not([disabled])')].filter(el=>el&&el.getClientRects().length);
    const keys=e=>{if(e.key==='Escape'){setMenuOpen(false);return;}if(e.key==='Tab'){const items=focusables();const index=items.indexOf(document.activeElement);if(e.shiftKey&&(index<=0)){e.preventDefault();items.at(-1)?.focus();}else if(!e.shiftKey&&(index<0||index===items.length-1)){e.preventDefault();items[0]?.focus();}}};
    const contain=e=>{if(!menuPanel.current?.contains(e.target)&&e.target!==menuToggle.current)menuToggle.current?.focus();};
    const resize=()=>{if(window.innerWidth>=1024)setMenuOpen(false);};
    window.addEventListener('keydown',keys);document.addEventListener('focusin',contain);window.addEventListener('resize',resize);
    return()=>{document.body.style.overflow=previousOverflow;excluded.forEach((el,i)=>{if(!original[i].inert)el.removeAttribute('inert');if(original[i].hidden===null)el.removeAttribute('aria-hidden');else el.setAttribute('aria-hidden',original[i].hidden);});window.removeEventListener('keydown',keys);document.removeEventListener('focusin',contain);window.removeEventListener('resize',resize);if(previousFocus?.isConnected)previousFocus.focus();};
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [alwaysVisible]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <motion.header
        className={`site-header fixed top-0 z-[60] w-full ${alwaysVisible || visible || menuOpen ? "site-header-solid" : ""}`}
      >
        <div className="w-full px-4 sm:px-6 h-20 sm:h-20 lg:h-28 flex items-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)' }}>
          <a href="/" className="p-2 sm:p-3">
            <img src="/optimized/Pickleteologo.webp" alt="PickleTeo" className="w-auto h-[85px] sm:h-[85px] lg:h-[126px]" />
          </a>
          <motion.nav aria-label="Main navigation"
            className="hidden lg:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-medium text-white/80 ml-auto mr-2 lg:mr-8 -mt-4"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" target="_blank" rel="noopener noreferrer" className="transition-colors capitalize relative group hover:text-[#D0B060] whitespace-nowrap">
              Book a Court
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D0B060] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/open-play" className="transition-colors capitalize relative group hover:text-[#D0B060] whitespace-nowrap">
              Join an Open Play
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D0B060] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/the-club" className="transition-colors capitalize relative group hover:text-[#D0B060] whitespace-nowrap">
              The Club
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D0B060] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/membership" className="transition-colors capitalize relative group hover:text-[#D0B060] whitespace-nowrap">
              Membership
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D0B060] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/learn-improve" className="transition-colors whitespace-nowrap hover:text-[#D0B060]">Learn & Improve</a>
            <MoreDropdown />
          </motion.nav>

          <motion.button ref={menuToggle} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="lg:hidden ml-auto text-white relative z-[60] min-w-11 min-h-11 flex flex-col items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuPanel} role="navigation" aria-label="Mobile navigation" id="mobile-navigation" onClick={e => { if (e.target.closest('a')) setMenuOpen(false); }} className="lg:hidden fixed inset-0 bg-black/95 text-white px-6 pt-20 pb-6 flex flex-col gap-1 overflow-y-auto z-50"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Book a Court</a>
            <a href="/open-play" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Join an Open Play</a>
            <a href="/learn-improve" className="py-3 border-b border-white/10 hover:text-[#DDB764]">Learn & Improve</a>
            <a href="/#start-here" className="py-3 border-b border-white/10 text-[#DDB764] font-semibold">New to pickleball? Start here</a>
            <a href="/the-club" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">The Club</a>
            <a href="/membership" className="py-3 border-b border-white/10 hover:text-[#DDB764] transition-colors">Membership</a>
            <div className="border-b border-white/10">
              <button type="button" aria-expanded={moreOpen} aria-controls="mobile-more-links" onClick={() => setMoreOpen(!moreOpen)} className="w-full flex justify-between items-center py-3 hover:text-[#DDB764] transition-colors">
                More <span className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    id="mobile-more-links" className="pl-4 pb-2 flex flex-col gap-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="/sponsor" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Sponsor</a>
                    <a href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17390/102215" target="_blank" rel="noopener noreferrer" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Events</a>
                    <a href="/about" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">About Us</a>
                    <a href="/contact" className="py-2 text-sm text-white/70 hover:text-[#DDB764] transition-colors">Contact Us</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <span id="main-content" tabIndex={-1} className="sr-only">Main content</span>
    </>
  );
}
