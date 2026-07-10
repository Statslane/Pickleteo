import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', location: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full">
      <Header alwaysVisible />

      {/* HERO */}
      <section className="w-full flex items-end px-6 sm:px-10 lg:px-16 pb-16"
        style={{ minHeight: '100vh', backgroundImage: 'url(/so9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" style={{ position: 'relative' }} />
        <motion.div initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
            <span className="block h-[2px] w-8 bg-[#D0B060]" />
            <span className="text-[#D0B060] text-xs font-medium tracking-[0.2em] uppercase">Contact</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D0B060] uppercase leading-tight mb-1">
            PICKLETEO
          </motion.h1>
          <motion.div variants={fadeUp}>
            <span className="h-[11px] w-64 bg-[#D0B060] block" style={{ transform: 'skewY(-2deg)' }} />
          </motion.div>
          <motion.p variants={fadeUp} className="text-white font-normal text-xl sm:text-2xl mt-2">
            Get in touch!
          </motion.p>
        </motion.div>
      </section>

      {/* MAP + CONTACT INFO */}
      <section className="py-16 lg:py-24 bg-[#0F5050]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Map */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43000!2d-122.2716!3d47.8716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490195b6e5b5b5b%3A0x1!2s2716+119th+St+SW%2C+Everett%2C+WA+98204!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </motion.div>

          {/* RIGHT — Contact Info */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight} className="text-white">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">PICKLETEO CONTACT</h2>
            <div className="space-y-3">
              <p className="text-[#D0B060] font-medium text-lg underline">Mukilteo</p>
              <p className="text-sm font-normal"><span className="font-medium">Email: </span><a href="mailto:Info@pickleteo.com" className="text-[#D0B060] hover:underline">Info@pickleteo.com</a></p>
              <p className="text-sm font-normal"><span className="font-medium">Phone: </span><a href="tel:4255138946" className="text-[#D0B060] hover:underline">(425) 513-8946</a></p>
              <div className="text-sm font-normal">
                <p className="font-medium">Address:</p>
                <p>2716 119th Street SW</p>
                <p>Everett WA. 98204</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* GET IN TOUCH FORM */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-[2px] w-8 bg-[#0F5050]" />
              <span className="text-[#0F5050] text-xs font-medium tracking-[0.2em] uppercase">Message Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase">Get In <span className="text-[#D0B060]">Touch.</span></h2>
          </motion.div>
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1 block">Name</label>
                <input name="name" value={form.name} onChange={handleChange}
                  className="w-full border border-white/20 rounded-lg px-4 py-3 text-sm font-normal focus:outline-none focus:border-[#D0B060] transition-colors bg-[#3B3B3B] text-white placeholder:text-white/40"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1 block">Email</label>
                <input name="email" value={form.email} onChange={handleChange}
                  className="w-full border border-white/20 rounded-lg px-4 py-3 text-sm font-normal focus:outline-none focus:border-[#D0B060] transition-colors bg-[#3B3B3B] text-white placeholder:text-white/40"
                  placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1 block">Location</label>
              <select name="location" value={form.location} onChange={handleChange}
                className="w-full border border-white/20 rounded-lg px-4 py-3 text-sm font-normal focus:outline-none focus:border-[#D0B060] transition-colors bg-[#3B3B3B] text-white">
                <option value="">Select a location</option>
                <option value="Mukilteo">Mukilteo</option>
                <option value="Seattle">Seattle</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1 block">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                className="w-full border border-white/20 rounded-lg px-4 py-3 text-sm font-normal focus:outline-none focus:border-[#D0B060] transition-colors resize-none bg-[#3B3B3B] text-white placeholder:text-white/40"
                placeholder="How can we help?" />
            </div>
            <button type="submit"
              className="bg-[#0F5050] text-white font-medium uppercase tracking-widest text-sm px-8 py-4 rounded-lg hover:bg-[#D0B060] transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
