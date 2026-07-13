import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header alwaysVisible />

      {/* HERO */}
      <section className="w-full flex items-end px-6 sm:px-10 lg:px-16 pb-32" style={{ minHeight: '100vh', backgroundImage: 'url(/so8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
            <span className="block h-[2px] w-8 bg-[#D0B060]" />
            <span className="text-[#D0B060] text-xs font-medium tracking-[0.2em] uppercase">About</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 uppercase">
            Western Washington's premier<br />
            pickleball Facility
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white text-base sm:text-lg max-w-md leading-relaxed font-normal">
            PICKLETEO isn't a franchise. It's a community project, built by a neighbor who wanted a better place to play.
          </motion.p>
        </motion.div>
      </section>

      {/* FOUNDERS SPLIT SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT — Frank */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase leading-tight">Frank Espinoza</h2>
                  <p className="text-[#0F5050] text-xs font-medium tracking-widest uppercase mt-1">Founder</p>
                </div>
                <img src="/frank.jpg" alt="Frank Espinoza" className="w-40 h-40 rounded-full object-cover" style={{ objectPosition: 'center 15%' }} />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-normal">
                Frank is a founding partner of PICKLETEO, overseeing day to day operations.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-normal">
                Frank is the owner of two successful restaurants in the Seattle Metro area, and the founder of Climaco Consulting LLC, where his clients have included Brightstar, Sam's Club, Target, Smart Circle, Sprint, Encore Repair and Costco. He previously served as Head of Stores for Wireless Advocates - the 3rd party wireless retailer in Costco stores nationally. Prior to that he led central operations at Radio Shack.
              </p>
            </motion.div>

            {/* RIGHT — Colby */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase leading-tight">Colby Espinoza</h2>
                  <p className="text-[#0F5050] text-xs font-medium tracking-widest uppercase mt-1">General Manager</p>
                </div>
                <img src="/colby.jpg" alt="Colby Espinoza" className="w-40 h-40 rounded-full object-cover" />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-normal">
                Colby serves as General Manager and eagerly wears all hats leading the day to day operations of PICKLETEO. Colby is known for his exceptional customer service and business acumen honed in IT and other industries including his family's restaurants over the past 15 years.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-normal">
                He is passionate about creating an unparalleled experience for players of all skill levels to play, create community and have a great time in his devotion to making PICKLETEO THE place for pickleball in Western Washington. He looks forward to getting to know as many players as possible.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div className="flex items-center justify-center gap-3 mb-3"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="block h-[2px] w-8 bg-[#0F5050]" />
            <span className="text-[#0F5050] text-xs font-medium tracking-[0.2em] uppercase">Our Values</span>
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 uppercase text-center mb-12"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            What We <span className="text-[#D0B060]">Stand For.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Community First',
                desc: "This club exists because of its members. Your feedback shapes what we build — from hours to programming to pricing. We're listening."
              },
              {
                title: 'Fair & Transparent',
                desc: 'Simple membership, no games. Pricing and programming details are being finalized with our members in mind — waitlist members see everything first.'
              },
              {
                title: 'All Levels Welcome',
                desc: "Whether you've never held a paddle or you're grinding to compete, there's a place for you. Every program is designed to meet players where they are."
              }
            ].map(({ title, desc }) => (
              <motion.div key={title} className="bg-white rounded-2xl p-8 border border-zinc-200 relative overflow-hidden group"
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#D0B060] group-hover:w-full transition-all duration-500" />
                <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-normal">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
