import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import { ServiceItem } from './data/content'
import { MessageCircle } from 'lucide-react'

export type PageId = 'home' | 'about' | 'services' | 'contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<ServiceItem | null>(null)

  // Listen to hash changes for direct linking & browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['home', 'about', 'services', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId)
      }
    }

    // Initial check on load
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page: string) => {
    const validPage = (['home', 'about', 'services', 'contact'].includes(page) ? page : 'home') as PageId
    setCurrentPage(validPage)
    window.location.hash = validPage
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setSelectedServiceForQuote(service)
  }

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* 1. Global Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 2. Main Page Content View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage selectedService={selectedServiceForQuote} />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 4. Floating WhatsApp / Support Quick Button */}
      <a
        href="https://wa.me/94112304425"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Colombo Freight on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-2xl border border-white/20 bg-emerald-600/90 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:shadow-emerald-500/30"
        style={{ width: '52px', height: '52px' }}
      >
        <MessageCircle size={24} />
      </a>
    </div>
  )
}
