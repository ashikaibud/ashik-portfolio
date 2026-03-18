'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl font-light tracking-wide text-ink hover:text-accent transition-colors duration-300">
          Ashik<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-body text-muted hover:text-ink tracking-widest uppercase transition-colors duration-300 relative group">
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="mailto:ashikceobd@gmail.com" className="text-sm font-body tracking-widest uppercase border border-ink text-ink px-5 py-2 hover:bg-ink hover:text-cream transition-all duration-300">
            Hire Me
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cream/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm font-body text-muted hover:text-ink tracking-widest uppercase transition-colors duration-300">
              {link}
            </a>
          ))}
          <a href="mailto:ashikceobd@gmail.com" className="text-sm font-body tracking-widest uppercase border border-ink text-ink px-5 py-2 text-center hover:bg-ink hover:text-cream transition-all duration-300">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
