import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import GlassPanel from './GlassPanel'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>30)
    onScroll(); window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])
  const links=['Home','Services','Industries','About Us','Contact']
  return <header className="fixed inset-x-0 top-3 z-50 px-3">
    <GlassPanel variant="strong" className={`nav-glass mx-auto flex max-w-content items-center justify-between px-5 transition-all lg:px-8 ${scrolled?'h-16 nav-glass-scrolled':'h-20'}`}>
      <a href="#" className="flex items-center">
        <img src="/logo-white.svg" alt="Colombo Freight" className="h-10 w-auto max-w-[200px] object-contain sm:h-12" />
      </a>
      <nav className="hidden xl:flex items-center gap-7 text-sm text-white/75">
        {links.map(x=><a key={x} href={`#${x.toLowerCase().replace(/ /g,'-')}`} className="hover:text-white transition">{x}</a>)}
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <a href="#contact" className="text-sm font-semibold text-white/80 px-4 py-3">Contact Us</a>
        <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition">Request a Quote <ArrowUpRight size={16}/></a>
      </div>
      <button aria-label="Toggle navigation" className="md:hidden text-white" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </GlassPanel>
    {open && <GlassPanel variant="strong" className="nav-drawer mx-auto mt-2 max-w-content px-5 py-6 md:hidden">
      <div className="flex flex-col gap-4 text-white/80">{links.map(x=><a key={x} onClick={()=>setOpen(false)} href={`#${x.toLowerCase().replace(/ /g,'-')}`}>{x}</a>)}</div>
      <a href="#quote" className="mt-6 block rounded-xl bg-brand px-5 py-3 text-center font-semibold text-white">Request a Quote</a>
    </GlassPanel>}
  </header>
}
