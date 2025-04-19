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
      <main className="min-h-screen bg-kairos-dark text-kairos-light">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-kairos-dark/80 to-kairos-dark/40" />
            <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-kairos-light to-kairos-green">
                Building Tomorrow's Innovations
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                We partner with visionary founders to create exceptional companies
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="mailto:charlie@kairosventures.net" 
                  className="bg-kairos-green text-kairos-dark px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-opacity-90"
                >
                  Get Started
                </Link>
                <Link 
                  href="#portfolio" 
                  className="border border-kairos-green text-kairos-green px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-kairos-green hover:text-kairos-dark"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-kairos-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg bg-kairos-gray backdrop-blur-sm border border-kairos-green/10 hover:border-kairos-green/20 transition-all"
                >
                  <motion.h3 
                    className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-kairos-light to-kairos-green"
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-xl text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-kairos-dark">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-kairos-light to-kairos-green"
            >
              Our Portfolio
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startups.map((startup, index) => (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg bg-kairos-gray backdrop-blur-sm border border-kairos-green/10"
                >
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kairos-dark/90 z-10" />
                    <Image
                      src={startup.image}
                      alt={startup.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">{startup.name}</h3>
                      <p className="text-gray-300 mb-4">{startup.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {startup.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-kairos-green/10 rounded-full text-sm text-kairos-green">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={startup.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-kairos-green hover:text-kairos-light transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      startup.status === 'LIVE' ? 'bg-green-500/20 text-green-400' :
                      startup.status === 'BETA' ? 'bg-blue-500/20 text-blue-400' :
                      startup.status === 'COMING SOON' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {startup.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-kairos-dark">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-kairos-light to-kairos-green"
            >
              What We Do
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg bg-kairos-gray backdrop-blur-sm border border-kairos-green/10 hover:border-kairos-green/20 transition-all"
                >
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                  <p className="text-gray-400">
                    {service.name === "Early Stage Investment" && "Strategic capital and resources for promising startups"}
                    {service.name === "Strategic Planning" && "Comprehensive roadmap development and execution"}
                    {service.name === "Technical Development" && "Cutting-edge technology implementation and optimization"}
                    {service.name === "Marketing & Growth" && "Data-driven strategies for sustainable expansion"}
                    {service.name === "UI/UX Design" && "User-centered design for exceptional digital experiences"}
                    {service.name === "AI Integration" && "Intelligent solutions for enhanced business operations"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-kairos-dark relative overflow-hidden">
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
              backgroundImage: 'radial-gradient(circle at center, #00FF9D 1px, transparent 1px)',
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
              <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-kairos-light to-kairos-green">
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
                <a 
                  href="mailto:charlie@kairosventures.net"
                  className="inline-block bg-kairos-green text-kairos-dark px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-opacity-90"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 