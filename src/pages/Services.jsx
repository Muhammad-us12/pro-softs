import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ServicesSection from '../components/ServicesSection'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive web application development services to bring your ideas to life 
              and scale your business to new heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </div>
  )
}

export default Services
