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
      <section className="relative w-full flex items-end justify-start overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <img src="/so8.jpg" alt="Pickleball" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="relative px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16"
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#DDB764] leading-tight mb-1">
            PickleTeo
          </motion.h1>
          <motion.div variants={fadeUp} className="mb-3">
            <span className="block h-[8px] w-72 bg-[#DDB764]" style={{ transform: 'skewY(-2deg)' }} />
          </motion.div>
          <motion.p variants={fadeUp} className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-snug">
            Western Washington's premier<br />pickleball facilities
          </motion.p>
        </motion.div>
      </section>

      {/* OUR MISSION */}
      <section className="py-16 lg:py-24 bg-[#0E3E57]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            Our Mission
          </motion.h2>
          <motion.div className="flex justify-center mb-8"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="h-[8px] w-72 bg-[#DDB764] block" style={{ transform: 'skewY(-2deg)' }} />
          </motion.div>
          <motion.p
            className="text-zinc-300 text-base sm:text-lg leading-relaxed"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            To propagate the game of pickleball through premier courts, social engagement, and fun while providing a welcoming community space.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
