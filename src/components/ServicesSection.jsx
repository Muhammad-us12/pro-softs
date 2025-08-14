import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Headphones,
  Zap,
  Users,
  ArrowRight
} from 'lucide-react'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Code2,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern technologies like React, Node.js, and Laravel.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure Architecture']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Robust database architecture and optimization for high-performance applications.',
      features: ['Performance Tuning', 'Data Security', 'Backup Systems', 'Scalable Design']
    },                                                                                  
    {
      icon: Headphones,
      title: '24/7 Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your systems running smoothly.',
      features: ['Round-the-clock Support', 'Regular Updates', 'Performance Monitoring', 'Bug Fixes']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive web application development services to bring your ideas to life 
            and scale your business to new heights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-secondary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3 group-hover:bg-secondary-400 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Our Development Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development', description: 'Building your application with best practices' },
              { step: '04', title: 'Deployment', description: 'Launching and providing ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="text-center relative"
              >
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30" />
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-slate-400 text-sm">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that fits your business needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact#contact-form"
                  className="btn-primary inline-flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact#contact-form"
                  className="btn-secondary inline-flex items-center"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
