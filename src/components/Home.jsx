import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TheClub from './TheClub';
import Sponsor from './Sponsor';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FirstVisitFAQ from './FirstVisitFAQ';
import OpenPlay from './OpenPlay';
import LearnImprove from './LearnImprove';
import Membership from './Membership';
import Policies from './Policies';
import PlayerReviews from './PlayerReviews';
import SearchMetadata from './SearchMetadata';

function TrustBar() {
const stats=[['8','Dedicated indoor courts'],['Free','Beginner introduction'],['Open play','Find your game'],['Memberships','Make play a routine']];
return <section className="py-8 bg-white border-y border-zinc-100"><div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"><p className="text-center text-xs font-semibold uppercase tracking-widest text-[#0F5050] mb-6">Play, connect, and belong in the Mukilteo and Everett area.</p><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map(([stat,label])=><div key={label} className="text-center"><div className="text-xl sm:text-3xl font-black text-[#0F5050]">{stat}</div><div className="text-xs font-medium text-zinc-600 mt-2">{label}</div></div>)}</div></div></section>;
}

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [videoPaused,setVideoPaused] = useState(false);
  useEffect(()=>{const preference=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>{if(preference.matches){videoRef.current?.pause();setVideoPaused(true);}};sync();preference.addEventListener('change',sync);return()=>preference.removeEventListener('change',sync);},[]);
  async function toggleVideo(){const video=videoRef.current;if(!video)return;if(video.paused){try{await video.play();setVideoPaused(false);}catch{setVideoPaused(true);}}else{video.pause();setVideoPaused(true);}}


  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full overflow-x-clip">
      <Header />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full flex flex-col items-start justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <video ref={videoRef} autoPlay muted loop playsInline poster="/optimized/pickleteo-community.jpg" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 home-hero-shade" />
        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-12">
          <div className="max-w-2xl"><p className="home-hero-location">Mukilteo and Everett area</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white">
              Indoor pickleball.<br/><span className="text-[#DDB764]">Find your people.</span>
            </h1>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-xl text-zinc-200 max-w-lg font-medium leading-relaxed">
              Eight dedicated indoor courts with cushioned surfaces. A welcoming place to learn, play, and connect—from your first game to your weekly routine.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a href="#start-here" className="bg-white text-[#0F5050] px-6 py-3 rounded-md font-semibold text-base hover:bg-[#F0F0E8] transition w-full sm:w-auto text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                New to pickleball? Start here
              </a>
              <a href="/membership" className="bg-[#D0B060] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#B89A48] transition w-full sm:w-auto text-center">
                Explore memberships
              </a>
              <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" className="bg-[#0F5050] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#2E7080] transition w-full sm:w-auto text-center">
                Reserve a Court
              </a>
            </div>
          </div>
        </div>
        <button type="button" onClick={toggleVideo} className="hero-video-toggle" aria-label={videoPaused ? "Play background video" : "Pause background video"}>{videoPaused ? "Play video" : "Pause video"}</button>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* BEGINNER FIRST VISIT */}
      <section id="start-here" aria-labelledby="beginner-heading" className="otter-accent otter-beginner scroll-mt-28 bg-[#F0F0E8] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F5050] mb-3">Your first game starts here</p>
            <h2 id="beginner-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F5050] leading-tight">New to pickleball?<br />Start here.</h2>
            <p className="mt-5 text-zinc-700 text-base sm:text-lg leading-relaxed">Take your first step with a free, one-hour Beginners Class in the Mukilteo and Everett area. Learn the basics, build confidence, and discover a new way to play.</p>
          </div>
          <ol className="grid md:grid-cols-3 gap-5">
            <li className="rounded-2xl bg-[#0F5050] p-7 sm:p-8 text-white flex flex-col">
              <span className="text-[#DDB764] text-xs font-semibold uppercase tracking-widest">01 · Try it</span>
              <h3 className="mt-4 text-2xl font-bold">Take the free class</h3>
              <p className="mt-3 text-white/85 leading-relaxed">Get comfortable with basic rules and the shots you’ll use in your first game. You can register as a guest.</p>
              <p className="mt-4 mb-6 text-sm text-white/75">One hour · Equipment included<br />Check upcoming dates and availability.</p>
              <a href="https://player.courtreserve.com/players/events/e-2275478" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex justify-center rounded-lg bg-[#DDB764] px-5 py-3 font-semibold text-[#0F5050] hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Find a free beginner class</a>
            </li>
            <li className="rounded-2xl border border-[#0F5050]/15 bg-white p-7 sm:p-8 flex flex-col">
              <span className="text-[#0F5050] text-xs font-semibold uppercase tracking-widest">02 · Find your people</span>
              <h3 className="mt-4 text-2xl font-bold text-[#0F5050]">Make your next game a familiar one</h3>
              <p className="mt-3 mb-6 text-zinc-600 leading-relaxed">Your next step is finding a comfortable place to play again. Tell our team you’re new, and ask for a session that fits your experience so you can keep learning and meet other players.</p>
              <a href="/contact#contact-team" className="mt-auto inline-flex justify-center rounded-lg border border-[#0F5050] px-5 py-3 font-semibold text-[#0F5050] hover:bg-[#F0F0E8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F5050]">Help me find my next game</a>
            </li>
            <li className="rounded-2xl border border-[#0F5050]/15 bg-white p-7 sm:p-8 flex flex-col">
              <span className="text-[#0F5050] text-xs font-semibold uppercase tracking-widest">03 · Make it a regular thing</span>
              <h3 className="mt-4 text-2xl font-bold text-[#0F5050]">Find your membership</h3>
              <p className="mt-3 mb-6 text-zinc-600 leading-relaxed">Ready for more pickleball? Compare membership options and benefits to find the plan that fits how you want to play.</p>
              <a href="/membership" className="mt-auto inline-flex justify-center rounded-lg border border-[#0F5050] px-5 py-3 font-semibold text-[#0F5050] hover:bg-[#F0F0E8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F5050]">Explore memberships</a>
            </li>
          </ol>
          <p className="mt-6 text-sm text-zinc-600">Questions before your first visit? <a href="/contact" className="underline underline-offset-4 font-medium text-[#0F5050]">Talk to our team.</a></p>
        </div>
      </section>



      <section className="py-12 lg:py-24 bg-[#F0F0E8]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0F5050] mb-4">Choose Your <span className="text-[#80651f]">Way to Play </span></h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm font-normal leading-relaxed">Whether you're joining the club or booking a court for the day, Pickleteo offers flexible ways to get on the court.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Premium Plus */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0 } } }}
              className="home-plan-card bg-white rounded-2xl border-2 border-[#0F5050] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F5050] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Explore membership</div>
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Premium Plus</div>
              <div className="mb-1"><span className="text-5xl font-black text-[#0F5050]">$120</span><span className="text-[#0F5050] font-normal">/mo</span></div>
              <div className="text-sm text-zinc-500 mb-1">One-time $100 Initiation</div>
              <p className="text-xs text-zinc-400 mb-6">For players who mix open play and court reservations</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['Free daily open play', 'Court reservations within plan allowances', '7-day booking window'] },
                  { heading: 'SAVE', items: ['1 free league entry per year', 'Lesson discounts vary by instructor', '5% Pro Shop Discount'] },
                  { heading: 'EXTRAS', items: ['Court time included within plan allowances', 'See current terms in CourtReserve'] },
                ].map(({ heading, items }) => (
                  <div key={heading}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{heading}</div>
                    {items.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-zinc-700 mb-0.5"><span className="text-[#D0B060]">✓</span>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <a href="/membership" className="home-plan-button home-plan-button-gold mt-8 w-full bg-[#D0B060] hover:bg-[#B89A48] text-white py-3 rounded-md font-medium transition flex items-center justify-center">Compare membership options</a>
            </motion.div>

            {/* Open Play Plus */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } } }}
              className="home-plan-card bg-white rounded-2xl border border-[#D0B060] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(208,176,96,0.3)]">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Open Play Plus</div>
              <div className="mb-1"><span className="text-5xl font-black text-[#0F5050]">$95</span><span className="text-[#0F5050] font-normal">/mo</span></div>
              <div className="text-sm text-zinc-500 mb-1">One-time $100 Initiation</div>
              <p className="text-xs text-zinc-400 mb-6">For players who enjoy weekly open play</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['1 Free Open Play per Day', 'Court reservation benefits', '48-Hour Booking Window'] },
                  { heading: 'SAVE', items: ['Lesson discounts vary by instructor', '5% Pro Shop Discount'] },
                ].map(({ heading, items }) => (
                  <div key={heading}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{heading}</div>
                    {items.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-zinc-700 mb-0.5"><span className="text-[#D0B060]">✓</span>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <a href="/membership" className="home-plan-button home-plan-button-gold mt-8 w-full bg-[#D0B060] hover:bg-[#B89A48] text-white py-3 rounded-md font-medium transition flex items-center justify-center">Compare membership options</a>
            </motion.div>

            {/* Court Booking */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } } }}
              className="home-plan-card bg-white rounded-2xl border border-[#D0B060] p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(208,176,96,0.3)]">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D0B060] mb-2">Court Booking</div>
              <div className="mb-1"><span className="text-4xl font-black text-[#0F5050]">$50</span><span className="text-[#0F5050]">/hour</span></div>
              <div className="text-sm text-zinc-500 mb-1">Per court · up to six players</div>
              <p className="text-xs text-zinc-400 mb-6">Perfect for visitors, friends, and group play.</p>
              <div className="space-y-4 flex-1">
                {[
                  { heading: 'PLAY', items: ['Reserve a dedicated court', 'Choose from current available times', '24-hour advance guest booking'] },
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
              <a href="https://app.courtreserve.com/Online/PublicBookings/17390/Landing" target="_blank" rel="noopener noreferrer" className="home-plan-button mt-8 w-full border-2 border-[#0F5050] bg-[#0F5050] text-white hover:bg-[#2E7080] py-3 rounded-md font-medium transition flex items-center justify-center">Reserve a Court</a>
            </motion.div>
          </div>
        </div>
      </section>


      <PlayerReviews />

      <FirstVisitFAQ compact />

      {/* FACILITY SECTION */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start [&>*]:min-w-0">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-[#0F5050] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#0F5050]">Facility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-8">
              <span className="text-[#0F5050]">ENGINEERED FOR</span><br />
              <span className="text-[#80651f]">BETTER PICKLEBALL.</span>
            </h2>
            <p className="text-zinc-600 font-normal leading-relaxed">Dedicated indoor courts, cushioned surfaces, and lighting designed for play create space to enjoy your game. Add a welcoming community, and you have a place to keep learning and coming back.</p>
            <div className="facility-play-invitation"><h3>Your next game is waiting.</h3><p>Find an open play that fits your experience, and meet us on the court.</p><a href="/open-play" className="action-primary">Find an open play <span aria-hidden="true">→</span></a></div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight} className="facility-features w-full">
            {[
              { label: 'COURTS', value: '8 dedicated indoor courts built exclusively for pickleball.' },
              { label: 'SURFACE', value: 'Professional-grade cushioned sports surface for consistent ball response and confident footing.' },
              { label: 'LIGHTING', value: 'Tournament-quality LED lighting for exceptional ball visibility with minimal shadows.' },
              { label: 'SPACE TO PLAY', value: 'Indoor courts with room to enjoy your game, away from wind and rain.' },
              { label: 'TECHNOLOGY', value: 'Ask about camera-equipped courts and the game-film tools available for your session.' },
              { label: 'MEMBERSHIP', value: 'Compare guest and membership options to find what fits your playing routine. Bookings are subject to availability.' },
              { label: 'COMFORT', value: 'Insulated facility with seasonal heating and high-volume fans for comfortable year-round play.' },
            ].map(({ label, value }) => (
              <div key={label} className="facility-feature">
                <span className="facility-feature-label">{label}</span>
                <span className="facility-feature-value">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="statslane-partner" aria-labelledby="statslane-partner-heading">
        <div className="statslane-partner-inner">
          <div className="statslane-camera-crop"><img src="/optimized/Camera.webp" alt="Statslane camera mounted beside a Pickleteo court" loading="lazy" decoding="async" /></div>
          <div><p className="statslane-partner-label">Powered by Statslane</p><h2 id="statslane-partner-heading">A new perspective on your game.</h2><p>Explore game film and performance tools with our technology partner.</p></div>
          <a href="https://www.statslane.com" target="_blank" rel="noopener noreferrer" className="action-primary">Explore Statslane <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ScrollToSection() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    let frame;
    const first = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ block: 'start', behavior: 'auto' });
      });
    });
    return () => { cancelAnimationFrame(first); if (frame) cancelAnimationFrame(frame); };
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SearchMetadata />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/learn-improve" element={<LearnImprove />} />
        <Route path="/open-play" element={<OpenPlay />} />
        <Route path="/the-club" element={<TheClub />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
