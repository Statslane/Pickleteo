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
        className="relative w-full flex items-center overflow-hidden"
        style={{ height: sectionHeight, backgroundImage: 'url(/HERO-SPONSORSHIP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative w-full max-w-7xl mx-auto" style={{ paddingTop: pt, paddingBottom: '2.5rem', paddingLeft: w < 480 ? '1.5rem' : w < 1024 ? '2.5rem' : '4rem', paddingRight: w < 480 ? '1.5rem' : w < 1024 ? '2.5rem' : '4rem' }}>
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D0B060] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#D0B060]">Sponsorship</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-black tracking-tight leading-tight text-white mb-4" style={{ fontSize: headingSize }}>
              PARTNER WITH PICKLETEO<br />
              <span className="text-[#D0B060]">PADDLE CLUB!</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white max-w-md mb-8 font-normal leading-relaxed" style={{ fontSize: w < 480 ? '0.875rem' : '1.125rem' }}>
              The Premier Pickleball Destination in Everett / Mukilteo WA
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="mailto:Info@sopbcenters.com"
                className="inline-block border border-[#D0B060] text-white text-xs font-medium uppercase tracking-widest px-10 py-4 hover:bg-[#D0B060] hover:text-[#0F5050] transition-colors duration-300">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 lg:py-24 bg-[#0F5050]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="w-full lg:w-[55%] flex-shrink-0"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <img src="/Group-345-1.jpg" alt="Pickleball" className="rounded-2xl w-full object-cover" />
          </motion.div>
          <motion.div className="w-full lg:w-[45%]"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight}>
            <p className="text-white text-2xl sm:text-3xl font-semibold leading-snug mb-6">
              PickleTeo Paddle Club isn't just a facility — it's the beating heart of the{' '}
              <span className="text-[#D0B060]">fastest-growing sport in America.</span>
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              With over 5,000 unique players having stepped onto our courts (and growing by the week), we deliver an engaged, passionate, and affluent audience that few local venues can match.
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              Pickleball players are loyal, social, and spend money. They're doctors, lawyers, CEOs, entrepreneurs, retirees with disposable income, and families looking for fun — all gathering multiple times per week at PickleTeo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section className="py-8 lg:py-12 bg-[#F0F0E8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#0F5050] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#0F5050]">Why Sponsor</span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#D0B060]">Pickleteo</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F5050] mb-12">
              THE NUMBERS SPEAK<br />
              <span className="text-[#D0B060]">FOR THEMSELVES.</span>
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-6">
            {[
              { icon: '/1.svg', title: '5,000+ unique players', sub: '(verified through court-booking system)' },
              { icon: '/5.svg', title: '300–600 daily visitors during peak seasons', sub: '' },
              { icon: '/6.svg', title: '150+ league & tournament participants', sub: '' },
              { icon: '/7.svg', title: 'Average player age: 35–65', sub: 'with above-average household income' },
              { icon: '/8.svg', title: 'Massive organic social media exposure', sub: '(players love tagging & sharing their games)' },
              { icon: '/9.svg', title: 'Year-round programming:', sub: 'leagues, tournaments, corporate events, lessons, and social mixers' },
            ].map(({ icon, title, sub }, i) => (
              <motion.div key={title} className="flex items-center gap-5 text-left"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } } }}>
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                  <img src={icon} alt="" className="w-24 h-24 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F5050] text-base sm:text-lg leading-tight">{title}</p>
                  {sub && <p className="text-zinc-500 text-sm mt-1 font-normal">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="py-16 lg:py-24 bg-[#0F5050]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div className="mb-12"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D0B060] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#D0B060]">Customizable to Your Budget</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              EXCLUSIVE SPONSORSHIP<br />
              <span className="text-[#D0B060]">OPPORTUNITIES.</span>
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {[
              {
                num: '01',
                img: '/Group-3586.png',
                title: 'Exclusive Court Naming Rights – "The [Your Brand] Court at PICKLETEO Paddle Club"',
                desc: 'Secure naming rights for one (or all) of our 8 premium indoor courts. Maximize your visibility with prominent logo placement on nets and backdrops, guaranteeing massive organic exposure in every photo and video captured on the court.',
                bullets: []
              },
              {
                num: '02',
                img: '/Group-358-2.png',
                title: 'Center-Wide Title Sponsorship – "[Your Brand] PICKLETEO Paddle Club"',
                desc: 'The ultimate "own the room" opportunity. Claim full facility branding with premium logo placement across all physical signage, digital platforms, staff apparel, and comprehensive marketing campaigns.',
                bullets: []
              },
              {
                num: '03',
                img: '/Group-358-3.png',
                title: 'Tournament & League Title Sponsorship',
                desc: 'Take center stage by headlining our high-energy tournaments. Packages include custom banners, branded trophies, winner swag, dedicated social media blasts, and premium on-site activation booths.',
                bullets: [
                  '"[Your Brand] Summer Slam"',
                  '"[Your Brand] Corporate Challenge"',
                  '"[Your Brand] King/Queen of the Court Series"'
                ]
              },
              {
                num: '04',
                img: '/Group-358-4.png',
                title: 'Corporate Outings & Premium Team-Building Events',
                desc: 'Treat your clients or employees to an exclusive, fully branded private event. We roll out the red carpet with custom-branded paddles, dedicated banners, and seamless facilitation of premium catering and beverages.',
                bullets: []
              },
              {
                num: '05',
                img: '/Group-3586.png',
                title: 'Digital & Social Amplification',
                desc: 'Extend your reach beyond the courts. Feature your brand on our website, in our weekly newsletters (3,000+ subscribers), and across targeted social media campaigns driving 10k–30k impressions per tournament.',
                bullets: []
              }
            ].map(({ num, img, title, desc, bullets }, i) => (
              <motion.div key={num}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
                <motion.div className="w-full lg:w-[40%] relative"
                  variants={i % 2 === 0 ? fadeLeft : fadeRight}>
                  <img src={img} alt={title} className="w-full object-cover rounded" />
                </motion.div>
                <motion.div className="w-full lg:w-[45%]"
                  variants={i % 2 === 0 ? fadeRight : fadeLeft}>
                  <p className="text-[#D0B060] font-semibold text-2xl mb-3">{num}</p>
                  <h3 className="text-white font-black text-xl sm:text-2xl mb-4 leading-snug">{title}</h3>
                  {desc && <p className="text-zinc-300 text-base leading-relaxed font-normal">{desc}</p>}
                  {bullets.length > 0 && (
                    <ul className="text-zinc-300 text-base leading-relaxed list-disc list-inside space-y-2 font-normal mt-3">
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
              className="inline-block bg-[#D0B060] text-[#0F5050] font-medium px-10 py-3 hover:bg-[#B89A48] transition-colors duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D0B060] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#D0B060]">What You Get</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F5050] mb-12">
              NO BILLBOARD<br />
              <span className="text-[#D0B060]">CAN DELIVER THIS.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-20">
            {[
              { icon: '/2.svg', title: 'Repeated, positive brand impressions', sub: '(players see your logo every single visit)' },
              { icon: '/3.svg', title: 'Direct access to an upscale, active demographic', sub: '' },
              { icon: '/4.svg', title: 'Content goldmine', sub: <>happy players posting photos & stories<br />with your branding in the background</> },
              { icon: '/10.svg', title: 'Community goodwill', sub: "you're supporting the sport everyone is falling in love with" },
            ].map(({ icon, title, sub }, i) => (
              <motion.div key={title} className="flex items-center gap-5"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 } } }}>
                <div className="w-28 h-28 flex-shrink-0 rounded-sm flex items-center justify-center">
                  <img src={icon} alt="" className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F5050] text-base sm:text-lg leading-snug">{title}</p>
                  {sub && <p className="text-zinc-500 text-sm mt-1 font-normal">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-[#0F5050] font-semibold text-lg sm:text-xl mb-6 leading-snug">
              Companies like Michelob Ultra, Selkirk, JOOLA, Franklin, Deloitte,<br />
              UBS, and local hospitals/real estate firms{' '}
              <span className="text-[#D0B060]">are already investing<br />heavily in pickleball for a reason.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-500 text-sm font-normal">
              PICKLETEO is the top venue in the region — don't miss the chance to lead the pack. Let's get your brand on the hottest courts in town
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#0F5050]">
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
            <motion.p variants={fadeUp} className="text-zinc-300 text-xs sm:text-sm mb-6 leading-relaxed font-normal">
              First partners in each category receive grandfathered pricing and priority placement. We're not just selling signage. We're selling the best advertising real estate in the fastest-growing sport in the country. See you on the courts!
            </motion.p>
            <motion.a variants={fadeUp} href="mailto:Info@sopbcenters.com"
              className="inline-block bg-[#D0B060] text-[#1a1a1a] font-medium px-6 py-2 text-sm hover:bg-[#B89A48] transition-colors duration-300">
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
