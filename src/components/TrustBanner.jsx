import { useInView } from '../hooks/useInView';
import { Paintbrush, ShieldCheck, Award, Leaf } from 'lucide-react';

const badges = [
  { icon: Paintbrush, label: 'DULUX Accredited', desc: 'Premium paint systems' },
  { icon: Award, label: 'Master Painters', desc: 'Industry certified' },
  { icon: ShieldCheck, label: 'Fully Insured', desc: 'Complete peace of mind' },
  { icon: Leaf, label: 'EPA Compliant', desc: 'Eco-responsible practices' },
];

export default function TrustBanner() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-linen border-y border-linen-dark/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-10 py-10 md:py-12 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <b.icon size={18} className="text-sage" />
              </div>
              <div>
                <p className="text-slate-deep text-sm font-medium leading-tight">{b.label}</p>
                <p className="text-warm-gray text-[11px] font-light">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
