
export default function PageHero({eyebrow,title,description,image,alt,children,muted = false}) {
  return <section className="page-hero">
    <div className="page-hero-copy"><p className="text-[#DDB764] text-xs font-bold uppercase tracking-widest mb-4">{eyebrow}</p><h1>{title}</h1><p className="page-hero-description">{description}</p>{children}</div>
    <div className={`page-hero-photo ${muted ? "page-hero-photo-muted" : ""}`}><img src={image} alt={alt} /></div>
  </section>;
}
