'use client';

import { Inter } from 'next/font/google';
import './globals.css'
import type { Metadata } from 'next'
import { motion } from 'framer-motion';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kairos Ventures - Building Tomorrow\'s Innovations Today',
  description: 'Kairos Ventures is a startup house investing in early-stage companies, transforming innovative ideas into market-leading businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Force new deployment */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Kairos Ventures
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#partners" className="text-gray-300 hover:text-white transition-colors">
                  Partners
                </Link>
                <Link href="/contact" className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </motion.header>
        {children}
      </body>
    </html>
  )
} 