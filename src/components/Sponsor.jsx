import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const handler = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return size;
}

export default function Sponsor() {
  const { w, h } = useWindowSize();

  const headingSize = w < 480 ? '1.875rem' : w < 768 ? '2.75rem' : w < 1024 ? '3.75rem' : `${w * 0.035}px`;
  const sectionHeight = Math.max(h * 1.0, 320);
  const pt = w < 768 ? '6rem' : '9rem';

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header />

      {/* HERO */}
      <section
        className="relative w-full flex items-center justify-center text-center"
        style={{ height: sectionHeight, backgroundImage: 'url(/HERO-SPONSORSHIP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <motion.div
          className="relative w-full max-w-3xl mx-auto px-6"
          style={{ paddingTop: pt }}
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h1 variants={fadeUp} className="font-black tracking-tight leading-tight text-white mb-3 whitespace-nowrap" style={{ fontSize: headingSize }}>
            Partner with PickleTeo<br />
            <span className="text-[#DDB764] font-black relative inline-block pb-3">
              Paddle Club!
              <span className="absolute -left-3 bottom-0 w-[calc(100%+1.5rem)] h-[7px] bg-[#DDB764]" style={{ transform: 'skewY(-2deg)' }} />
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white font-semibold mb-8" style={{ fontSize: w < 480 ? '0.875rem' : '1.125rem' }}>
            The Premier Pickleball Destination in Everett / Mukilteo WA
          </motion.p>
          <motion.a variants={fadeUp} href="mailto:Info@sopbcenters.com"
            className="inline-block bg-[#DDB764] text-[#0E3E57] font-semibold px-10 py-3 rounded hover:bg-[#c9a455] transition-colors duration-300">
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 lg:py-24 bg-[#0E3E57]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="w-full lg:w-[55%] flex-shrink-0"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <img src="/Group-345-1.jpg" alt="Pickleball" className="rounded-2xl w-full object-cover" />
          </motion.div>
          <motion.div className="w-full lg:w-[45%]"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight}>
            <p className="text-white text-2xl sm:text-3xl font-bold leading-snug mb-6">
              PickleTeo Paddle Club isn't just a facility — it's the beating heart of the{' '}
              <span className="text-[#DDB764]">fastest-growing sport in America.</span>
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              With over 5,000 unique players having stepped onto our courts (and growing by the week), we deliver an engaged, passionate, and affluent audience that few local venues can match.
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Pickleball players are loyal, social, and spend money. They're doctors, lawyers, CEOs, entrepreneurs, retirees with disposable income, and families looking for fun — all gathering multiple times per week at PickleTeo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section className="py-16 lg:py-24 bg-[#f0f0eb]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E3E57] mb-2"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            Why Sponsor PickleTeo?
          </motion.h2>
          <motion.div className="flex justify-center mb-6"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="h-[5px] w-40 bg-[#DDB764] block" style={{ transform: 'skewY(-2deg)' }} />
          </motion.div>
          <motion.p className="text-zinc-500 text-base mb-12"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            The Numbers Speak for Themselves
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { icon: '/Group-348.svg', title: '5,000+ unique players', sub: '(verified through court-booking system)' },
              { icon: '/Group-368.svg', title: '300–600 daily visitors during peak seasons', sub: '' },
              { icon: '/Group-369.svg', title: '150+ league & tournament participants', sub: '' },
              { icon: '/Group-370.svg', title: 'Average player age: 35–65', sub: 'with above-average household income' },
              { icon: '/Group-371.svg', title: 'Massive organic social media exposure', sub: '(players love tagging & sharing their games)' },
              { icon: '/Group-372.svg', title: 'Year-round programming:', sub: 'leagues, tournaments, corporate events, lessons, and social mixers' },
            ].map(({ icon, title, sub }, i) => (
              <motion.div key={title} className="flex items-start gap-5 text-left"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } } }}>
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                  <img src={icon} alt="" className="w-24 h-24 object-contain" />
                </div>
                <div>
                  <p className="font-black text-[#0E3E57] text-base sm:text-lg leading-tight">{title}</p>
                  {sub && <p className="text-zinc-400 text-sm mt-1">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUSIVE SPONSORSHIP OPPORTUNITIES */}
      <section className="py-16 lg:py-24 bg-[#0E3E57]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div className="text-center mb-12"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              Exclusive Sponsorship<br />Opportunities
            </motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center mb-3">
              <span className="h-[8px] w-72 bg-[#DDB764] block" style={{ transform: 'skewY(-2deg)' }} />
            </motion.div>
            <motion.p variants={fadeUp} className="text-zinc-300 text-lg sm:text-xl">(Customizable to Your Budget)</motion.p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {[
              { num: '01', img: '/Group-358.jpg', title: 'Premier Naming Rights – "The [Your Brand] Court at Side Out"', desc: 'Name one (or all) of our 8 indoor courts. Your logo dominates the net, backdrops, and every photo/video taken there.', bullets: [] },
              { num: '02', img: '/Group-358-2.jpg', title: 'Center-Wide Title Sponsorship – "[Your Brand] Side Out Pickleball Center"', desc: 'Full facility branding across signage, website, apparel, and all marketing. The ultimate "own the room" opportunity.', bullets: [] },
              { num: '03', img: '/Group-358-3.jpg', title: 'Tournament & League Title Sponsorship', desc: '', bullets: ['"[Your Brand] Summer Slam"', '"[Your Brand] Corporate Challenge"', '"[Your Brand] King/Queen of the Court Series" includes banners, trophies, winner swag, social media blasts, and on-site activation booths.'] },
              { num: '04', img: '/Group-358-4.jpg', title: 'Corporate Outing & Team-Building Host', desc: "Host your clients or employees for a private branded event. We'll roll out the red carpet with your logos on paddles, banners, and help facilitate catered food/beverage.", bullets: [] },
              { num: '05', img: '/Group-3586.jpg', title: 'Digital & Social Amplification', desc: 'Logo on our website, weekly newsletters (3,000+ subscribers), and Instagram/Facebook posts that regularly reach 10k–30k impressions per tournament.', bullets: [] },
            ].map(({ num, img, title, desc, bullets }, i) => (
              <motion.div key={num}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
                <motion.div className="w-full lg:w-[55%] relative"
                  variants={i % 2 === 0 ? fadeLeft : fadeRight}>
                  <img src={img} alt={title} className="w-full object-cover rounded" />
                </motion.div>
                <motion.div className="w-full lg:w-[45%]"
                  variants={i % 2 === 0 ? fadeRight : fadeLeft}>
                  <p className="text-[#DDB764] font-black text-2xl mb-3">{num}</p>
                  <h3 className="text-white font-black text-xl sm:text-2xl mb-4 leading-snug">{title}</h3>
                  {desc && <p className="text-zinc-300 text-base leading-relaxed">{desc}</p>}
                  {bullets.length > 0 && (
                    <ul className="text-zinc-300 text-base leading-relaxed list-disc list-inside space-y-2">
                      {bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-16"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <a href="mailto:Info@sopbcenters.com"
              className="inline-block bg-[#DDB764] text-[#3d4f6b] font-bold px-10 py-3 hover:bg-[#c9a455] transition-colors duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div className="text-center mb-14"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E3E57] mb-4 leading-tight">
              What You Get That No<br />Billboard Can Deliver
            </motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="h-[11px] w-[32rem] bg-[#DDB764] block" style={{ transform: 'skewY(-2deg)' }} />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-20">
            {[
              { icon: '/Group-348-1.svg', title: 'Repeated, positive brand impressions', sub: '(players see your logo every single visit)' },
              { icon: '/Group-348-2.svg', title: 'Direct access to an upscale, active demographic', sub: '' },
              { icon: '/Group-348-3.svg', title: 'Content goldmine', sub: 'happy players posting photos & stories with your branding in the background' },
              { icon: '/Group-348-4.svg', title: 'Community goodwill', sub: "you're supporting the sport everyone is falling in love with" },
            ].map(({ icon, title, sub }, i) => (
              <motion.div key={title} className="flex items-start gap-5"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 } } }}>
                <div className="w-28 h-28 flex-shrink-0 rounded-sm flex items-center justify-center">
                  <img src={icon} alt="" className="w-full h-full object-contain p-2" />
                </div>
                <div className="pt-1">
                  <p className="font-black text-[#0E3E57] text-base sm:text-lg leading-snug">{title}</p>
                  {sub && <p className="text-zinc-500 text-sm mt-1">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-[#0E3E57] font-black text-lg sm:text-xl mb-6 leading-snug">
              Companies like Michelob Ultra, Selkirk, JOOLA, Franklin, Deloitte,<br />
              UBS, and local hospitals/real estate firms{' '}
              <span className="text-[#DDB764]">are already investing<br />heavily in pickleball for a reason.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-600 text-sm">
              Side Out is the top venue in the region — don't miss the chance to lead the pack. Let's get your brand on the hottest courts in town
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#0E3E57]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="w-full lg:w-[60%]"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <img src="/Group-345-2.png" alt="Pickleball player" className="w-full object-cover" />
          </motion.div>
          <motion.div className="w-full lg:w-[40%]"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-black text-white mb-3 leading-snug">
              Contact us today for a private tour and custom sponsorship deck.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-300 text-xs sm:text-sm mb-6 leading-relaxed">
              First partners in each category receive grandfathered pricing and priority placement. We're not just selling signage. We're selling the best advertising real estate in the fastest-growing sport in the country. See you on the courts!
            </motion.p>
            <motion.a variants={fadeUp} href="mailto:Info@sopbcenters.com"
              className="inline-block bg-[#DDB764] text-[#1a1a1a] font-bold px-6 py-2 text-sm hover:bg-[#c9a455] transition-colors duration-300">
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
