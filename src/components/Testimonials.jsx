import { Star, Quote, Shield, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    text: "Scott transformed our 1920s weatherboard in Heathmont. His understanding of heritage homes is unmatched — every detail was considered, every edge perfect.",
    author: "Margaret & David L.",
    location: "Heathmont Heritage Home",
  },
  {
    text: "We've used Eastern Suburbs for three properties now. The consistency is remarkable. They treat every home like it's their own masterpiece.",
    author: "James T.",
    location: "Forest Hill & Ringwood",
  },
  {
    text: "The low-VOC finishes Scott recommended for our nursery were perfect. Professional, considerate, and the result is absolutely flawless.",
    author: "Sarah K.",
    location: "Vermont South",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Top: Big rating + headline */}
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Left: Rating */}
          <div>
            <p className="text-sage-light text-xs tracking-[0.2em] uppercase font-semibold mb-6">Scott's Word</p>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-white text-7xl md:text-8xl font-bold leading-none">5.0</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold text-gold" />)}
                </div>
                <p className="text-white/40 text-sm font-light">77 verified reviews</p>
              </div>
            </div>
          </div>

          {/* Right: Headline */}
          <div>
            <h2 className="font-serif text-white text-3xl md:text-[2.75rem] font-bold leading-tight mb-4">
              Guardian of Local<br />
              <span className="text-linen italic">Architecture</span>
            </h2>
            <p className="text-white/45 text-base font-light leading-relaxed max-w-md">
              For over a decade, Scott and the team have preserved the character of Melbourne's most cherished homes — one brushstroke at a time.
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 pt-10 border-t border-white/8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { icon: Award, label: 'DULUX Accredited' },
            { icon: Shield, label: 'Fully Licensed & Insured' },
            { icon: Award, label: 'Master Painters' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 text-white/25">
              <badge.icon size={16} />
              <span className="text-xs tracking-wider uppercase font-light">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-white/[0.04] border border-white/[0.06] rounded-2xl p-7 lg:p-8 transition-all duration-700 hover:bg-white/[0.07] hover:border-white/[0.1] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Quote size={24} className="text-sage/30 mb-5" />

      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-gold text-gold" />)}
      </div>

      <p className="text-white/75 text-sm leading-relaxed font-light mb-6">
        "{review.text}"
      </p>

      <div className="pt-5 border-t border-white/[0.06]">
        <p className="text-white text-sm font-medium">{review.author}</p>
        <p className="text-white/35 text-xs tracking-wide mt-0.5">{review.location}</p>
      </div>
    </div>
  );
}
