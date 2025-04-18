import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const startups = [
  {
    name: 'Strobe Media',
    description: 'A cutting-edge media agency delivering innovative digital solutions and creative content strategies.',
    link: 'https://www.strobemedia.co.uk',
    image: '/strobe.svg'
  },
  {
    name: 'Clout Buster',
    description: 'AI-powered TikTok video analyzer that predicts viral potential, helping creators optimize their content for maximum reach.',
    link: '/clout-buster-demo',
    image: '/clout.svg'
  },
  {
    name: 'Hire Local',
    description: 'Revolutionary platform connecting businesses with skilled local freelancers, making talent acquisition seamless and efficient.',
    link: '/hire-local-demo',
    image: '/hire.svg'
  },
  {
    name: 'Share My Ride',
    description: 'Innovative ride-sharing platform fostering community connections while making transportation more sustainable and accessible.',
    link: '/share-my-ride-demo',
    image: '/ride.svg'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <Image
                src="/logo.svg"
                alt="Kairos Ventures Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-gradient">
              Kairos Ventures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Empowering early-stage companies to transform innovative ideas into market-leading businesses.
            </p>
            <Link href="mailto:charlie@kairosventures.net" className="btn-primary">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black/90">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 heading-gradient">
                Welcome to Innovation
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Kairos Ventures, we're more than just investors – we're partners in innovation. 
                Our startup house specializes in identifying and nurturing early-stage companies 
                with groundbreaking ideas and transformative potential.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We're always open to new projects and ideas. Whether you're at the concept stage 
                or ready to scale, we provide the resources, expertise, and network to help you succeed.
              </p>
              <Link href="mailto:charlie@kairosventures.net" className="btn-primary">
                Share Your Vision
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-kairos-green/10 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 relative animate-pulse">
                  <Image
                    src="/logo.svg"
                    alt="Kairos Symbol"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-kairos-dark">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 heading-gradient"
          >
            Our Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
              >
                <div className="mb-6 relative h-12">
                  <Image
                    src={startup.image}
                    alt={`${startup.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
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
                  View Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-black to-kairos-dark">
        <div className="container mx-auto text-center">
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
              We're always excited to hear about new projects and innovations. 
              Reach out to discuss how we can help bring your vision to life.
            </p>
            <Link 
              href="mailto:charlie@kairosventures.net" 
              className="btn-primary"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 