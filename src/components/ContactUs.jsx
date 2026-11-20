import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import FirstVisitFAQ from './FirstVisitFAQ';
import PageHero from './PageHero';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function ContactUs() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() { try { await navigator.clipboard.writeText('Info@pickleteo.com'); setCopyStatus('Email address copied.'); } catch { setCopyStatus('Select and copy Info@pickleteo.com below.'); } }

  return (
    <main className="interior-page min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full overflow-x-clip">
      <Header alwaysVisible />

      {/* HERO */}
      <PageHero muted eyebrow="Your first visit" title="A question is a great place to start." description="New to pickleball or just new to Pickleteo? Find answers below, or get in touch for help choosing your first session." image="/optimized/so9.webp" alt="Players enjoying a game at Pickleteo"><div className="flex flex-wrap gap-3 mt-6"><a href="#contact-team" className="action-primary">Contact our team</a><a href="#first-visit-faq" className="action-primary">First-visit answers</a></div></PageHero>

      <FirstVisitFAQ />

      {/* MAP + CONTACT INFO */}
      <section className="py-16 lg:py-24 bg-[#0F5050]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Map */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <div className="rounded-2xl border border-white/20 p-8 bg-white/5 text-white"><p className="text-[#f0d58d] font-semibold mb-3">Find your way to Pickleteo</p><p className="text-xl font-bold mb-3">2716 119th Street SW<br />Everett, WA 98204</p><p className="text-white/85 leading-relaxed mb-6">Serving the Mukilteo and Everett area, near Paine Field. Use the street-side north entrance. Park east of or behind the building, or beyond the circle drive to the west. Call us for accessible entrance or parking guidance.</p><a className="action-primary" href="https://www.google.com/maps/search/?api=1&query=Pickleteo+Paddle+Club+2716+119th+St+SW+Everett+WA">Open directions</a></div>
          </motion.div>

          {/* RIGHT — Contact Info */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight} className="text-white">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">PICKLETEO CONTACT</h2>
            <div className="space-y-3">
              <p className="text-[#e5c680] font-medium text-lg underline">Mukilteo and Everett area</p>
              <p className="text-sm font-normal"><span className="font-medium">Email: </span><a href="mailto:Info@pickleteo.com" className="text-[#e5c680] hover:underline">Info@pickleteo.com</a></p>
              <p className="text-sm font-normal"><span className="font-medium">Phone: </span><a href="tel:4255138946" className="text-[#e5c680] hover:underline">(425) 513-8946</a></p>
              <div className="text-sm font-normal">
                <p className="font-medium">Address:</p>
                <p>2716 119th Street SW</p>
                <p>Everett, WA 98204</p><p className="mt-4">Normal hours: 5 AM–11 PM daily. We may close early when bookings are light; call before a special trip.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* GET IN TOUCH FORM */}
      <section id="contact-team" className="scroll-mt-28 py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-[2px] w-8 bg-[#0F5050]" />
              <span className="text-[#0F5050] text-xs font-medium tracking-[0.2em] uppercase">Message Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase">Get In <span className="text-[#80651f]">Touch.</span></h2>
          </motion.div>
          <div className="rounded-2xl border border-zinc-200 p-8">
            <p className="text-zinc-600 mb-6">Questions about your first visit, programs, or membership? Email or call our team and we’ll help you get started.</p>
            <div className="flex flex-wrap gap-4"><button type="button" onClick={copyEmail} className="action-outline">Copy email address</button><a href="tel:4255138946" className="border border-[#0F5050] text-[#0F5050] px-6 py-3 rounded-lg">Call (425) 513-8946</a></div><p className="mt-5 text-[#0F5050] font-semibold select-all">Info@pickleteo.com</p><p className="text-sm text-zinc-600 mt-2">Copy the address into your preferred email service, or call us for help with your first visit.</p><p role="status" aria-live="polite" className="mt-2 text-[#0F5050]">{copyStatus}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
