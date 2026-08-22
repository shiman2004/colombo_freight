import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { services, ServiceItem } from '../data/content'

interface ServicesCarouselProps {
  onSelectService?: (service: ServiceItem) => void
}

export default function ServicesCarousel({ onSelectService }: ServicesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCardId, setActiveCardId] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Drag to scroll state
  const isDraggingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftStartRef = useRef(0)
  const dragDistanceRef = useRef(0)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    
    setCanScrollLeft(scrollLeft > 15)
    setCanScrollRight(scrollLeft < maxScroll - 15)
    
    const progress = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0
    setScrollProgress(progress)

    // Calculate approximate active card index
    const firstCard = el.querySelector('[data-service-card]') as HTMLElement | null
    if (firstCard) {
      const cardStep = firstCard.offsetWidth + 24 // 24px gap
      const index = Math.round(scrollLeft / cardStep)
      setActiveIndex(Math.min(Math.max(index, 0), services.length - 1))
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return

    const firstCard = el.querySelector('[data-service-card]') as HTMLElement | null
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 354
    const targetScroll = direction === 'left' ? el.scrollLeft - cardStep : el.scrollLeft + cardStep

    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const firstCard = el.querySelector('[data-service-card]') as HTMLElement | null
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 354
    el.scrollTo({
      left: index * cardStep,
      behavior: 'smooth'
    })
  }

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeftStartRef.current = scrollRef.current.scrollLeft
    dragDistanceRef.current = 0
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5 // Multiplier for smooth drag feel
    dragDistanceRef.current = Math.abs(x - startXRef.current)
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk
  }

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false
      setTimeout(() => {
        setIsDragging(false)
        dragDistanceRef.current = 0
      }, 50)
    }
  }

  const handleEnquire = (service: ServiceItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    // Prevent accidental click if user was dragging
    if (dragDistanceRef.current > 6) return

    if (onSelectService) {
      onSelectService(service)
    }
    const quoteElement = document.getElementById('quote')
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCardClick = (s: ServiceItem) => {
    if (dragDistanceRef.current > 6) return
    setActiveCardId(activeCardId === s.id ? null : s.id)
  }

  return (
    <section id="services" className="relative overflow-hidden bg-[#05111e] py-20 sm:py-28 select-none">
      {/* Background ambient lighting and blueprint grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,110,245,.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header with Certified Badge and Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                <ShieldCheck size={14} className="text-cyan-400" />
                <span>Certified Logistics Network</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Colombo • Sri Lanka
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized Freight & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Logistics Services</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore our core multi-modal freight operations designed for efficiency, compliance, and total supply-chain reliability.
            </p>
          </div>

          {/* Navigation Arrows & Counter */}
          <div className="hidden items-center gap-4 sm:flex">
            <div className="text-xs font-bold text-slate-400 tracking-wider">
              <span className="text-cyan-300 font-mono text-sm">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-1 text-slate-600">/</span>
              <span className="font-mono text-sm">{String(services.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous service"
                className={`grid h-12 w-12 place-items-center rounded-xl border transition-all duration-300 ${
                  canScrollLeft
                    ? 'border-white/20 bg-white/10 text-white hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                    : 'cursor-not-allowed border-white/5 bg-white/[.02] text-white/20 opacity-50'
                } backdrop-blur-md`}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next service"
                className={`grid h-12 w-12 place-items-center rounded-xl border transition-all duration-300 ${
                  canScrollRight
                    ? 'border-white/20 bg-white/10 text-white hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                    : 'cursor-not-allowed border-white/5 bg-white/[.02] text-white/20 opacity-50'
                } backdrop-blur-md`}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth cursor-grab select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? 'cursor-grabbing scroll-auto' : ''
            }`}
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: isDragging ? 'none' : 'x proximity',
            }}
          >
            {services.map((s, index) => {
              const isHovered = activeCardId === s.id
              return (
                <div
                  key={s.id}
                  data-service-card
                  onMouseEnter={() => !isDragging && setActiveCardId(s.id)}
                  onMouseLeave={() => setActiveCardId(null)}
                  onClick={() => handleCardClick(s)}
                  style={{ scrollSnapAlign: 'start' }}
                  className={`group relative h-[490px] w-[280px] sm:w-[310px] md:h-[530px] md:w-[330px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ease-out bg-[#071322] shadow-2xl ${
                    isHovered
                      ? '-translate-y-2 border-cyan-400/80 shadow-[0_20px_50px_rgba(20,110,245,0.35)] ring-1 ring-cyan-400/30'
                      : 'border-white/15 hover:border-cyan-400/40 hover:-translate-y-1'
                  }`}
                >
                  {/* Photo Layer with Smooth Zoom */}
                  <img
                    src={s.image}
                    alt={s.fullTitle}
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out will-change-transform ${
                      isHovered ? 'scale-105 filter brightness-90' : 'scale-100 group-hover:scale-105'
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ease-out ${
                      isHovered
                        ? 'from-[#040e1b]/95 via-[#040e1b]/80 via-45% to-[#040e1b]/20 opacity-100'
                        : 'from-[#040e1b] via-[#040e1b]/70 via-35% to-transparent opacity-90'
                    }`}
                  />
                  
                  {/* Subtle Blueprint Grid Pattern on Card */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

                  {/* Top Badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {s.badge}
                    </span>
                  </div>

                  {/* Top Right Counter Indicator */}
                  <div className="absolute right-4 top-4 z-10">
                    <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-300 backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 transition-all duration-500 ease-out">
                    {/* Title */}
                    <div className="mb-3 transition-transform duration-300">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                        {s.titlePrimary}
                      </h3>
                      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                        {s.titleSecondary}
                      </p>
                    </div>

                    {/* Smooth Expandable Content: Description & Features */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isHovered ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 mb-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-200 line-clamp-3">
                          {s.description}
                        </p>

                        {s.features && s.features.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/15">
                            {s.features.map((feat) => (
                              <span
                                key={feat}
                                className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-medium text-cyan-200 backdrop-blur-sm"
                              >
                                <CheckCircle2 size={10} className="text-teal-300" />
                                {feat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={(e) => handleEnquire(s, e)}
                      className={`group/btn flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-lg ${
                        isHovered
                          ? 'bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:bg-cyan-300'
                          : 'border border-white/20 bg-black/60 text-white backdrop-blur-md hover:border-cyan-300 hover:bg-cyan-500 hover:text-slate-950'
                      }`}
                    >
                      <span>Enquire Now</span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : 'group-hover/btn:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Smooth Scroll Progress Bar & Dots */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            {/* Interactive Progress Track */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div 
                className="relative h-1.5 w-full sm:w-48 rounded-full bg-white/10 overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const clickX = e.clientX - rect.left
                  const ratio = Math.min(Math.max(clickX / rect.width, 0), 1)
                  if (scrollRef.current) {
                    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
                    scrollRef.current.scrollTo({
                      left: ratio * maxScroll,
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 transition-all duration-150 ease-out"
                  style={{ width: `${Math.max(scrollProgress * 100, 15)}%` }}
                />
              </div>

              {/* Dots for quick jumping */}
              <div className="flex items-center gap-1.5">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Touch / Drag hint */}
            <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-3 text-xs text-slate-400">
              <span className="text-[11px] tracking-wide text-slate-400 flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping mr-1" />
                Drag or use arrows to navigate
              </span>
              <div className="flex gap-2 sm:hidden">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-white disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-white disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

