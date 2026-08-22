import { MessageCircle, MapPin, Phone, Mail, Clock, ArrowUpRight, Shield, Globe } from 'lucide-react'

interface FooterProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-[#040913] px-5 pb-10 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <button 
              onClick={() => onNavigate('home')} 
              className="inline-block text-left transition hover:opacity-85"
            >
              <img src="/logos/logo-white.svg" alt="Colombo Freight" className="h-11 w-auto max-w-[210px] object-contain" />
            </button>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Colombo Freight (Pvt) Ltd is a premier freight forwarding and multimodal logistics provider headquartered strategically in Colombo, Sri Lanka — connecting global supply chains across the Indian Ocean.
            </p>
            <div className="space-y-2 text-sm text-white/65">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 text-cyan-300 shrink-0" />
                <span>29/11 Chapel Lane, Colombo 02, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-cyan-300 shrink-0" />
                <a href="mailto:info@cmb-freight.com" className="hover:text-cyan-200 transition">info@cmb-freight.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-cyan-300 shrink-0" />
                <a href="tel:+94112304425" className="hover:text-cyan-200 transition">011 230 4425</a>
              </div>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact Us' }
              ].map(page => (
                <li key={page.id}>
                  <button
                    onClick={() => onNavigate(page.id)}
                    className={`transition hover:text-white ${currentPage === page.id ? 'font-bold text-cyan-300' : ''}`}
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                'Ocean Freight (FCL & LCL)',
                'Air Freight Cargo',
                'Land Transportation',
                'LCL Cargo Consolidation',
                'Multi-Country Consolidation',
                'Port Transshipment',
                'Customs Brokerage'
              ].map((s) => (
                <li key={s}>
                  <button 
                    onClick={() => onNavigate('services')} 
                    className="text-left transition hover:text-white"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliates & Trust */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">Affiliate Synergy</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-3.5">
                <div className="text-xs font-bold text-white">Paragon Cargo Solutions</div>
                <div className="mt-0.5 text-xs text-white/50">Customs Brokerage & Clearance</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-3.5">
                <div className="text-xs font-bold text-white">Suroor International</div>
                <div className="mt-0.5 text-xs text-white/50">Global Trading & Commercial Arm</div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/90 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
              >
                Request a Quote <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Colombo Freight (Pvt) Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition" onClick={() => onNavigate('about')}>Company Policy</span>
            <span className="cursor-pointer hover:text-white transition" onClick={() => onNavigate('services')}>Terms of Carriage</span>
            <span className="cursor-pointer hover:text-white transition" onClick={() => onNavigate('contact')}>Support</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
