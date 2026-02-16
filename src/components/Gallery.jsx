import { useInView } from '../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    src: 'https://picsum.photos/seed/heritage-ext/800/500',
    label: 'Heritage Exterior',
    location: 'Heathmont',
    size: 'large',
  },
  {
    src: 'https://picsum.photos/seed/interior-liv/600/600',
    label: 'Interior Living',
    location: 'Forest Hill',
    size: 'small',
  },
  {
    src: 'https://picsum.photos/seed/modern-kit/600/600',
    label: 'Modern Kitchen',
    location: 'Vermont',
    size: 'small',
  },
  {
    src: 'https://picsum.photos/seed/colour-det/600/600',
    label: 'Colour Detail',
    location: 'Ringwood',
    size: 'small',
  },
  {
    src: 'https://picsum.photos/seed/facade-rest/800/500',
    label: 'Facade Restoration',
    location: 'Mitcham',
    size: 'large',
  },
  {
    src: 'https://picsum.photos/seed/bathroom-fin/600/600',
    label: 'Bathroom Finish',
    location: 'Heathmont',
    size: 'small',
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-linen-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div ref={ref} className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-lg">
            <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3">Portfolio</p>
            <h2 className="font-serif text-slate-deep text-3xl md:text-[2.75rem] font-bold leading-tight">
              Every Detail,<br />Considered
            </h2>
          </div>
          <p className="text-warm-gray text-sm font-light max-w-xs leading-relaxed">
            Macro-level precision and full transformations — a selection of recent projects across the Eastern Suburbs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isLarge = item.size === 'large';

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${isLarge ? 'md:col-span-2 h-[320px] md:h-[380px]' : 'h-[260px] md:h-[380px]'} transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image with gradient fallback */}
      <div className="absolute inset-0 img-placeholder">
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Always-visible bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <div>
          <p className="text-white font-serif text-lg font-semibold">{item.label}</p>
          <p className="text-white/60 text-xs tracking-wider uppercase">{item.location}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}
