import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-sage text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-sage/25 hover:bg-sage-dark hover:shadow-xl transition-all duration-500 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <MessageSquare size={16} className="transition-transform group-hover:scale-110" />
      <span className="text-sm font-medium tracking-wide hidden sm:inline">Free Quote</span>
    </a>
  );
}
