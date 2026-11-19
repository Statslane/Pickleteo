
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import PageHero from './PageHero';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function TheClub() {
  return (
    <main className="interior-page min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full overflow-x-clip">
      <Header />

      <PageHero eyebrow="The club · Mukilteo and Everett area" title="A place to play. A community to belong." description="Learn something new, enjoy your next game, and build connections that bring you back. Pickleteo brings welcoming play and dedicated indoor courts together for beginners, guests, and members." image="/optimized/pickleteo-club-086.webp" alt="Players on Pickleteo’s indoor courts, with games across the club" />

      {/* PROGRAMMING SECTION */}
      <section className="club-program-section py-16 lg:py-24 bg-[#F0F0E8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D0B060] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#80651f]">Programming</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F5050] mb-12">
              SOMETHING FOR<br />
              <span className="text-[#80651f]">EVERY PLAYER.</span>
            </motion.h2>
          </motion.div>
          <div className="club-program-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-200 rounded-xl overflow-hidden">
            {[
              { tag: 'Open Play', title: 'FIND YOUR OPEN PLAY', desc: 'Explore general and DUPR grouped open play. Choose a session that fits your experience, then check its date, guest price, and availability in CourtReserve before registering.' },
              { tag: 'Leagues', title: 'COMPETITIVE PLAY', desc: 'Build a regular playing routine with league sessions. Check CourtReserve for current formats, levels, dates, and registration.' },
              { tag: 'Clinics', title: 'LEVEL UP YOUR GAME', desc: 'Explore current group learning sessions and check the level and focus before booking. Brand new? Start with the free Beginners Class.' },
              { tag: 'Private Lessons', title: 'ONE-ON-ONE COACHING', desc: 'Ask about coaching options that fit your goals and experience. Confirm instructor availability, lesson format, and pricing before booking.' },
              { tag: 'Tournaments', title: 'GAME DAY ENERGY', desc: 'Explore scheduled round robins and tournaments. Review the event format and any rating requirements to find your next challenge.' },
              { tag: 'Court Rentals', title: 'BOOK YOUR COURT', desc: 'Reserve a court online for private play with friends. Easy booking through our app — see availability in real time.' },
            ].map(({ tag, title, desc }, i) => (
              <motion.div key={title} className="card-line relative p-6 sm:p-8 border-b sm:border-r border-zinc-200 last:border-b-0 bg-white"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } } }}>
                <div className="text-xs font-medium uppercase tracking-widest text-[#80651f] mb-3">{tag}</div>
                <div className="text-base font-semibold text-[#0F5050] mb-3">{title}</div>
                <p className="text-zinc-500 text-sm leading-relaxed font-normal">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D0B060] inline-block" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#80651f]">Booking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 text-[#0F5050]">
              YOUR NEXT GAME.<br />
              <span className="text-[#80651f]">A FEW CLEAR STEPS.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mb-6 max-w-md font-normal leading-relaxed">
              Start in your browser or use CourtReserve on your phone. First choose the activity that fits you, then review its level, date, price, and availability before registering.
            </p>
            <ul className="space-y-3">
              {['New to the sport? Start with the free Beginners Class.', 'Choose a session and read its level and format.', 'Follow the registration steps and check your confirmation.', 'Not sure which session fits? Ask our team before booking.'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
                  <span className="w-5 h-5 rounded-full bg-[#D0B060] flex items-center justify-center text-[#123f3f] text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight} className="bg-[#F0F0E8] rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F5050] mb-2">Book your way</h3>
            <p className="text-zinc-600 text-sm mb-4 font-normal">CourtReserve · browser or mobile app</p>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm font-normal">
              For your first class, start with guest booking in your browser. For regular visits, download CourtReserve, sign in or create your account, and connect to Pickleteo Paddle Club.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6"><a className="action-primary" href="https://player.courtreserve.com/players/events/e-2275478">Book the free class</a><a className="action-outline" href="https://apps.apple.com/us/app/courtreserve/id1392556575">iPhone app</a><a className="action-outline" href="https://play.google.com/store/apps/details?id=com.courtreserve">Android app</a></div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 lg:py-20 bg-[#0F5050] text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.04) 59px, rgba(255,255,255,0.04) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.04) 59px, rgba(255,255,255,0.04) 60px)' }} />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="relative max-w-2xl mx-auto px-6">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            READY TO <span className="text-[#D0B060]">PLAY?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-300 text-sm sm:text-base mb-8 font-normal leading-relaxed">
            Your next game starts at Pickleteo. Explore memberships or book a court without a paid membership.
          </motion.p>
          <motion.a variants={fadeUp} href="/membership"
            className="action-primary">
            Explore Memberships
          </motion.a>
          <motion.p variants={fadeUp} className="text-white/90 text-base mt-6 font-normal leading-relaxed">Never held a paddle? That’s a perfectly good place to start. Try our free Beginners Class, learn the basics, and take it one step at a time. <a href="/#start-here" className="underline text-[#DDB764] font-semibold">Let’s find your first game.</a></motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
