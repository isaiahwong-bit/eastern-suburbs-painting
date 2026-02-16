import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(47,62,70,0.06)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
              <span className="text-white font-serif font-bold text-base leading-none">E</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-serif font-semibold text-[17px] tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-slate-deep' : 'text-white'
              }`}>
                Eastern Suburbs
              </span>
              <span className={`text-[10px] font-light tracking-[0.18em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-warm-gray' : 'text-white/60'
              }`}>
                Painting
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href} className={`text-[13px] font-light tracking-wide transition-colors duration-300 hover:text-sage ${
                scrolled ? 'text-slate-deep/80' : 'text-white/85'
              }`}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="flex items-center gap-2 bg-sage text-white px-5 py-2 rounded-full text-[13px] font-medium tracking-wide hover:bg-sage-dark transition-colors">
              <Phone size={13} />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 ${scrolled ? 'text-slate-deep' : 'text-white'}`} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-xl transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-5 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-slate-deep text-base font-serif hover:text-sage transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 bg-sage text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-sage-dark transition-colors">
            <Phone size={14} />
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
