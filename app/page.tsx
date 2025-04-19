'use client';

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

const stats = [
  { number: "10+", label: "Active", sublabel: "Start-ups" },
  { number: "24/7", label: "Innovation", sublabel: "Always Building" },
  { number: "100%", label: "Success Rate", sublabel: "Project Completion" },
]

const startups = [
  {
    name: 'Strobe Media',
    description: 'A cutting-edge media agency delivering innovative digital solutions and creative strategies.',
    link: 'https://www.strobemedia.co.uk',
    image: '/strobe-media.jpg',
    status: 'LIVE',
    tech: ['Digital Marketing', 'Web Development', 'Content Creation']
  },
  {
    name: 'Clout Buster',
    description: 'Revolutionary AI-powered TikTok analyzer that predicts viral potential with advanced machine learning.',
    link: 'https://preview--clout-spark-analyze.lovable.app',
    image: '/clout-buster.jpg',
    status: 'BETA',
    tech: ['AI/ML', 'Social Media', 'Predictive Analytics']
  },
  {
    name: 'Hire Local',
    description: 'Connecting local talent with nearby opportunities. The future of community-based freelancing.',
    link: 'https://preview--hirelocal-freelance-ninja.lovable.app/freelancer/1',
    image: '/hire-local.jpg',
    status: 'COMING SOON',
    tech: ['Marketplace', 'Community', 'Local Economy']
  },
  {
    name: 'Share My Ride',
    description: 'Sustainable and social ride-sharing platform that puts community and safety first.',
    link: 'https://preview--ride-green-share-now.lovable.app',
    image: '/share-ride.jpg',
    status: 'IN DEVELOPMENT',
    tech: ['Transportation', 'Community', 'Sustainability']
  },
]

const services = [
  { name: "Early Stage Investment", icon: "💡" },
  { name: "Strategic Planning", icon: "🎯" },
  { name: "Technical Development", icon: "⚡" },
  { name: "Marketing & Growth", icon: "📈" },
  { name: "UI/UX Design", icon: "🎨" },
  { name: "AI Integration", icon: "🤖" }
]

const partners = [
  {
    name: 'Ava Labs',
    description: 'Building the Internet of Finance',
    link: 'https://www.avax.network',
    image: '/ava-labs.jpg'
  },
  {
    name: 'HOOPS Family Investments',
    description: 'Strategic Investment Solutions',
    link: 'https://www.hoopsfamily.com',
    image: '/hoops-family.jpg'
  },
  {
    name: 'Vaspese',
    description: 'Innovative Technology Solutions',
    link: 'https://www.vaspese.com',
    image: '/vaspese.jpg'
  },
  {
    name: 'Plutus',
    description: 'Financial Technology Innovation',
    link: 'https://www.plutus.com',
    image: '/plutus.jpg'
  },
  {
    name: 'SocialPlug',
    description: 'Social Media Solutions',
    link: 'https://www.socialplug.com',
    image: '/socialplug.jpg'
  },
  {
    name: 'Globol',
    description: 'Global Business Solutions',
    link: 'https://www.globol.com',
    image: '/globol.jpg'
  }
];

const techStack = [
  {
    name: 'React',
    image: '/react-logo.jpg'
  },
  {
    name: 'Next.js',
    image: '/nextjs-logo.jpg'
  },
  {
    name: 'TailwindCSS',
    image: '/tailwind-logo.jpg'
  },
  {
    name: 'TypeScript',
    image: '/typescript-logo.jpg'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kairos Ventures - Building Tomorrow's Innovations Today</title>
        <meta name="description" content="Kairos Ventures is a startup house investing in early-stage companies, transforming innovative ideas into market-leading businesses." />
        <meta name="keywords" content="venture capital, startups, innovation, technology, AI, investment, entrepreneurship" />
        <meta property="og:title" content="Kairos Ventures - Building Tomorrow's Innovations Today" />
        <meta property="og:description" content="Join us in building the next generation of groundbreaking startups." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen bg-black text-white">
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

        <main className="pt-20">
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Building Tomorrow's Innovations Today
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Transforming innovative ideas into market-leading businesses
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </section>

          <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {startups.map((startup, index) => (
                  <motion.div
                    key={startup.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                  >
                    <div className="relative h-64">
                      <Image
                        src={startup.image}
                        alt={startup.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold mb-2">{startup.name}</h3>
                        <p className="text-gray-300 mb-4">{startup.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {startup.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                            {startup.status}
                          </span>
                          <Link
                            href={startup.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                          >
                            Visit Site →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="py-20 bg-white/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="partners" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                  >
                    <div className="relative h-48">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-gray-300 mb-4">{partner.description}</p>
                      <Link
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
} 