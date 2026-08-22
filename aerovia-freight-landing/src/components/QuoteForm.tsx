import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import GlassPanel from './GlassPanel'
import { ServiceItem } from '../data/content'

interface QuoteFormProps {
  selectedService?: ServiceItem | null
}

export default function QuoteForm({ selectedService }: QuoteFormProps){
  const [mode, setMode] = useState<'Ocean' | 'Air' | 'Road'>('Ocean')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (selectedService?.mode) {
      setMode(selectedService.mode)
    }
  }, [selectedService])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return <GlassPanel id="quote" variant="strong" className="quote-glass rounded-3xl p-6 text-white md:p-8 border border-white/15 shadow-2xl">
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold tracking-[.18em] text-cyan-300 uppercase">Colombo Freight Solutions</p>
        {selectedService && (
          <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300 border border-cyan-400/30">
            {selectedService.fullTitle}
          </span>
        )}
      </div>
      <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight">Request a Freight Quote</h2>
      <p className="mt-1 text-sm text-slate-300">Fast quotes with transparent pricing and custom routing.</p>
    </div>

    {submitted ? (
      <div className="rounded-2xl border border-teal-400/30 bg-teal-950/40 p-6 text-center backdrop-blur-md">
        <CheckCircle className="mx-auto h-12 w-12 text-teal-400" />
        <h3 className="mt-3 text-lg font-bold text-white">Quote Request Received!</h3>
        <p className="mt-1 text-sm text-teal-200">Our Colombo operations desk will get back to you within 2 business hours.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="field">
            <span>ORIGIN PORT / CITY</span>
            <input required placeholder="e.g. Colombo (CMB)" />
          </label>
          <label className="field">
            <span>DESTINATION PORT / CITY</span>
            <input required placeholder="e.g. Rotterdam / Singapore / Dubai" />
          </label>
          <label className="field">
            <span>SHIPMENT TYPE</span>
            <select defaultValue={selectedService ? selectedService.fullTitle : "FCL Container"}>
              <option>FCL (Full Container Load)</option>
              <option>LCL (Less Container Load / Consolidation)</option>
              <option>Air Express Cargo</option>
              <option>Island-wide Haulage</option>
              <option>Customs Clearance & Brokerage</option>
              <option>Transshipment / Entrepôt</option>
              <option>Project & Out-of-Gauge Cargo</option>
            </select>
          </label>
          <label className="field">
            <span>ESTIMATED WEIGHT / VOLUME</span>
            <input placeholder="e.g. 2,400 kg / 20ft Container" />
          </label>
        </div>

        <div className="pt-2">
          <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">Selected Transport Mode</span>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(['Ocean', 'Air', 'Road'] as const).map(x => (
              <button
                type="button"
                key={x}
                onClick={() => setMode(x)}
                className={`mode-control flex items-center justify-center py-2.5 font-bold transition-all ${
                  mode === x
                    ? 'border-cyan-400 bg-cyan-500/25 text-white shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {x === 'Ocean' ? '🚢 Ocean' : x === 'Air' ? '✈️ Air' : '🚛 Road'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 pt-1">
          <label className="field">
            <span>CONTACT EMAIL</span>
            <input type="email" required placeholder="you@company.com" />
          </label>
          <label className="field">
            <span>PHONE / WHATSAPP</span>
            <input type="tel" placeholder="+94 11 230 4425" />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition duration-300"
        >
          Submit Quote Request <ArrowRight size={17} />
        </button>
      </form>
    )}
  </GlassPanel>
}

