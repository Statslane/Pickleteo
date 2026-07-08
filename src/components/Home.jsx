import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TheClub from './TheClub';
import Sponsor from './Sponsor';

import AboutUs from './AboutUs';

function Home() {
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full flex flex-col items-start justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-12">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white">
              Best Courts. <br /> Best Lights. <br /><span className="text-[#DDB764]">Best Play.</span>
            </h1>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-xl text-zinc-200 max-w-lg">
              Experience the Puget Sound area's premier dedicated indoor pickleball facility. Longer play, faster recovery, and unmatched community.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#DDB764] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#CBA55A] transition w-full sm:w-auto">
                Reserve a Court
              </button>
              <button className="bg-[#0E3E57] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#0D3F57] transition w-full sm:w-auto">
                View Memberships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY SECTION */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-[#0E3E57] inline-block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0E3E57]">Facility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-8">
              <span className="text-[#0E3E57]">EIGHT COURTS.</span><br />
              <span className="text-[#DDB764]">ZERO COMPROMISES.</span>
            </h2>
            <p className="text-zinc-600 mb-4">We're building a purpose-built facility with eight indoor pickleball courts. Professional-grade surfaces, LED sport lighting, high ceilings, and climate control for year-round comfort.</p>
            <p className="text-zinc-600">No shared gym floors. No outdoor courts with rain delays. This is a dedicated pickleball facility — every square foot is designed for the sport.</p>
          </div>
          <div className="divide-y divide-zinc-200 w-full lg:ml-auto lg:w-3/4">
            {[
              { label: 'COURTS', value: '8 indoor courts' },
              { label: 'SURFACE', value: 'Professional-grade sport court' },
              { label: 'LIGHTING', value: 'LED sport lighting system' },
              { label: 'CLIMATE', value: 'Fully insulated & climate-controlled' },
              { label: 'TECHNOLOGY', value: 'Smart courts equipped with cameras' },
              { label: 'MEMBERSHIP', value: 'Capped — courts always available' },
              { label: 'LOCATION', value: 'Everett, WA' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-3 gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 shrink-0">{label}</span>
                <span className="font-semibold text-zinc-900 text-right text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="pt-10 pb-12 lg:pb-24 bg-[#113D56]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 lg:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DDB764]">POWERED BY STATSLANE</span>
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            <span className="text-[#DDB764]">RECORD YOUR GAME</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="flex flex-col lg:pt-16">
            <h2 className="text-xl sm:text-2xl text-white font-black tracking-tight leading-tight mb-4">SMART COURT</h2>
            <p className="text-zinc-300 mb-4 text-sm">We're proud to partner with Statslane to bring AI-powered game film and performance analytics to our pickleball community. Every match can be automatically recorded, allowing players to review their games, track progress, and share their best moments.</p>
            <a href="https://apps.apple.com/us/app/statslane/id6767483097" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black border border-white text-white px-5 py-3 rounded-xl w-fit hover:bg-zinc-800 transition">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white">Download on the</span>
                <span className="text-base text-white font-semibold">App Store</span>
              </div>
            </a>
          </div>
          <div className="flex justify-center order-first lg:order-none">
            <img src="/Camera.png" alt="Court Camera" className="w-36 sm:w-48 lg:w-72 object-cover rounded-2xl" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4">
              <span className="text-white">GAME FILM & STATS</span>
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Full game film available after your match',
                'Automatic highlight clips and exciting rally reels',
                'Player and doubles team statistics',
                'Match history and performance tracking',
                'Easy sharing of highlights with friends and social media',
                'Coach-friendly match review and player development tools',
              ].map(f => (
                <li key={f} className="flex items-start gap-2 text-zinc-200 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#DDB764] flex items-center justify-center text-[#0E3E57] text-xs flex-shrink-0 mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="py-12 lg:py-24 bg-zinc-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0E3E57] mb-4">BECOME A <span className="text-[#DDB764]">MEMBER</span></h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm">PICKLETEO Paddle Club offers a wide range of memberships designed for players of all interests and abilities. Our pricing delivers the greatest value of any facility in the area to fit your needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Premium Plus */}
            <div className="bg-[#DDB764] rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_#DDB764]">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#0E3E57] mb-4">Premium Plus</div>
              <div className="mb-4"><span className="text-5xl font-black text-[#0E3E57]">$120</span><span className="text-[#0E3E57]">/mo</span></div>
              <div className="font-bold text-[#0E3E57] mb-6">Plus $100 initiation fee</div>
              <ul className="space-y-3 text-sm text-[#0E3E57] flex-1">
                {['One Free Open Play every day', 'Up to 4 hours of court reservations per week', '7-day advance booking window', '25% Discount on League Play', '15% Discount on Training sessions', '5% Discount in the Pro Shop', '$10/hour Ball Machine Rental', 'Family add-ons available for $80 per month each. You can add up to 2 family members.'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-[#0E3E57] mt-0.5">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full border border-[#0E3E57] bg-[#0E3E57] text-white py-3 rounded-md font-medium transition flex items-center justify-center gap-2">Learn More →</a>
            </div>
            {/* Open Play Plus */}
            <div className="bg-[#DDB764] rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_#DDB764]">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#0E3E57] mb-4">Open Play Plus</div>
              <div className="mb-4"><span className="text-5xl font-black text-[#0E3E57]">$80</span><span className="text-[#0E3E57]">/mo</span></div>
              <div className="font-bold text-[#0E3E57] mb-6">Plus $100 initiation fee</div>
              <ul className="space-y-3 text-sm text-[#0E3E57] flex-1">
                {['1 Free Open Play per day', '2-hour court reservation', '48-hour advance reservation window', '5% Discount in the Pro Shop', 'Discount on League Play and Training'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-[#0E3E57] mt-0.5">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full border border-[#0E3E57] bg-[#0E3E57] text-white py-3 rounded-md font-medium transition flex items-center justify-center gap-2">Learn More →</a>
            </div>
            {/* Guest Membership */}
            <div className="bg-[#DDB764] rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_#DDB764]">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#0E3E57] mb-4">Guest Membership</div>
              <div className="mb-10" />
              <ul className="space-y-3 text-sm text-[#0E3E57] flex-1">
                {['$50/hr includes up to 6 players', 'Reservations If Available'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-[#0E3E57] mt-0.5">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full border border-[#0E3E57] bg-[#0E3E57] text-white py-3 rounded-md font-medium transition flex items-center justify-center gap-2">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 md:py-24 px-6 sm:px-10 text-center max-w-3xl mx-auto">
        <div className="inline-block bg-[#0E3E57] text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">Courts Are Open</div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-6 text-[#0E3E57]">Ready to hit the courts?</h2>
        <p className="text-base sm:text-lg text-[#0E3E57] mb-8">Join the fastest-growing community in the Pacific Northwest. Experience the PickleTeo difference today.</p>
        <button className="bg-[#DDB764] text-[#0E3E57] px-8 py-4 rounded-md font-medium text-lg hover:bg-[#C6A55A] w-full sm:w-auto transition">
          View Schedule & Book
        </button>
      </section>

      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-club" element={<TheClub />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
