import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import GlassPanel from './GlassPanel'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT US' }
  ]

  const handleLinkClick = (id: string) => {
    onNavigate(id)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4">
      <GlassPanel
        variant="strong"
        className={`nav-glass mx-auto flex max-w-content items-center justify-between px-5 transition-all lg:px-8 ${
          scrolled ? 'h-16 nav-glass-scrolled' : 'h-20'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center text-left transition hover:opacity-90"
        >
          <img
            src="/logos/logo-white.svg"
            alt="Colombo Freight"
            className="h-10 w-auto max-w-[190px] object-contain sm:h-12"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-4 py-2 text-xs lg:text-sm font-bold tracking-wider transition ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+94112304425"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-cyan-200 transition px-2"
          >
            <Phone size={14} className="text-cyan-300" />
            011 230 4425
          </a>
          <button
            onClick={() => handleLinkClick('contact')}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs lg:text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-cyan-500/20"
          >
            Request a Quote <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </GlassPanel>

      {/* Mobile Drawer */}
      {open && (
        <div className="mx-auto mt-2 max-w-content overflow-hidden rounded-2xl border border-white/15 bg-[#071322]/95 p-5 text-white shadow-2xl backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_6px_#67e8f9]" />}
                </button>
              )
            })}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="text-xs text-white/60 flex items-center gap-2">
                <Phone size={13} className="text-cyan-300" />
                <span>Hotline: 011 230 4425</span>
              </div>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600"
              >
                Request a Quote <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
