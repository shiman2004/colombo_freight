import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Check, 
  Globe2, 
  MapPin, 
  Clock3, 
  PackageCheck, 
  MessageCircle, 
  Radar, 
  ShieldCheck, 
  Headphones, 
  Anchor, 
  Truck, 
  Plane, 
  Layers, 
  ArrowUpRight,
  Shield,
  Award,
  BarChart3
} from 'lucide-react'
import ServicesCarousel from '../components/ServicesCarousel'
import QuoteForm from '../components/QuoteForm'
import { industries, lanes, ServiceItem } from '../data/content'

interface HomePageProps {
  onNavigate: (page: string) => void
  onSelectServiceForQuote?: (service: ServiceItem) => void
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  dark = false
}: {
  eyebrow: string
  title: string
  desc?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`section-title ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {desc && (
        <p className={`mt-5 text-lg leading-8 ${dark ? 'text-white/60' : 'text-slate-500'}`}>{desc}</p>
      )}
    </div>
  )
}

export default function HomePage({ onNavigate, onSelectServiceForQuote }: HomePageProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const handleCarouselSelect = (s: ServiceItem) => {
    setSelectedService(s)
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(s)
    }
  }

  return (
    <div>
      {/* 1. Hero Section with Video Background */}
      <section id="home" className="relative min-h-[750px] bg-ink pt-32 lg:min-h-[820px] flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Cargo ship operations"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/ship.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,.95)_0%,rgba(5,11,20,.78)_52%,rgba(5,11,20,.35)_100%)]" />

        <div className="relative mx-auto max-w-content px-5 pb-20 pt-16 lg:px-8 lg:pt-24 z-10 w-full">
          <Reveal>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.04em] text-white sm:text-6xl lg:text-[76px]">
              Colombo Freight <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                moves cargo with care.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 font-medium">
              End-to-end global freight forwarding, LCL cargo consolidation, and island-wide bonded haulage connecting Sri Lanka with premier worldwide trade corridors.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                onClick={() => {
                  onNavigate('contact')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Request a Quote <ArrowRight size={17} />
              </button>
              <button
                onClick={() => {
                  onNavigate('services')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                Explore Services
              </button>
            </div>

            {/* Quick Badges */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-white/80">
              {['Global Port Connectivity', 'In-House Customs Brokerage', 'GPS-Tracked Island Fleet'].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <Check size={16} className="text-cyan-300" />
                  {x}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Key Metrics & Fast Facts Banner */}
      <section className="relative z-20 mx-4 -mt-8 sm:mx-8 max-w-content lg:mx-auto">
        <div className="rounded-2xl border border-white/15 bg-[#091d30]/85 p-6 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:divide-x lg:divide-white/10">
            <div className="lg:px-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">Colombo 02</div>
              <div className="mt-1 text-xs font-semibold text-white/60 uppercase tracking-wider">Headquarters & Ops</div>
            </div>
            <div className="lg:px-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">7 Core</div>
              <div className="mt-1 text-xs font-semibold text-white/60 uppercase tracking-wider">Freight Disciplines</div>
            </div>
            <div className="lg:px-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">100% Compliant</div>
              <div className="mt-1 text-xs font-semibold text-white/60 uppercase tracking-wider">Customs Brokerage</div>
            </div>
            <div className="lg:px-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">24/7 Support</div>
              <div className="mt-1 text-xs font-semibold text-white/60 uppercase tracking-wider">Cargo Visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Services Carousel */}
      <div className="pt-10">
        <ServicesCarousel
          onSelectService={(s) => {
            handleCarouselSelect(s)
            onNavigate('services')
          }}
        />
      </div>

      {/* 4. Strategic Hub Advantage */}
      <section className="section bg-paper">
        <div className="mx-auto grid max-w-content gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="STRATEGIC MARITIME HUB"
              title="Sri Lanka's premier vantage point in global trade."
              desc="Situated at the crossroads of major East-West shipping lanes, Port of Colombo enables swift multi-country consolidation, rapid vessel turnaround, and zero-tax entrepôt cargo processing."
            />
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
                  <Anchor size={16} />
                </div>
                <div>
                  <strong className="text-white block">Deepwater Port Access</strong>
                  Direct connectivity to CICT, SAGT, SLPA & CWIT terminals accommodating world-class ultra-large container vessels.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
                  <Layers size={16} />
                </div>
                <div>
                  <strong className="text-white block">Entrepôt & MCC Facilities</strong>
                  Merge shipments across Asia into single buyer containers with full repack, re-label and transshipment capabilities.
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 font-bold text-cyan-300 hover:text-cyan-200 transition"
              >
                Learn More About Colombo Freight <ArrowRight size={17} />
              </button>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-[#0a1e33]/70 p-6 sm:p-8 shadow-2xl backdrop-blur-lg">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">CORPORATE SYNERGY</span>
                <span className="rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-xs text-cyan-200 font-bold">Colombo 02</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Multimodal Logistics & Allied Trade</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Operating under a unified network with affiliated specialists to deliver complete supply chain execution.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/[.04] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Colombo Freight (Pvt) Ltd</span>
                    <span className="text-xs text-cyan-300 font-semibold">Freight Forwarding</span>
                  </div>
                  <div className="mt-1 text-xs text-white/50">29/11 Chapel Lane, Colombo 02, Sri Lanka</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[.04] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Paragon Cargo Solutions</span>
                    <span className="text-xs text-cyan-300 font-semibold">Customs Brokerage</span>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Customs clearance, compliance, tariff classification</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[.04] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Suroor International</span>
                    <span className="text-xs text-cyan-300 font-semibold">Trading Affiliate</span>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Commercial sourcing and global trade procurement</div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Hotline: 011 230 4425</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-cyan-300 hover:text-white transition flex items-center gap-1"
                >
                  Contact Colombo Office →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Global Network & Corridors */}
      <section className="section bg-ink text-white">
        <div className="mx-auto grid max-w-content gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <Reveal>
            <SectionTitle
              dark
              eyebrow="GLOBAL NETWORK"
              title="Connecting Colombo to every major international trade corridor."
              desc="From port-to-port container shipping to direct airport cargo charters, we manage complex logistics with clear milestone tracking."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['Ocean Carrier', 'Direct Space'],
                ['Air Charters', 'BIA Allocated'],
                ['Bonded Haulage', 'Island-wide'],
                ['CFS Storage', 'Port Bonded']
              ].map(([a, b]) => (
                <div key={a} className="border-l border-cyan-400/30 pl-4">
                  <div className="text-lg font-bold text-white">{a}</div>
                  <div className="text-xs text-white/50">{b}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={() => onNavigate('services')}
                className="btn-primary"
              >
                View All 7 Services <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

          <Reveal>
            <div className="world-map relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#091a2c]/60 p-6">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_45%,rgba(74,141,255,.30),transparent_50%)]" />
              {[
                ['Sri Lanka', '61%', '62%'],
                ['Singapore', '72%', '60%'],
                ['Dubai / UAE', '55%', '52%'],
                ['India', '63%', '52%'],
                ['China', '75%', '43%'],
                ['Europe / UK', '44%', '32%'],
                ['North America', '20%', '38%'],
                ['Australia', '82%', '74%']
              ].map(([n, l, t]) => (
                <div key={n} className="absolute" style={{ left: l, top: t }}>
                  <span className="block h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  <span className="mt-1.5 whitespace-nowrap text-[11px] font-bold text-white/70 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {n}
                  </span>
                </div>
              ))}
              <Globe2 className="absolute bottom-6 right-6 h-36 w-36 text-white/[.05]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Industries Served */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="SPECIALIZED DOMAINS"
              title="Tailored logistics for industry requirements."
              desc="Providing compliant, timely, and specialized handling across private and public sectors."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Government Contracts', desc: 'Secure project cargo and compliant tender logistics.', icon: Shield },
              { title: 'Automobiles & Vehicles', desc: 'RoRo shipping, containerized vehicle logistics & clearance.', icon: Truck },
              { title: 'Personal Effects', desc: 'Household relocations, unaccompanied baggage & door delivery.', icon: PackageCheck },
              { title: 'Commercial Trading', desc: 'Fast-moving merchant goods, consolidation & inventory flow.', icon: BarChart3 }
            ].map((item) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title}>
                  <div className="group relative rounded-2xl border border-white/10 bg-[#091b2c]/60 p-6 transition duration-300 hover:border-cyan-400/40 hover:bg-[#0c243d]/80">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 group-hover:scale-110 transition">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA & Quick Inquiry Box */}
      <section className="bg-[#030812] px-5 py-20 text-white lg:px-8">
        <Reveal className="mx-auto max-w-content rounded-3xl border border-white/15 bg-gradient-to-r from-[#07192d] to-[#04101e] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>READY TO SHIP?</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight">
                Get an instant quote for your cargo.
              </h2>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Connect with our team in Colombo 02 for competitive ocean, air, and land freight rates with full customs clearance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary"
                >
                  Contact Us Now <ArrowRight size={17} />
                </button>
                <a href="tel:+94112304425" className="btn-secondary">
                  Call 011 230 4425
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#061524]/80 p-6 backdrop-blur-md">
              <div className="text-sm font-bold text-white mb-2">Instant Quote Inquiry</div>
              <p className="text-xs text-white/50 mb-4">Select your required mode and send us your shipment parameters.</p>
              <QuoteForm selectedService={selectedService} />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
