export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl font-light text-ink">Ashik<span className="text-accent">.</span></p>
        <p className="font-body text-xs text-muted tracking-wider text-center">
          © {new Date().getFullYear()} MD Asaduzzaman Nur (Ashik). All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/ashikaibdud" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/ashik-ceo-43402419b" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
