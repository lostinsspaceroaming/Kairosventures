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
    link: '/clout-buster-demo',
    image: '/clout-buster.jpg',
    status: 'BETA',
    tech: ['AI/ML', 'Social Media', 'Predictive Analytics']
  },
  {
    name: 'Hire Local',
    description: 'Connecting local talent with nearby opportunities. The future of community-based freelancing.',
    link: '/hire-local-demo',
    image: '/hire-local.jpg',
    status: 'COMING SOON',
    tech: ['Marketplace', 'Community', 'Local Economy']
  },
  {
    name: 'Share My Ride',
    description: 'Sustainable and social ride-sharing platform that puts community and safety first.',
    link: '/share-my-ride-demo',
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
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-6"
            >
              Innovate. Partner. Shape the Future.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Transforming Ideas Into Exceptional Results
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section with enhanced animations */}
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
                  className="text-center p-8 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300"
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

        {/* Enhanced Services Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 heading-gradient">
              What We Do
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-gray-300">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Portfolio Section */}
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
                  <div className="relative h-64 w-full">
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
                    <p className="text-gray-300 mb-4">
                      {startup.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {startup.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-kairos-green/10 text-kairos-green rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
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

        {/* Partners Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Strategic Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ava Labs Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.avax.network" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/ava-labs.jpg"
                        alt="Ava Labs"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ava Labs</h3>
                    <p className="text-gray-400 text-center">Building the Internet of Finance</p>
                  </div>
                </Link>
              </motion.div>

              {/* HOOPS Family Investments Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.hoopsfamily.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/hoops-family.jpg"
                        alt="HOOPS Family Investments"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">HOOPS Family Investments</h3>
                    <p className="text-gray-400 text-center">Strategic Investment Solutions</p>
                  </div>
                </Link>
              </motion.div>

              {/* Vaspese Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.vaspese.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/vaspese.jpg"
                        alt="Vaspese"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Vaspese</h3>
                    <p className="text-gray-400 text-center">Innovative Technology Solutions</p>
                  </div>
                </Link>
              </motion.div>

              {/* Plutus Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.plutus.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/plutus.jpg"
                        alt="Plutus"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Plutus</h3>
                    <p className="text-gray-400 text-center">Financial Technology Innovation</p>
                  </div>
                </Link>
              </motion.div>

              {/* SocialPlug Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.socialplug.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/socialplug.jpg"
                        alt="SocialPlug"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">SocialPlug</h3>
                    <p className="text-gray-400 text-center">Social Media Solutions</p>
                  </div>
                </Link>
              </motion.div>

              {/* Globol Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Link href="https://www.globol.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src="/globol.jpg"
                        alt="Globol"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Globol</h3>
                    <p className="text-gray-400 text-center">Global Business Solutions</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <Image
                  src="/react-logo.jpg"
                  alt="React"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <span className="text-lg font-semibold">React</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <Image
                  src="/nextjs-logo.jpg"
                  alt="Next.js"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <span className="text-lg font-semibold">Next.js</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <Image
                  src="/tailwind-logo.jpg"
                  alt="TailwindCSS"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <span className="text-lg font-semibold">TailwindCSS</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <Image
                  src="/typescript-logo.jpg"
                  alt="TypeScript"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <span className="text-lg font-semibold">TypeScript</span>
              </motion.div>
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
    </>
  )
} 