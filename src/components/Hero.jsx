import { useState, useRef, useCallback, useEffect } from 'react';
import { Star, ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => updatePos(e.clientX ?? e.touches?.[0]?.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [dragging, updatePos]);

  return (
    <section className="relative bg-slate-deep min-h-screen flex items-center">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:min-h-[calc(100vh-12rem)]">
          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Rating badge */}
            <div className="flex items-center gap-2 mb-8 animate-fade-in-up">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3.5 py-1.5">
                <Star size={13} className="fill-gold text-gold" />
                <span className="text-white/90 text-xs font-medium">5.0 Rating</span>
                <span className="text-white/40 text-xs">&middot;</span>
                <span className="text-white/60 text-xs">77 Reviews</span>
              </div>
            </div>

            <h1 className="font-serif text-white text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold leading-[1.1] mb-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              The Canvas<br />
              <span className="text-linen italic">of Your Home</span>
            </h1>

            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Premium painting for Melbourne's Eastern Suburbs. Heritage restorations,
              modern facades, and interior transformations — crafted with precision.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-sage text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20">
                Request a Free Quote
                <ArrowRight size={15} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full text-sm font-light tracking-wide hover:bg-white/5 transition-all duration-300">
                Our Services
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {[
                { num: '15+', label: 'Years' },
                { num: '500+', label: 'Homes' },
                { num: '100%', label: 'Guarantee' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-white font-serif text-2xl font-bold">{s.num}</p>
                  <p className="text-white/40 text-[11px] tracking-wider uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Location line */}
            <div className="mt-10 pt-6 border-t border-white/8 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <p className="text-white/30 text-xs tracking-[0.15em] uppercase">
                Heathmont &middot; Forest Hill &middot; Ringwood &middot; Vermont &middot; Mitcham
              </p>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div className="relative hidden lg:block h-[520px] rounded-2xl overflow-hidden">
            {/* Rich gradient background that's always visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage/40 via-slate-deep to-slate-dark" />
            {/* Decorative geometric overlay */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
            {/* Large decorative text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-serif text-white/[0.03] text-[14rem] font-bold leading-none">ESP</span>
            </div>

            <div
              ref={sliderRef}
              className="before-after-container absolute inset-0 z-10"
              onPointerDown={(e) => { setDragging(true); updatePos(e.clientX); e.preventDefault(); }}
            >
              {/* After (bottom layer — full) */}
              <div className="absolute inset-0">
                <img
                  src="https://picsum.photos/seed/after-home/1200/900"
                  alt="Beautiful heritage home after painting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-deep/40" />
              </div>

              {/* Before (top layer — clipped) */}
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                <img
                  src="https://picsum.photos/seed/before-home/1200/900"
                  alt="Home before painting"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.3) brightness(0.55)' }}
                />
              </div>

              {/* Slider line + handle */}
              <div className="absolute top-0 bottom-0 z-20" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
                <div className="w-[2px] h-full bg-white/80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <span className="text-slate-deep text-[10px] tracking-widest select-none">&#9664; &#9654;</span>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase z-30">Before</div>
              <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase z-30">After</div>

              {/* Drag hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white/60 px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase z-30 animate-pulse">
                Drag to compare
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — mobile only */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 lg:hidden">
        <ChevronDown className="text-white/30 animate-bounce" size={24} />
      </div>
    </section>
  );
}
