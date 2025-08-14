import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ShoppingCart, 
  Home, 
  GraduationCap, 
  Plane, 
  Wheat,
  Check,
  Star,
  Users,
  TrendingUp,
  Download,
  Play
} from 'lucide-react'

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const products = [
    {
      id: 'pos',
      name: 'Point of Sale System',
      description: 'Complete POS solution designed for retail businesses of all sizes. Manage inventory, process sales, and analyze customer data with our intuitive interface.',
      icon: ShoppingCart,
      features: [
        'Product Management & Catalog',
        'Inventory Management & Tracking',
        'Advanced Sales Processing',
        'Customer Management System',
        'Financial Reports & Analytics',
        'Multi-location Support',
        'Employee Management',
        'Tax Calculation & Reporting'
      ],
      technologies: ['Laravel', 'Blade', 'Mysql'],
      color: 'from-blue-500 to-cyan-500',
      stats: { users: '500+', rating: 4.9, growth: '+25%' },
      pricing: 'Starting at $99/month'
    },
    {
      id: 'realestate',
      name: 'Real Estate Management',
      description: 'Comprehensive property management system for real estate agencies, property managers, and individual landlords.',
      icon: Home,
      features: [
        'Property Listings Management',
        'Interactive Location Display',
        'Advanced Search & Filters',
        'Content Management (Blogs)',
        'Customer Engagement Tools',
        'Lead Management & Assignment',
        'Agent Management Panels',
        'Financial Tracking & Billing'
      ],
      technologies: ['Laravel', 'Blade', 'Mysql'],
      color: 'from-green-500 to-emerald-500',
      stats: { users: '300+', rating: 4.8, growth: '+35%' },
      pricing: 'Starting at $149/month'
    },
    {
      id: 'lms',
      name: 'Learning Management System',
      description: 'Modern LMS platform for educational institutions, corporations, and training organizations.',
      icon: GraduationCap,
      features: [
        'Course creation and management',
        'Student enrollment system',
        'Interactive assessments',
        'Progress tracking and analytics',
        'Video conferencing integration',
        'Certificate generation',
        'Discussion forums',
        'Mobile app support'
      ],
      technologies: ['Laravel', 'Blade', 'Mysql'],
      color: 'from-purple-500 to-pink-500',
      stats: { users: '1000+', rating: 4.9, growth: '+40%' },
      pricing: 'Starting at $199/month'
    },
    {
      id: 'travel',
      name: 'Tour & Travel Management',
      description: 'End-to-end travel management solution for travel agencies, tour operators, and hospitality businesses.',
      icon: Plane,
      features: [
        'Booking and reservation system',
        'Itinerary planning tools',
        'Payment processing',
        'Customer support portal',
        'Package management',
        'Vendor management',
        'Travel insurance integration',
        'Multi-currency support'
      ],
      technologies: ['Laravel', 'Blade', 'Mysql'],
      color: 'from-orange-500 to-red-500',
      stats: { users: '200+', rating: 4.7, growth: '+30%' },
      pricing: 'Starting at $179/month'
    },
    {
      id: 'agriculture',
      name: 'Agriculture Management',
      description: 'Smart farming solution with IoT integration for modern agricultural operations and farm management.',
      icon: Wheat,
      features: ['Crop Monitoring', 'Resource Planning', 'Stock Management', 'Yield Analytics'
      ],
      technologies: ['Laravel', 'Blade', 'Mysql'],
      color: 'from-yellow-500 to-orange-500',
      stats: { users: '150+', rating: 4.8, growth: '+45%' },
      pricing: 'Starting at $129/month'
    }
  ]

  // Scroll to section if hash is present
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      // Timeout to allow animation/mounting
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }
  }, [])

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
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive software solutions designed to streamline operations 
              and drive growth across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                {/* Content */}
                <div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.color} mb-6`}>
                    <product.icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {product.name}
                  </h2>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>

              

                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold gradient-text">
                      {product.pricing}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {product.id === 'pos' ? (
                      <>
                        <Link
                          to="/products/pos"
                          className={`btn-primary bg-gradient-to-r ${product.color} flex items-center justify-center`}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                        
                        <motion.a
                          href="https://pos.pro-softs.tech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Try Demo
                        </motion.a>
                      </>
                    ) : product.id === 'realestate' ? (
                      <>
                        <Link
                          to="/products/realestate"
                          className={`btn-primary bg-gradient-to-r ${product.color} flex items-center justify-center`}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/contact"
                            className="btn-secondary flex items-center justify-center"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Request Demo
                          </Link>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/contact#contact-form"
                            className={`btn-primary bg-gradient-to-r ${product.color} flex items-center justify-center`}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Request Demo
                          </Link>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/contact"
                            className="btn-secondary flex items-center justify-center"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Video
                          </Link>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Key Features
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you need? We specialize in creating custom software 
              solutions tailored to your specific business requirements.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary">
                Discuss Custom Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products
