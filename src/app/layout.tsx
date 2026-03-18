import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashik — Frontend Developer & Software Engineer',
  description: 'Portfolio of MD Asaduzzaman Nur (Ashik)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
