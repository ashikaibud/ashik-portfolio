'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'UI/UX Design'] },
  { category: 'Backend', skills: ['PHP', 'Laravel', 'Node.js', 'Python', 'MySQL', 'API Integration', 'Payment Gateways'] },
  { category: 'Tools & Platforms', skills: ['WordPress', 'Git', 'GitHub', 'Canva', 'Adobe Premiere Pro', 'CapCut', 'Microsoft Office'] },
  { category: 'Marketing & AI', skills: ['SEO', 'Social Media Marketing', 'AI Content Tools', 'Campaign Optimization', 'Marketing Automation', 'Content Strategy'] },
  { category: 'Business', skills: ['Project Management', 'Agile / Scrum', 'Team Leadership', 'Strategic Planning', 'E-commerce', 'Client Relations'] },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('[data-reveal]')
          els.forEach((el, i) => { setTimeout(() => { el.classList.remove('opacity-0', 'translate-y-6') }, i * 80) })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">02 — Skills</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-ink">What I <span className="italic">Know</span></h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>
        <div className="space-y-0 border border-border">
          {skillGroups.map((group) => (
            <div key={group.category} data-reveal className="opacity-0 translate-y-6 transition-all duration-700 flex flex-col md:flex-row border-b border-border last:border-b-0">
              <div className="md:w-44 shrink-0 bg-cream px-6 py-6 border-b md:border-b-0 md:border-r border-border flex items-start">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted">{group.category}</p>
              </div>
              <div className="flex flex-wrap gap-2 px-6 py-6">
                {group.skills.map((skill) => (
                  <span key={skill} className="font-body text-sm text-ink bg-cream border border-border px-3 py-1.5 hover:border-accent hover:text-accent transition-all duration-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
