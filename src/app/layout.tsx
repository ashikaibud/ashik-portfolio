import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Asaduzzaman Nur (Ashik) — Full-Stack Software Engineer',
  description: 'Portfolio of MD Asaduzzaman Nur (Ashik), Founder & CEO of Ashik IT Center.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
