import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-kairos-dark text-white`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-kairos-green font-bold text-xl">
                KAIROS
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/#portfolio" className="text-gray-300 hover:text-kairos-green transition-colors">
                  Portfolio
                </Link>
                <Link href="mailto:charlie@kairosventures.net" className="text-gray-300 hover:text-kairos-green transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-black py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kairos Ventures. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="mailto:charlie@kairosventures.net"
                  className="text-gray-400 hover:text-kairos-green transition-colors text-sm"
                >
                  charlie@kairosventures.net
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 