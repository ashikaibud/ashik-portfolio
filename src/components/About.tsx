'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('[data-reveal]')
          els.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-6')
            }, i * 120)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const facts = [
    { label: 'Location', value: 'Dhanmondi, Dhaka, Bangladesh' },
    { label: 'Education', value: 'B.Sc. CSE — Bangladesh Open University' },
    { label: 'Company', value: 'Founder & CEO, Ashik IT Center' },
    { label: 'Languages', value: 'Bengali · English · Hindi · Urdu' },
    { label: 'Email', value: 'ashikceobd@gmail.com' },
    { label: 'Available', value: 'Open to freelance & collaboration' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 max-w-6xl mx-auto">
      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">01 — About</p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-ink">Who I <span className="italic">Am</span></h2>
        <div className="w-12 h-px bg-accent mt-6" />
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <p data-reveal className="opacity-0 translate-y-6 transition-all duration-700 font-body text-ink leading-relaxed text-lg">
            I'm <strong className="font-medium">Asaduzzaman Nur</strong>, known as Ashik — an innovative software engineer, entrepreneur, and digital creator based in Dhaka, Bangladesh.
          </p>
          <p data-reveal className="opacity-0 translate-y-6 transition-all duration-700 font-body text-muted leading-relaxed">
            As the Founder &amp; CEO of <a href="https://ashikit.xyz" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4 hover:text-accent transition-colors">Ashik IT Center</a>, I specialize in building scalable software solutions, e-commerce platforms, and AI-based applications tailored for the Bangladeshi market.
          </p>
          <p data-reveal className="opacity-0 translate-y-6 transition-all duration-700 font-body text-muted leading-relaxed">
            Beyond coding, I bring a strong background in digital marketing, AI-powered ad campaigns, content creation, and video production — giving me a rare combination of technical depth and creative vision.
          </p>
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 pt-4">
            <a href="mailto:ashikceobd@gmail.com" className="font-body text-sm tracking-widest uppercase border-b border-ink text-ink pb-1 hover:border-accent hover:text-accent transition-all duration-300">
              Let's work together →
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-0 border border-border">
          {facts.map((fact) => (
            <div key={fact.label} data-reveal className="opacity-0 translate-y-6 transition-all duration-700 flex border-b border-border last:border-b-0">
              <div className="w-32 shrink-0 bg-surface px-4 py-4 border-r border-border">
                <p className="font-body text-xs tracking-widest uppercase text-muted">{fact.label}</p>
              </div>
              <div className="px-4 py-4 flex items-center">
                <p className="font-body text-sm text-ink">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
