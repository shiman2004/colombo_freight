import { motion } from 'framer-motion'
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Anchor, 
  Layers, 
  Award, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail,
  FileCheck,
  Compass
} from 'lucide-react'

interface AboutPageProps {
  onNavigate: (page: string) => void
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
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

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-28 sm:pt-32">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(74,141,255,.22),transparent_40%)]" />
        <div className="relative mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Pioneering Logistics Across the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Indian Ocean</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Headquartered at 29/11 Chapel Lane, Colombo 02, Colombo Freight (Pvt) Ltd provides integrated freight forwarding, customs clearance, and supply chain solutions connecting Sri Lanka to the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Company Profile & Overview */}
      <section className="section bg-paper">
        <div className="mx-auto grid max-w-content gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <Eyebrow>OUR STORY & PURPOSE</Eyebrow>
            <h2 className="section-title text-white">
              Built on reliability, precision, and local maritime expertise.
            </h2>
            <p className="mt-6 text-base text-slate-300 leading-relaxed">
              Colombo Freight (Pvt) Ltd was established in the commercial heart of Sri Lanka to bridge global manufacturers, traders, and logistics operators with rapid, dependable freight channels. 
            </p>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              By combining international carrier volume contracts with on-the-ground customs mastery, we ensure your cargo moves through ports and borders smoothly, safely, and on schedule.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
                <div className="text-2xl font-extrabold text-cyan-300">Colombo 02</div>
                <div className="mt-1 text-xs text-white/60 font-semibold">Strategic HQ Proximity to Port</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
                <div className="text-2xl font-extrabold text-cyan-300">3 Core Entities</div>
                <div className="mt-1 text-xs text-white/60 font-semibold">Integrated Group Synergy</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-[#0a1f35] to-[#05111e] p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <ShieldCheck className="text-cyan-300" />
                <span>Our Core Operating Principles</span>
              </h3>

              <div className="space-y-5">
                {[
                  {
                    title: 'Precision Execution',
                    desc: 'Zero tolerance for documentation delays or regulatory discrepancies at ports & airports.'
                  },
                  {
                    title: 'Total Transparency',
                    desc: 'Proactive milestone updates and live GPS tracking for road and bonded cargo haulage.'
                  },
                  {
                    title: 'Strategic Indian Ocean Routing',
                    desc: 'Maximizing transit speed and reducing container expenses through Colombo transshipment.'
                  },
                  {
                    title: 'Client-Centric Dedication',
                    desc: 'Tailored logistics designs for small enterprises up to large-scale government contractors.'
                  }
                ].map((item, i) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.title}</div>
                      <div className="mt-1 text-xs text-white/60 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Corporate Group Synergy (Colombo Freight + Paragon + Suroor) */}
      <section className="section bg-ink text-white">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>CORPORATE STRUCTURE</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
              Allied Strength & Group Synergy
            </h2>
            <p className="mt-4 text-sm text-white/65">
              Operating through dedicated specialized entities to cover the full spectrum of freight forwarding, border clearance, and international commerce.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Entity 1 */}
            <Reveal>
              <div className="h-full rounded-2xl border border-white/15 bg-[#091b2c]/80 p-7 shadow-xl hover:border-cyan-400/50 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Anchor size={26} />
                </div>
                <div className="mt-6 inline-block rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-300">
                  Core Company
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">Colombo Freight (Pvt) Ltd</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  The primary multimodal logistics company offering Ocean Freight (FCL/LCL), Air Freight, LCL Consolidation, Port Transshipment, and Island-wide Road Haulage.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <div>📍 29/11 Chapel Lane, Colombo 02</div>
                  <div>📞 011 230 4425</div>
                </div>
              </div>
            </Reveal>

            {/* Entity 2 */}
            <Reveal>
              <div className="h-full rounded-2xl border border-white/15 bg-[#091b2c]/80 p-7 shadow-xl hover:border-cyan-400/50 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <FileCheck size={26} />
                </div>
                <div className="mt-6 inline-block rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300">
                  Customs Specialist
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">Paragon Cargo Solutions</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  Our licensed customs brokerage entity. Handles direct Sri Lanka Customs clearance, HS tariff advisory, duty payment facilitation, and regulatory compliance.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <div>⚖️ 100% Customs Compliance</div>
                  <div>⚡ Fast-track port gate releases</div>
                </div>
              </div>
            </Reveal>

            {/* Entity 3 */}
            <Reveal>
              <div className="h-full rounded-2xl border border-white/15 bg-[#091b2c]/80 p-7 shadow-xl hover:border-cyan-400/50 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal-500/20 text-teal-400">
                  <TrendingUp size={26} />
                </div>
                <div className="mt-6 inline-block rounded-full bg-teal-500/15 px-3 py-1 text-xs font-bold text-teal-300">
                  Trading Affiliate
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">Suroor International</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  Our dedicated international commercial trading arm, enabling global product sourcing, procurement financing, and merchant trade coordination across key markets.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <div>🌐 Global Product Sourcing</div>
                  <div>🤝 Merchant Trade Support</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Terminals & Operational Reach */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <Eyebrow>OPERATIONAL PORTS & HUBS</Eyebrow>
            <h2 className="section-title text-white">
              Direct access across all key terminals in Sri Lanka.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              We maintain round-the-clock liaison with port and aviation authorities across the island to ensure seamless cargo handoffs.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Colombo Port - CICT & SAGT', type: 'Deep Sea Container Terminals', detail: 'Serving ultra-large container vessels (ULCVs) with high crane productivity.' },
              { name: 'Colombo Port - SLPA & CWIT', type: 'General & Expansion Terminals', detail: 'Bulk, breakbulk, container handling, and state-of-the-art western terminal.' },
              { name: 'Bandaranaike Int. Airport (BIA)', type: 'Aviation Cargo Village', detail: 'Dedicated air cargo pallets, cold-chain perishables, and express customs handling.' },
              { name: 'Hambantota Int. Port (HIPG)', type: 'Southern Maritime Hub', detail: 'RoRo automobile transshipment, bunker supply, and heavy industrial cargo.' },
              { name: 'Bonded CFS Warehousing', type: 'Colombo Central Logistics', detail: 'Secure container freight stations for LCL consolidation and de-consolidation.' },
              { name: 'Island-wide Haulage Network', type: 'Inter-district Road Fleet', detail: 'GPS-monitored container prime movers connecting factories directly to port gates.' }
            ].map((term) => (
              <Reveal key={term.name}>
                <div className="rounded-2xl border border-white/10 bg-[#091d30]/60 p-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">{term.type}</div>
                  <h3 className="mt-2 text-base font-bold text-white">{term.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{term.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="bg-[#030812] px-5 py-16 text-white lg:px-8">
        <Reveal className="mx-auto max-w-content rounded-3xl border border-white/15 bg-gradient-to-r from-[#07192d] to-[#04101e] p-8 sm:p-12 text-center">
          <Eyebrow>PARTNER WITH COLOMBO FREIGHT</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-white">
            Ready to streamline your cargo logistics?
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Get in touch with our operations team at Colombo 02 or submit your shipment parameters for a prompt quotation.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Contact Us <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                onNavigate('services')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              Explore Our Services
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
