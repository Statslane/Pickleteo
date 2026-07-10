import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TheClub from './TheClub';
import Sponsor from './Sponsor';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function useCountUp(target, duration = 1.5, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function TrustBar() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const members = useCountUp(600, 1.6, inView);
  const courts = useCountUp(8, 1.2, inView);
  const stats = [
    { stat: members + '+', label: 'Members', animate: true },
    { stat: courts.toString(), label: 'Indoor Courts', animate: true },
    { stat: '5AM–11PM', label: 'Daily', animate: false },
    { stat: 'Leagues', label: 'Every Week', animate: false },
  ];
  return (
    <section ref={ref} className="py-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
          Home to one of the Pacific Northwest's fastest-growing pickleball communities.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-0">
          {stats.map(({ stat, label }, i, arr) => (
            <div key={label} className="flex items-center">
              <motion.div
                className="text-center px-8 sm:px-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0F5050] tracking-tight">{stat}</div>
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mt-1">{label}</div>
              </motion.div>
              {i < arr.length - 1 && <span className="h-8 w-[1px] bg-zinc-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

function Home() {
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full flex flex-col items-start justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-12">
          <motion.div className="max-w-xl" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white">
              Best Courts. <br /> Best Lights. <br /><span className="text-[#DDB764]">Best Play.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-xl text-zinc-200 max-w-lg font-mediu leading-relaxed">
              Engineered for better pickleball. Purpose-built cushioned courts, championship lighting, 30-foot
              ceilings, competitive open play, and a welcoming community that keeps you coming back.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#D0B060] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#B89A48] transition w-full sm:w-auto">
                Become A Member
              </button>
              <button className="bg-[#0F5050] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#2E7080] transition w-full sm:w-auto">
                Reserve a Court
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* FACILITY SECTION */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-[#0F5050] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#0F5050]">Facility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-8">
              <span className="text-[#0F5050]">ENGINEERED FOR</span><br />
              <span className="text-[#D0B060] whitespace-nowrap">BETTER PICKLEBALL.</span>
            </h2>
            <p className="text-zinc-600 font-normal leading-relaxed">Every detail of Pickleteo was designed with one goal in mind: creating the best possible indoor playing experience. From championship lighting to dedicated courts, every feature exists to help you enjoy—and play—better pickleball.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight} className="divide-y divide-zinc-200 w-full lg:ml-auto lg:w-3/4">
            {[
              { label: 'COURTS', value: '8 dedicated indoor courts built exclusively for pickleball.' },
              { label: 'SURFACE', value: 'Professional-grade cushioned sports surface for consistent ball response and confident footing.' },
              { label: 'LIGHTING', value: 'Tournament-quality LED lighting for exceptional ball visibility with minimal shadows.' },
              { label: 'CEILING HEIGHT', value: '30-foot ceilings provide unrestricted lobs, overheads, and ATPs.' },
              { label: 'TECHNOLOGY', value: 'Smart courts with integrated cameras to review matches and capture highlights.' },
              { label: 'MEMBERSHIP', value: 'Capped membership to help maintain better court availability and a better playing experience.' },
              { label: 'COMFORT', value: 'Insulated facility with seasonal heating and high-volume fans for comfortable year-round play.' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-3 gap-4">
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 shrink-0">{label}</span>
                <span className="font-normal text-zinc-900 text-left text-sm">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="py-12 lg:py-24 bg-[#F0F0E8]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0F5050] mb-4">Choose Your <span className="text-[#D0B060]">Way to Play </span></h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm font-normal leading-relaxed whitespace-nowrap">Whether you're joining the club or booking a court for the day, Pickleteo offers flexible ways to get on the court.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Premium Plus */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0 } } }}
              className="bg-white rounded-2xl border-2 border-[#0F5050] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-[0_0_24px_4px_rgba(208,176,96,0.5)] hover:shadow-[0_0_32px_8px_rgba(208,176,96,0.7)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F5050] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Premium Plus</div>
              <div className="mb-1"><span className="text-5xl font-black text-[#0F5050]">$120</span><span className="text-[#0F5050] font-normal">/mo</span></div>
              <div className="text-sm text-zinc-500 mb-1">One-time $100 Initiation</div>
              <p className="text-xs text-zinc-400 mb-6">For players who play 3+ times each week</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['Unlimited Open Play', 'Up to 4 reservation hours/week', '7-day booking window'] },
                  { heading: 'SAVE', items: ['25% League Discount', '15% Training Discount', '5% Pro Shop Discount'] },
                  { heading: 'EXTRAS', items: ['Ball Machine Discount', 'Family Add-ons Available'] },
                ].map(({ heading, items }) => (
                  <div key={heading}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{heading}</div>
                    {items.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-zinc-700 mb-0.5"><span className="text-[#D0B060]">✓</span>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-[#D0B060] hover:bg-[#B89A48] text-white py-3 rounded-md font-medium transition flex items-center justify-center">Become a Member</a>
            </motion.div>

            {/* Open Play Plus */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } } }}
              className="bg-white rounded-2xl border border-[#D0B060] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(208,176,96,0.3)]">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Open Play Plus</div>
              <div className="mb-1"><span className="text-5xl font-black text-[#0F5050]">$80</span><span className="text-[#0F5050] font-normal">/mo</span></div>
              <div className="text-sm text-zinc-500 mb-1">One-time $100 Initiation</div>
              <p className="text-xs text-zinc-400 mb-6">For players who enjoy weekly open play</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['Unlimited Daily Open Play', '2 Hours Weekly Court Reservations', '48-Hour Booking Window'] },
                  { heading: 'SAVE', items: ['League Discounts', 'Training Discounts', '5% Pro Shop Discount'] },
                ].map(({ heading, items }) => (
                  <div key={heading}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{heading}</div>
                    {items.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-zinc-700 mb-0.5"><span className="text-[#D0B060]">✓</span>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-[#D0B060] hover:bg-[#B89A48] text-white py-3 rounded-md font-medium transition flex items-center justify-center">Become a Member</a>
            </motion.div>

            {/* Court Booking */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } } }}
              className="bg-white rounded-2xl border border-[#D0B060] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(208,176,96,0.3)]">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Court Booking</div>
              <div className="mb-1"><span className="text-5xl font-black text-[#0F5050]">$50</span><span className="text-[#0F5050] font-normal">/hr</span></div>
              <div className="text-sm text-zinc-500 mb-1">No Membership Required</div>
              <p className="text-xs text-zinc-400 mb-6">Perfect for visitors, friends, and group play.</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['Reserve a Dedicated Court', 'Up to 6 Players', 'Available Daily'] },
                  { heading: 'GREAT FOR', items: ['First-Time Visitors', 'Families', 'Out-of-Town Guests', 'Casual Play'] },
                ].map(({ heading, items }) => (
                  <div key={heading}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{heading}</div>
                    {items.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-zinc-700 mb-0.5"><span className="text-[#D0B060]">✓</span>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <a href="https://app.courtreserve.com/Online/Memberships/Public/17390" target="_blank" rel="noopener noreferrer" className="mt-8 w-full border-2 border-[#0F5050] bg-[#0F5050] text-white hover:bg-[#2E7080] py-3 rounded-md font-medium transition flex items-center justify-center">Reserve a Court</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 md:py-24 px-6 sm:px-10 text-center max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} className="inline-block bg-[#0F5050] text-white px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-6">Courts Are Open</motion.div>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight mb-6 text-[#0F5050]">YOUR NEXT GREAT MATCH <span className="text-[#D0B060]">STARTS HERE.</span></motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-zinc-600 mb-8 font-normal leading-relaxed">Reserve courts, join open play, register for leagues and tournaments, discover clinics, and stay connected with everything happening at Pickleteo.</motion.p>
          <motion.button variants={fadeUp} className="bg-[#D0B060] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#B89A48] w-full sm:w-auto transition">
            View Schedule & Book →
          </motion.button>
        </motion.div>
      </section>

      {/* STATSLANE SECTION */}
      <section className="pt-10 pb-12 lg:pb-24 bg-[#0F5050]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 lg:mb-12 text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#D0B060]">POWERED BY <a href="https://www.statslane.com" target="_blank" rel="noopener noreferrer" className="hover:underline">STATSLANE</a></span>
            <span className="w-8 h-[2px] bg-[#DDB764] inline-block" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            <span className="text-[#D0B060]">RECORD YOUR GAME</span>
          </motion.h2>
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft} className="flex flex-col lg:pt-16">
            <h2 className="text-xl sm:text-2xl text-white font-black tracking-tight leading-tight mb-4">SMART COURT</h2>
            <p className="text-zinc-300 mb-4 text-sm font-normal leading-relaxed">We're proud to partner with Statslane to bring AI-powered game film and performance analytics to our pickleball community. Every match can be automatically recorded, allowing players to review their games, track progress, and share their best moments.</p>
            <a href="https://apps.apple.com/us/app/statslane/id6767483097" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black border border-white text-white px-5 py-3 rounded-xl w-fit hover:bg-zinc-800 transition">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white font-normal">Download on the</span>
                <span className="text-base text-white font-medium">App Store</span>
              </div>
            </a>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="flex justify-center order-first lg:order-none">
            <img src="/Camera.png" alt="Court Camera" className="w-36 sm:w-48 lg:w-72 object-cover rounded-2xl" />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight}>
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
                <li key={f} className="flex items-start gap-2 text-zinc-200 text-sm font-normal">
                  <span className="w-5 h-5 rounded-full bg-[#D0B060] flex items-center justify-center text-[#0F5050] text-xs flex-shrink-0 mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
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
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
