import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Ship, 
  Plane, 
  Truck, 
  Layers, 
  FileCheck, 
  ArrowRight, 
  Check, 
  Package, 
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Clock
} from 'lucide-react'
import { services, ServiceItem } from '../data/content'

interface ServicesPageProps {
  onNavigate: (page: string) => void
  onSelectServiceForQuote: (service: ServiceItem) => void
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

export default function ServicesPage({ onNavigate, onSelectServiceForQuote }: ServicesPageProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ocean' | 'Air' | 'Road'>('All')

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter(s => s.mode === activeFilter)

  const handleRequestQuoteForService = (service: ServiceItem) => {
    onSelectServiceForQuote(service)
    onNavigate('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-28 sm:pt-32">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(74,141,255,.24),transparent_40%)]" />
        <div className="relative mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Logistics Disciplines</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Explore Colombo Freight’s full suite of ocean shipping, air cargo, bonded haulage, multi-country consolidation, and customs compliance services.
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                { id: 'All', label: 'All Services (7)' },
                { id: 'Ocean', label: 'Ocean Freight & Consolidation' },
                { id: 'Air', label: 'Air Cargo Services' },
                { id: 'Road', label: 'Land & Customs Brokerage' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition duration-200 ${
                    activeFilter === tab.id
                      ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'border border-white/15 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <Reveal key={service.id}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#091b2c]/80 shadow-2xl transition duration-300 hover:border-cyan-400/45 hover:bg-[#0c243d]">
                  {/* Image container */}
                  <div className="relative h-56 w-full overflow-hidden bg-black/40">
                    <img
                      src={service.image}
                      alt={service.fullTitle}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091b2c] via-[#091b2c]/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md border border-white/10">
                        {service.mode} Freight
                      </span>
                      {service.badge && (
                        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-200 backdrop-blur-md border border-cyan-400/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition">
                        {service.fullTitle}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/65">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                          {service.features.map(feat => (
                            <div key={feat} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                              <Check size={14} className="text-cyan-300 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="mt-7 pt-4 border-t border-white/10">
                      <button
                        onClick={() => handleRequestQuoteForService(service)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/85 py-3 text-xs font-bold text-white transition hover:bg-blue-600 shadow-md"
                      >
                        Request Rate for this Service <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Stage Operational Process */}
      <section className="section bg-ink text-white">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>HOW WE EXECUTE</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
              Seamless 4-Stage Logistics Flow
            </h2>
            <p className="mt-3 text-sm text-white/65">
              From cargo pickup to final gate out, your goods are handled with total operational precision.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Booking & Route Planning',
                desc: 'We analyze your dimensions, schedule, and port/airport routing to lock in the optimal space allocations.'
              },
              {
                step: '02',
                title: 'Consolidation & Stuffing',
                desc: 'Cargo is received at bonded CFS facilities, verified, packed, and stuffed into containers with tamper-evident seals.'
              },
              {
                step: '03',
                title: 'Customs & Compliance',
                desc: 'Executed through Paragon Cargo Solutions with fast-track tariff clearance, duty handling, and document sign-offs.'
              },
              {
                step: '04',
                title: 'Dispatch & Island Haulage',
                desc: 'Final container haulage and intermodal transfer with active milestone updates and GPS monitoring.'
              }
            ].map(item => (
              <Reveal key={item.step}>
                <div className="relative rounded-2xl border border-white/10 bg-[#091b2c]/60 p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-black text-cyan-300">{item.step}</span>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{item.desc}</p>
                  </div>
                  <div className="mt-6 h-1 w-12 rounded-full bg-cyan-400/40" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Contact CTA */}
      <section className="bg-[#030812] px-5 py-16 text-white lg:px-8">
        <Reveal className="mx-auto max-w-content rounded-3xl border border-white/15 bg-gradient-to-r from-[#07192d] to-[#04101e] p-8 sm:p-12 text-center">
          <Eyebrow>NEED CUSTOM LOGISTICS ADVICE?</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-white">
            Discuss your specific shipping lanes today.
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Our Colombo 02 team is available to assist with container availability, charter space, or custom entrepôt programs.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Get a Fast Quotation <ArrowRight size={16} />
            </button>
            <a href="tel:+94112304425" className="btn-secondary">
              Call Hotline: 011 230 4425
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
