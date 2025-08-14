import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ShoppingCart, 
  Home, 
  GraduationCap, 
  Plane, 
  Wheat, 
  ArrowRight
} from 'lucide-react'

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const products = [
    {
      id: 'pos',
      name: 'Point of Sale System',
      description: 'Complete POS solution with inventory management, sales tracking, and customer analytics.',
      icon: ShoppingCart,
      features: ['Product Management', 'Inventory Control', 'Sales Processing', 'Financial Reports'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'realestate',
      name: 'Real Estate Management',
      description: 'Comprehensive property management system for real estate professionals and agencies.',
      icon: Home,
      features: ['Property Listings', 'Location Display', 'Lead Management', 'Agent Panels'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'lms',
      name: 'Learning Management System',
      description: 'Modern LMS platform for educational institutions and corporate training programs.',
      icon: GraduationCap,
      features: ['Course Creation', 'Student Portal', 'Assessment Tools', 'Progress Tracking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'travel',
      name: 'Tour & Travel Management',
      description: 'End-to-end travel management solution for agencies and tour operators.',
      icon: Plane,
      features: ['Booking Management', 'Itinerary Planning', 'Payment Processing', 'Customer Support'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'agriculture',
      name: 'Agriculture Management',
      description: 'Smart farming solution with crop monitoring, resource management, and analytics.',
      icon: Wheat,
      features: ['Crop Monitoring', 'Resource Planning', 'Stock Management', 'Yield Analytics'],
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section ref={ref} className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive software solutions designed to streamline your business operations 
            and drive growth across various industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.color} mb-6`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {product.name}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={product.id === 'pos' ? '/products/pos' : product.id === 'realestate' ? '/products/realestate' : `/products#${product.id}`}
                  className={`w-full bg-gradient-to-r ${product.color} text-white py-3 px-6 rounded-lg font-medium opacity-90 hover:opacity-100 transition-all duration-300 flex items-center justify-center group`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our software solutions can streamline your operations 
              and accelerate your growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary">
                Get Custom Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
