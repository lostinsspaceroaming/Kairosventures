import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kairos Ventures - Empowering Early-Stage Innovation',
  description: 'Kairos Ventures is a startup house investing in early-stage companies, transforming innovative ideas into market-leading businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
} 