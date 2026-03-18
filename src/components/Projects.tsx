'use client'
import { useEffect, useRef } from 'react'

const projects = [
  { number: '01', name: 'Nagad Shopping', url: 'https://nagadshopping.com', category: 'E-Commerce Platform', description: 'A comprehensive e-commerce platform with secure payment integration built for the Bangladeshi market. Features product management, cart, and seamless checkout.', tech: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'], status: 'Live' },
  { number: '02', name: 'Bluekash', url: 'https://bluekash.com', category: 'Financial Services', description: 'A financial service platform offering seamless online transactions and digital wallet features tailored for Bangladesh users.', tech: ['PHP', 'Laravel', 'MySQL', 'API Integration'], status: 'Live' },
  { number: '03', name: 'Saddam Store', url: 'https://saddamstore.com', category: 'Retail E-Commerce', description: 'A retail e-commerce site focused on scalability and performance, built to handle high traffic and large product catalogs.', tech: ['WordPress', 'WooCommerce', 'MySQL', 'SEO'], status: 'Live' },
  { number: '04', name: '35 Taka Course', url: 'https://35takacource.xyz', category: 'EdTech Platform', description: 'An affordable online course platform with secure payment options, making quality education accessible for everyone in Bangladesh.', tech: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'], status: 'Live' },
  { number: '05', name: 'Escrow BD', url: 'https://escrowbd.com', category: 'Fintech / Security', description: 'A secure escrow service for online transactions in Bangladesh, protecting both buyers and sellers during high-value exchanges.', tech: ['PHP', 'MySQL', 'Payment Gateway', 'Security'], status: 'Live' },
  { number: '06', name: 'CJ Computer BD', url: 'https://cjcomputerbd.com', category: 'Tech E-Commerce', description: 'A technology-focused e-commerce site for computer hardware and accessories with a clean product catalog and order management.', tech: ['PHP', 'MySQL', 'UI/UX', 'E-Commerce'], status: 'Live' },
  { number: '07', name: 'BD Bank', url: '#', category: 'Payment Gateway', description: 'A robust payment gateway software currently in development — designed to power local financial transactions with enterprise-grade security.', tech: ['Node.js', 'React', 'MySQL', 'API'], status: 'In Progress' },
  { number: '08', name: 'AI Marketplace Tool', url: '#', category: 'AI Software', description: 'An AI-based solution built specifically for the Bangladeshi marketplace — automating content creation and marketing campaigns.', tech: ['Python', 'AI/ML', 'API Integration', 'Automation'], status: 'Built' },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('[data-reveal]')
          els.forEach((el, i) => { setTimeout(() => { el.classList.remove('opacity-0', 'translate-y-6') }, i * 100) })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 max-w-6xl mx-auto">
      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">03 — Projects</p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-ink">What I've <span className="italic">Built</span></h2>
        <div className="w-12 h-px bg-accent mt-6" />
      </div>
      <div className="border border-border">
        {projects.map((project) => (
          <div key={project.name} data-reveal className="opacity-0 translate-y-6 transition-all duration-700 group border-b border-border last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-center gap-4 px-6 py-6 hover:bg-surface transition-colors duration-300">
              <span className="font-display text-3xl font-light text-border group-hover:text-accent transition-colors duration-300 md:w-14 shrink-0">{project.number}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl font-light text-ink group-hover:text-accent transition-colors duration-300">{project.name}</h3>
                  <span className="font-body text-xs tracking-widest uppercase text-muted border border-border px-2 py-0.5">{project.category}</span>
                  <span className={`font-body text-xs tracking-widest uppercase px-2 py-0.5 ${project.status === 'Live' ? 'bg-ink text-cream' : project.status === 'In Progress' ? 'bg-accent text-cream' : 'bg-surface text-muted border border-border'}`}>{project.status}</span>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (<span key={t} className="font-body text-xs text-muted border border-border px-2 py-0.5">{t}</span>))}
                </div>
              </div>
              {project.url !== '#' && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-muted hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mt-10 text-center">
        <a href="https://github.com/ashikaibdud" target="_blank" rel="noopener noreferrer" className="font-body text-sm tracking-widest uppercase border border-ink text-ink px-8 py-3 inline-block hover:bg-ink hover:text-cream transition-all duration-300">
          View GitHub Profile →
        </a>
      </div>
    </section>
  )
}
