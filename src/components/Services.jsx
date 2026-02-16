import { Home, Sun, Droplets, ArrowRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Home,
    title: 'Heritage Restorations',
    tagline: "Preserving the Eastern Suburbs' Character",
    description: 'Meticulous restoration of period homes — from Victorian-era lacework to Edwardian weatherboards. We match original colour palettes and honour your home\'s story.',
    features: ['Period-accurate colour matching', 'Lead paint safe removal', 'Heritage overlay compliance', 'Timber repair & prep'],
    accent: 'bg-linen',
    accentText: 'text-slate-deep',
  },
  {
    icon: Sun,
    title: 'Modern Facades',
    tagline: 'Weather-Resistant DULUX Systems',
    description: 'Engineered exterior systems built for Melbourne\'s four-seasons-in-one-day climate. Premium DULUX Weathershield technology for lasting protection.',
    features: ['DULUX Weathershield systems', 'UV & moisture resistance', '10-year performance guarantee', 'Render & cladding specialists'],
    accent: 'bg-sage/10',
    accentText: 'text-sage-dark',
  },
  {
    icon: Droplets,
    title: 'Interior Sanctuary',
    tagline: 'Low-VOC, Moisture-Resistant Finishes',
    description: 'Transform interiors with health-conscious finishes. Low-VOC formulations safe for families, with moisture-resistant systems for kitchens and bathrooms.',
    features: ['Low-VOC & eco-friendly paints', 'Kitchen & bathroom specialists', 'Colour consultation included', 'Furniture & floor protection'],
    accent: 'bg-slate-deep/5',
    accentText: 'text-slate-deep',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div ref={ref} className={`max-w-xl mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3">Curated Solutions</p>
          <h2 className="font-serif text-slate-deep text-3xl md:text-[2.75rem] font-bold leading-tight mb-4">
            Crafted for Every<br />Surface & Style
          </h2>
          <p className="text-warm-gray text-base font-light leading-relaxed">
            Three specialised disciplines, one unwavering standard. Every project begins with a complimentary consultation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl border border-slate-deep/[0.04] overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-slate-deep/[0.04] hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 ${index === 0 ? 'bg-linen-dark' : index === 1 ? 'bg-sage' : 'bg-slate-deep/20'}`} />

      <div className="p-7 md:p-8">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${service.accent} flex items-center justify-center mb-5`}>
          <Icon size={22} className={service.accentText} />
        </div>

        {/* Tagline */}
        <p className="text-sage text-[11px] tracking-[0.15em] uppercase font-semibold mb-2">{service.tagline}</p>

        {/* Title */}
        <h3 className="font-serif text-slate-deep text-2xl font-bold mb-3">{service.title}</h3>

        {/* Description */}
        <p className="text-warm-gray text-sm font-light leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2.5 mb-7">
          {service.features.map((f, j) => (
            <li key={j} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                <Check size={10} className="text-sage" />
              </div>
              <span className="text-slate-deep/70 text-[13px] font-light">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="inline-flex items-center gap-2 text-sage text-sm font-medium hover:gap-3 transition-all duration-300 group/link">
          Learn More
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
