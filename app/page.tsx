'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { number: "50", label: "Million+", sublabel: "Revenue Generated" },
  { number: "10", label: "Active", sublabel: "Start-ups" },
  { number: "100", label: "Million+", sublabel: "Content Views" },
]

const startups = [
  {
    name: 'Strobe Media',
    description: 'A cutting-edge media agency delivering innovative digital solutions.',
    link: 'https://www.strobemedia.co.uk',
    image: '/strobe-preview.jpg',
    status: 'LIVE'
  },
  {
    name: 'Clout Buster',
    description: 'AI-powered TikTok video analyzer that predicts viral potential using advanced machine learning.',
    link: 'https://www.strobemedia.co.uk/clout-buster',
    image: '/clout-preview.jpg',
    status: 'BETA'
  },
  {
    name: 'Hire Local',
    description: 'Revolutionary platform connecting local businesses with skilled freelancers in their area.',
    link: 'https://www.strobemedia.co.uk/hire-local',
    image: '/hire-preview.jpg',
    status: 'COMING SOON'
  },
  {
    name: 'Share My Ride',
    description: 'Next-generation ride-sharing platform fostering community connections.',
    link: 'https://www.strobemedia.co.uk/share-my-ride',
    image: '/ride-preview.jpg',
    status: 'IN DEVELOPMENT'
  },
]

const services = [
  "Early Stage Investment",
  "Strategic Planning",
  "Technical Development",
  "Marketing & Growth",
  "UI/UX Design",
  "AI Integration"
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-kairos-dark/50 to-black" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <Image
                src="/logo.svg"
                alt="Kairos Ventures Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-gradient">
              Kairos Ventures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Building the next generation of groundbreaking startups.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="mailto:charlie@kairosventures.net" 
                className="btn-primary"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-kairos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-kairos-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h3 
                  className="text-5xl font-bold text-kairos-green mb-2"
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 heading-gradient">
            What We Do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-2 h-2 bg-kairos-green rounded-full" />
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>
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
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-black/50"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <Image
                    src={startup.image}
                    alt={startup.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-kairos-green/20 text-kairos-green rounded-full">
                      {startup.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
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
                    className="inline-flex items-center text-kairos-green hover:opacity-80 transition-opacity"
                  >
                    View Project <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, #39FF14 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 heading-gradient">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always excited to hear about innovative ideas and ambitious projects.
              Let's build something extraordinary together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="mailto:charlie@kairosventures.net"
                className="btn-primary"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 