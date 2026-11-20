
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import PageHero from './PageHero';

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function AboutUs() {
  return (
    <main className="interior-page min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full overflow-x-clip">
      <Header alwaysVisible />

      {/* HERO */}
      <PageHero muted eyebrow="Our community" title="Belong. Improve. Keep coming back." description="A locally owned club bringing people together through welcoming play, memorable experiences, and meaningful connections." image="/optimized/so8.webp" alt="Players on court at Pickleteo" />

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
                <img loading="lazy" decoding="async" src="/optimized/frank.webp" alt="Frank Espinoza" className="w-40 h-40 rounded-full object-cover" style={{ objectPosition: 'center 15%' }} />
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
                <img loading="lazy" decoding="async" src="/optimized/colby.webp" alt="Colby Espinoza" className="w-40 h-40 rounded-full object-cover" />
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

      <section className="values-section otter-accent py-16 lg:py-24" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="values-intro"><p className="text-xs font-bold uppercase tracking-widest text-[#0F5050] mb-4">What we stand for</p><h2 id="values-heading">Good games.<br />Meaningful connections.</h2><p className="values-lead">The courts bring us together. The way we welcome, support, and learn from each other gives us a reason to return.</p></div>
          <div className="values-grid">
            {[
              { title: 'Community first', promise: 'A place to feel part of something.', desc: 'A great club is built through the people in it. We want Pickleteo to be a place where you build connections and feel part of the community.' },
              { title: 'Fair and transparent', promise: 'Clarity before you commit.', desc: 'You should be able to understand your options. Explore current benefits and program details, and ask us for help finding the way to play that fits you.' },
              { title: 'All levels welcome', promise: 'Your starting point belongs here.', desc: 'Everyone has a first game. Whether you’re learning the basics or looking for your next challenge, take the next step at a level that feels right for you.' }
            ].map(({title,promise,desc})=><article key={title} className="value-card"><span className="value-accent" aria-hidden="true" /><p className="value-label">{title}</p><h3>{promise}</h3><p className="value-description">{desc}</p></article>)}
          </div>
          <div className="values-invitation"><p>Not sure where to begin? You don’t need to have it figured out.</p><a href="/#start-here">Find your first step →</a></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
