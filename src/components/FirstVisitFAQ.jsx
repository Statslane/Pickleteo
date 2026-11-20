
const beginnerQuestions = [
  { question: 'I’ve never played. Where should I start?', answer: 'Start with our free, one-hour Beginners Class. Paddles and balls are included. Learn the basic rules and shots so you can take your first step with more confidence.', link: 'https://player.courtreserve.com/players/events/e-2275478', label: 'Find a free beginner class' },
  { question: 'Do I need a paid membership to try the class?', answer: 'No. The Beginners Class has free registration and a public guest-booking option. Check the event page for upcoming dates and available places.' },
  { question: 'What is the difference between a class and open play?', answer: 'A class is an introduction or learning session. Open play is a scheduled opportunity to play games with other participants. Check the level and format before booking; our team can help you choose a suitable next session.' },
  { question: 'What should I do after my first class?', answer: 'Tell our team how the class felt and ask which session suits your experience. Keep playing at a comfortable level, meet other players, and explore membership when you’re ready.', link: '/contact#contact-team', label: 'Help me choose my next session' },
  { question: 'Where do I enter and park?', answer: 'Find us at 2716 119th Street SW, Everett, WA 98204, serving the Mukilteo and Everett area. Use the street-side north entrance. Parking is east of and behind the building, with more spaces beyond the circle drive to the west. Contact us for accessible entrance or parking guidance.' },
  { question: 'Can I come alone, and do I need my own paddle?', answer: 'Yes—you can register on your own. Choose a class or open-play session that fits your experience; a private court reservation does not arrange other players for you. Loaner paddles are available for guests, and we can provide balls. Equipment is included in the free Beginners Class; ask about equipment for other sessions.', link: '/contact#contact-team', label: 'Help me choose a session' },
  { question: 'Do I need to download an app?', answer: 'You can start with the public beginner-class booking page in your browser. CourtReserve also offers iPhone and Android apps for managing bookings. Check the registration page for the account steps required by your selected activity.' },
  { question: 'What should I wear, and when should I arrive?', answer: 'Wear appropriate sports clothing and athletic, non-marking shoes—no boots, dress shoes, slippers, or Crocs. Arrive 10–15 minutes early and check in at the front desk. Complete the waiver and conduct steps during CourtReserve registration, and renew your waiver when CourtReserve prompts you. Safety glasses are recommended.' },
  { question: 'Can children learn and play?', answer: 'Lessons start at age six. Children under 14 should have parental supervision. General open play requires basic skills and an understanding of the rules. Check the age and level requirements of your selected class or session before booking.' },
  { question: 'Can I stop by to see the club?', answer: 'You’re welcome to visit. Our normal hours are 5 AM–11 PM daily, though we may close early when bookings are light. Call before making a special trip. Joining a suitable open play is a great way to experience the courts and community.' },
  { question: 'What does it cost to play as a guest?', answer: 'Guest registration is free. Guest court rental is $50 per court per hour for up to six players; ordinary open play is $20 per session. A guest playing on a member’s reservation pays $20 for up to two hours. The Beginners Class is free, including equipment. Check your selected booking for its total price and any applicable taxes or fees.', link: '/membership', label: 'Compare guest and membership options' },
  { question: 'How do I choose a membership?', answer: 'Compare the current plans and benefits in CourtReserve. Choose based on how you want to play, and ask our team if you’d like help understanding the options.', link: '/membership', label: 'Compare memberships' },
  { question: 'Where can I check cancellations and booking terms?', answer: 'Review the terms for your selected activity before confirming, and manage activity cancellations through CourtReserve. Membership cancellation is a separate process; contact the club for the applicable notice and refund terms before joining.', link: '/policies', label: 'Read club policies' },
];
export default function FirstVisitFAQ({ compact = false }) {
  const items = compact ? beginnerQuestions.slice(0,4) : beginnerQuestions;
  return <section id="first-visit-faq" className="faq-section scroll-mt-28 py-14 sm:py-20 bg-[#F0F0E8]" aria-labelledby="first-visit-heading">
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#0F5050] mb-3">A little guidance before your first game</p>
      <h2 id="first-visit-heading" className="text-3xl sm:text-4xl font-black text-[#0F5050] mb-5">Your first visit, made simpler.</h2>
      <p className="text-zinc-700 mb-8 leading-relaxed">You don’t need to know the pickleball language to take the first step. Start with these answers, or talk to our team.</p>
      <div className="space-y-3">{items.map(item=><details key={item.question} className="faq-item bg-white border border-[#0F5050]/15 rounded-xl px-5 sm:px-7">
        <summary className="cursor-pointer py-5 font-semibold text-[#0F5050] leading-relaxed">{item.question}</summary>
        <div className="pb-6 text-zinc-700 leading-relaxed"><p>{item.answer}</p>{item.link && <a className="inline-block mt-4 font-semibold underline underline-offset-4 text-[#0F5050]" href={item.link}>{item.label} →</a>}</div>
      </details>)}</div>
      {compact && <a href="/contact#first-visit-faq" className="inline-block mt-7 text-[#0F5050] font-semibold underline underline-offset-4">See all first-visit questions →</a>}
    </div>
  </section>;
}
