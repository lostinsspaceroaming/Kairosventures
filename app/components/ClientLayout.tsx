'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
} 