import { MapPin, Phone, Mail, Clock, ArrowUp, Send } from 'lucide-react';

const inputClass = "w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-sage/40 focus:bg-white/[0.08] transition-all";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-dark">
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Form — takes 3 cols */}
        <div className="lg:col-span-3 px-5 md:px-12 lg:px-16 py-16 lg:py-24">
          <p className="text-sage-light text-xs tracking-[0.2em] uppercase font-semibold mb-3">Get Started</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold leading-tight mb-3">
            Request a <span className="text-linen italic">Free Quote</span>
          </h2>
          <p className="text-white/40 text-sm font-light leading-relaxed mb-10 max-w-md">
            Every project starts with a conversation. Tell us about your home and we'll provide a detailed, obligation-free consultation.
          </p>

          <form className="max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First Name" autoComplete="given-name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last Name" autoComplete="family-name" className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="sr-only">Select Service</label>
              <select id="service" name="service" className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white/40 text-sm focus:outline-none focus:border-sage/40 focus:bg-white/[0.08] transition-all appearance-none">
                <option value="" className="bg-slate-dark">Select Service</option>
                <option value="heritage" className="bg-slate-dark text-white">Heritage Restoration</option>
                <option value="exterior" className="bg-slate-dark text-white">Modern Facade / Exterior</option>
                <option value="interior" className="bg-slate-dark text-white">Interior Sanctuary</option>
                <option value="commercial" className="bg-slate-dark text-white">Commercial</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Project details</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." rows={3} className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-sage/40 focus:bg-white/[0.08] transition-all resize-none" />
            </div>
            <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sage text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20">
              <Send size={14} />
              Send Request
            </button>
          </form>
        </div>

        {/* Map + Contact — takes 2 cols */}
        <div className="lg:col-span-2 relative min-h-[360px] lg:min-h-0">
          <iframe
            title="Map showing Eastern Suburbs Painting service area around Heathmont, VIC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25213.53!2d145.22!3d-37.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63b4c4e2b4f7f%3A0x5045675218ce6e0!2sHeathmont%20VIC%203135!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-50"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Contact overlay card */}
          <address className="absolute bottom-6 left-6 right-6 lg:right-6 bg-white rounded-2xl p-5 shadow-2xl max-w-sm not-italic">
            <h3 className="font-serif text-slate-deep text-base font-semibold mb-3">Service Area</h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-sage mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs text-warm-gray font-light leading-relaxed">
                  Heathmont, Forest Hill, Ringwood, Vermont, Mitcham & surrounding Eastern Suburbs
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-sage shrink-0" aria-hidden="true" />
                <a href="tel:0400000000" className="text-xs text-slate-deep font-light hover:text-sage transition-colors">0400 000 000</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-sage shrink-0" aria-hidden="true" />
                <a href="mailto:scott@easternsuburbspainting.com.au" className="text-xs text-slate-deep font-light hover:text-sage transition-colors">scott@easternsuburbspainting.com.au</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-sage shrink-0" aria-hidden="true" />
                <p className="text-xs text-warm-gray font-light">Mon–Sat: 7am – 5pm</p>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-5 md:px-12 lg:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px] font-light tracking-wide">
            &copy; {new Date().getFullYear()} Eastern Suburbs Painting. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/20 text-[11px] font-light hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-white/20 text-[11px] font-light hover:text-white/40 transition-colors">Terms</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:border-sage/40 transition-colors" aria-label="Back to top">
              <ArrowUp size={12} className="text-white/30" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
