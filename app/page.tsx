import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
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
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              Pioneering the future through strategic investments and innovation
            </p>
            <button className="btn-primary">
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black/90">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 heading-gradient">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Kairos Ventures, we identify and nurture groundbreaking innovations 
                that shape tomorrow's technology landscape. Our strategic investments 
                and hands-on approach help visionary founders transform their ideas 
                into market-leading companies.
              </p>
              <button className="btn-primary">
                Learn More
              </button>
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
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="section-padding bg-kairos-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 heading-gradient">
            Investment Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['AI & Machine Learning', 'Sustainable Technology', 'Digital Infrastructure'].map((focus, index) => (
              <div key={index} className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-kairos-green">
                  {focus}
                </h3>
                <p className="text-gray-300">
                  Strategic investments in cutting-edge technologies that drive innovation 
                  and create sustainable value for the future.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-black to-kairos-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 heading-gradient">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to explore opportunities with Kairos Ventures? 
            Let's shape the future together.
          </p>
          <button className="btn-primary">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
} 