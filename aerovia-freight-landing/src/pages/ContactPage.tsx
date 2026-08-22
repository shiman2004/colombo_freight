import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Building, 
  CheckCircle2,
  Send,
  HelpCircle
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import { ServiceItem } from '../data/content'

interface ContactPageProps {
  selectedService?: ServiceItem | null
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

export default function ContactPage({ selectedService }: ContactPageProps) {
  return (
    <div className="pt-28 sm:pt-32">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(74,141,255,.24),transparent_40%)]" />
        <div className="relative mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <MessageSquare size={14} className="text-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                Get In Touch • Colombo Office
              </span>
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Colombo Freight</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Connect with our logistics specialists at Colombo 02 for shipment bookings, freight rate quotes, customs guidance, and cargo consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Main Contact Grid (Quote Form + Office Info) */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            {/* Form Column */}
            <Reveal>
              <div className="rounded-3xl border border-white/15 bg-[#081a2c]/85 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request a Freight Quote</h2>
                    <p className="mt-1 text-xs text-white/60">
                      Submit your cargo details below for a prompt, tailored rate estimate.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/30">
                      Fast Response
                    </span>
                  </div>
                </div>

                <QuoteForm selectedService={selectedService || null} />
              </div>
            </Reveal>

            {/* Direct Contact Details Column */}
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-3xl border border-white/15 bg-[#091d30]/80 p-7 shadow-xl">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                    HEADQUARTERS
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">Colombo Freight (Pvt) Ltd</h3>

                  <div className="mt-6 space-y-4 text-sm text-white/80">
                    <div className="flex items-start gap-3.5">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Office Address</div>
                        <div className="text-xs text-white/60 mt-0.5">29/11 Chapel Lane, Colombo 02, Sri Lanka</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Telephone / Hotline</div>
                        <a href="tel:+94112304425" className="text-xs text-cyan-300 hover:underline block mt-0.5">
                          011 230 4425
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Official Email</div>
                        <a href="mailto:info@cmb-freight.com" className="text-xs text-cyan-300 hover:underline block mt-0.5">
                          info@cmb-freight.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 shrink-0">
                        <Clock size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Operating Hours</div>
                        <div className="text-xs text-white/60 mt-0.5">
                          Monday – Friday: 8:30 AM – 5:30 PM <br />
                          Saturday: 9:00 AM – 1:00 PM <br />
                          <span className="text-cyan-300">24/7 Operations for Port Dispatches</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Group Affiliates Card */}
              <Reveal>
                <div className="rounded-3xl border border-white/15 bg-[#091d30]/80 p-7 shadow-xl">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                    AFFILIATED SERVICES
                  </span>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[.03] p-3.5">
                      <div className="text-sm font-bold text-white">Paragon Cargo Solutions</div>
                      <div className="text-xs text-white/50">Customs Brokerage, Tariff & Port Clearance</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[.03] p-3.5">
                      <div className="text-sm font-bold text-white">Suroor International</div>
                      <div className="text-xs text-white/50">International Commercial Trading & Sourcing</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Quick direct call banner */}
              <Reveal>
                <a
                  href="tel:+94112304425"
                  className="flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/60 to-blue-950/60 p-5 text-white transition hover:border-cyan-300 shadow-lg"
                >
                  <div>
                    <div className="text-xs font-bold text-cyan-300 uppercase">Immediate Assistance</div>
                    <div className="text-base font-bold text-white mt-0.5">Call 011 230 4425</div>
                  </div>
                  <ArrowRight size={20} className="text-cyan-300" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location / Colombo Map Card */}
      <section className="bg-ink pb-20 text-white">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#091b2c] p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <Eyebrow>OUR LOCATION</Eyebrow>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl text-white">
                    Colombo 02 Commercial Hub
                  </h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    Strategically positioned minutes from the Port of Colombo container terminals, enabling rapid customs documentation sign-offs, vessel line coordination, and fast gate release.
                  </p>
                  <div className="mt-6 space-y-2 text-xs text-white/75">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-cyan-300" />
                      <span>5 Minutes to Port of Colombo Main Gates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-cyan-300" />
                      <span>Direct access to Port Access Elevated Highway</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-cyan-300" />
                      <span>Close liaison with Sri Lanka Customs Headquarters</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 flex flex-col items-center justify-center text-center min-h-[220px]">
                  <MapPin size={38} className="text-cyan-300 animate-bounce" />
                  <div className="mt-3 font-bold text-white text-base">Colombo Freight (Pvt) Ltd</div>
                  <div className="text-xs text-white/60 mt-1">29/11 Chapel Lane, Colombo 02, Sri Lanka</div>
                  <a
                    href="https://maps.google.com/?q=Colombo+02+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-bold text-cyan-200 hover:bg-white/15 transition"
                  >
                    Open in Google Maps <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
