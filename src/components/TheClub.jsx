import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const handler = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return size;
}

export default function TheClub() {
  const { w, h } = useWindowSize();

  const headingSize = w < 480 ? '2rem' : w < 768 ? '3rem' : w < 1024 ? '4rem' : `${w * 0.055}px`;
  const subSize = w < 480 ? '0.875rem' : w < 768 ? '1rem' : '1.125rem';
  const sectionHeight = Math.max(h * 1.0, 320);
  const pt = w < 768 ? '6rem' : '9rem';
  const px = w < 480 ? '1.5rem' : w < 1024 ? '2.5rem' : '4rem';

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header />

      <section
        className="relative w-full flex items-center"
        style={{
          height: sectionHeight,
          backgroundImage: 'url(/court.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative w-full max-w-7xl mx-auto" style={{ paddingTop: pt, paddingBottom: '2.5rem', paddingLeft: px, paddingRight: px }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DDB764]">The Club</span>
          </div>
          <h1 className="font-black tracking-tight leading-tight text-white mb-4" style={{ fontSize: headingSize }}>
            BUILT FOR THE GAME.<br />
            DESIGNED FOR <span className="text-[#DDB764]">YOU.</span>
          </h1>
          <p className="text-white max-w-md" style={{ fontSize: subSize }}>
            Everything about PickleTeo Paddle Club is purpose-built for pickleball — the courts, the hours, the community, and the culture.
          </p>
        </div>
      </section>

      {/* PROGRAMMING SECTION */}
      <section className="py-16 lg:py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DDB764]">Programming</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0E3E57] mb-12">
            SOMETHING FOR<br />
            <span className="text-[#DDB764]">EVERY PLAYER.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-200 rounded-xl overflow-hidden">
            {[
              { tag: 'Open Play', title: 'DROP IN ANYTIME', desc: 'Structured open play sessions organized by skill level. Show up, get matched, and play. Morning, afternoon, and evening blocks available daily.' },
              { tag: 'Leagues', title: 'COMPETITIVE PLAY', desc: 'Seasonal leagues with standings, playoffs, and skill-based divisions. From recreational to competitive — find your bracket.' },
              { tag: 'Clinics', title: 'LEVEL UP YOUR GAME', desc: 'Group clinics for beginners, intermediate, and advanced players. Focus on strategy, shot selection, and court positioning.' },
              { tag: 'Private Lessons', title: 'ONE-ON-ONE COACHING', desc: 'Book private or semi-private lessons with certified instructors. Tailored to your game, your goals, your pace.' },
              { tag: 'Tournaments', title: 'GAME DAY ENERGY', desc: 'In-house round robins and tournaments throughout the year. Compete against other club members in a fun, organized setting.' },
              { tag: 'Court Rentals', title: 'BOOK YOUR COURT', desc: 'Reserve a court online for private play with friends. Easy booking through our app — see availability in real time.' },
            ].map(({ tag, title, desc }) => (
              <div key={title} className="card-line relative p-6 sm:p-8 border-b sm:border-r border-zinc-200 last:border-b-0 bg-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#DDB764] mb-3">{tag}</div>
                <div className="text-base font-black text-[#0E3E57] mb-3">{title}</div>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#DDB764]">Booking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 text-[#0E3E57]">
              BOOK IN SECONDS.<br />
              <span className="text-[#DDB764]">PLAY IN MINUTES.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mb-6 max-w-md">
              All court reservations, open play sign-ups, and program registrations are handled through our club app. See real-time availability, book your spot, and check in — all from your phone.
            </p>
            <ul className="space-y-3">
              {['Real-time court availability', 'Mobile app for iOS and Android', 'Open play sign-ups by skill level', 'Lesson and clinic registration'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700">
                  <span className="w-5 h-5 rounded-full bg-[#DDB764] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f5f5f0] rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0E3E57] mb-2">Smart Booking</h3>
            <p className="text-zinc-400 text-sm mb-4">Our club management platform</p>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              Court bookings, membership management, open play, leagues, keyless door access, and payments — all in one app. Available on iOS and Android.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-32 bg-[#0E3E57] text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.04) 59px, rgba(255,255,255,0.04) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.04) 59px, rgba(255,255,255,0.04) 60px)' }} />
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            READY TO <span className="text-[#DDB764]">PLAY?</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mb-8">
            Membership is limited. Join the waitlist for early access, insider updates, and priority when we open.
          </p>
          <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer"
            className="inline-block border border-[#DDB764] text-white text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#DDB764] hover:text-[#0E3E57] transition-colors duration-300">
            Get On The List
          </a>
          <p className="text-white text-xs mt-4">No credit card. No commitment. We'll be in touch.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
