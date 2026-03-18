'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('[data-reveal]')
          els.forEach((el, i) => { setTimeout(() => { el.classList.remove('opacity-0', 'translate-y-6') }, i * 120) })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('ashikceobd@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'GitHub', href: 'https://github.com/ashikaibdud', handle: '@ashikaibdud' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashik-ceo-43402419b', handle: 'Ashik CEO' },
    { label: 'Ashik IT Center', href: 'https://ashikit.xyz', handle: 'ashikit.xyz' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">04 — Contact</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-ink">Let's <span className="italic">Talk</span></h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p data-reveal className="opacity-0 translate-y-6 transition-all duration-700 font-body text-muted text-lg leading-relaxed mb-10">
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open. I respond within 24 hours.
            </p>
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-10">
              <p className="font-body text-xs tracking-widest uppercase text-muted mb-3">Email</p>
              <button onClick={copyEmail} className="group flex items-center gap-3 font-display text-2xl font-light text-ink hover:text-accent transition-colors duration-300">
                ashikceobd@gmail.com
                <span className="font-body text-xs tracking-widest uppercase border border-border text-muted px-2 py-1 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-10">
              <p className="font-body text-xs tracking-widest uppercase text-muted mb-3">Phone</p>
              <a href="tel:+8801910422200" className="font-display text-2xl font-light text-ink hover:text-accent transition-colors duration-300">+880 1910 422200</a>
            </div>
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
              <p className="font-body text-xs tracking-widest uppercase text-muted mb-3">Location</p>
              <p className="font-display text-2xl font-light text-ink">Dhanmondi, Dhaka–1205<br />Bangladesh</p>
            </div>
          </div>
          <div>
            <p data-reveal className="opacity-0 translate-y-6 transition-all duration-700 font-body text-xs tracking-widest uppercase text-muted mb-6">Find me online</p>
            <div className="border border-border">
              {links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" data-reveal className="opacity-0 translate-y-6 transition-all duration-700 flex items-center justify-between px-6 py-5 border-b border-border last:border-b-0 hover:bg-cream group">
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted mb-1">{link.label}</p>
                    <p className="font-display text-xl font-light text-ink group-hover:text-accent transition-colors duration-300">{link.handle}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-muted group-hover:text-accent transition-colors duration-300">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mt-8">
              <a href="mailto:ashikceobd@gmail.com" className="w-full font-body text-sm tracking-widest uppercase bg-ink text-cream px-8 py-4 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                Send me an email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
