'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('[data-animate]')
    if (!elements) return
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove('opacity-0')
        el.classList.add('animate-fade-up')
      }, i * 150)
    })
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p data-animate className="opacity-0 text-xs font-body tracking-[0.3em] uppercase text-accent mb-6">
            Frontend Developer · Dhaka, Bangladesh
          </p>
          <h1 data-animate className="opacity-0 font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-ink mb-8">
            MD Asad-<br />uzzaman<br /><span className="italic text-accent">Nur</span>
          </h1>
          <p data-animate className="opacity-0 font-body text-muted text-lg leading-relaxed max-w-md mb-10">
            I build scalable web solutions and digital products. Founder &amp; CEO of{' '}
            <span className="text-ink font-medium">Ashik IT Center</span> — turning ideas into profitable ventures through clean code and strategic thinking.
          </p>
          <div data-animate className="opacity-0 flex flex-wrap gap-4">
            <a href="#projects" className="font-body text-sm tracking-widest uppercase bg-ink text-cream px-8 py-3 hover:bg-accent transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="font-body text-sm tracking-widest uppercase border border-ink text-ink px-8 py-3 hover:bg-ink hover:text-cream transition-all duration-300">
              Get in Touch
            </a>
          </div>
          <div data-animate className="opacity-0 flex items-center gap-6 mt-12">
            <a href="https://github.com/ashikaibdud" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors duration-300 text-sm font-body tracking-wider">GitHub</a>
            <span className="w-4 h-px bg-border" />
            <a href="https://www.linkedin.com/in/ashik-ceo-43402419b" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors duration-300 text-sm font-body tracking-wider">LinkedIn</a>
            <span className="w-4 h-px bg-border" />
            <a href="https://ashikit.xyz" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors duration-300 text-sm font-body tracking-wider">Ashik IT</a>
          </div>
        </div>
        <div data-animate className="opacity-0 hidden md:flex justify-end">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-64 h-64 border border-border" />
            <div className="relative w-64 h-64 bg-surface flex flex-col justify-between p-8 border border-border">
              <div>
                <p className="font-display text-5xl font-light text-ink">3+</p>
                <p className="font-body text-xs tracking-widest uppercase text-muted mt-1">Years Experience</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p className="font-display text-5xl font-light text-ink">8+</p>
                <p className="font-body text-xs tracking-widest uppercase text-muted mt-1">Live Projects</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p className="font-display text-5xl font-light text-accent">∞</p>
                <p className="font-body text-xs tracking-widest uppercase text-muted mt-1">Ideas to Build</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase text-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
