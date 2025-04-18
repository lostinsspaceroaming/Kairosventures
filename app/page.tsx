'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const startups = [
  {
    name: 'Strobe Media',
    description: 'A cutting-edge media agency delivering innovative digital solutions.',
    link: 'https://www.strobemedia.co.uk',
  },
  {
    name: 'Clout Buster',
    description: 'AI-powered TikTok video analyzer that predicts viral potential.',
    link: '/clout-buster-demo',
  },
  {
    name: 'Hire Local',
    description: 'Platform connecting businesses with skilled local freelancers.',
    link: '/hire-local-demo',
  },
  {
    name: 'Share My Ride',
    description: 'Innovative ride-sharing platform fostering community connections.',
    link: '/share-my-ride-demo',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-gradient">
              Kairos Ventures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Empowering early-stage companies to transform innovative ideas into market-leading businesses.
            </p>
            <Link 
              href="mailto:charlie@kairosventures.net" 
              className="btn-primary"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-kairos-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 heading-gradient">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-kairos-green">
                  {startup.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {startup.description}
                </p>
                <Link 
                  href={startup.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-kairos-green hover:opacity-80 transition-opacity"
                >
                  View Demo →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 heading-gradient">
            Ready to Transform Your Idea?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us at{' '}
            <a 
              href="mailto:charlie@kairosventures.net"
              className="text-kairos-green hover:opacity-80 transition-opacity"
            >
              charlie@kairosventures.net
            </a>
          </p>
        </div>
      </section>
    </main>
  )
} 