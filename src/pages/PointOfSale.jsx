import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Shield, 
  Home, 
  Building2, 
  Shirt, 
  Laptop, 
  Calculator,
  FileText,
  ClipboardList,
  Database,
  TrendingUp,
  DollarSign,
  UserCheck,
  ExternalLink,
  Play,
  Check,
  Star,
  Download
} from 'lucide-react'

const PointOfSale = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      category: "Product Management",
      icon: Package,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Category Management",
        "Brand Management",
        "Product Catalog",
        "Product Variants Management",
        "Barcode Management"
      ]
    },
    {
      category: "Inventory Management",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      items: [
        "Warehouse Inventory Tracking",
        "Stock Purchase Entry",
        "Stock Return Processing",
        "Stock Transfer Between Warehouses",
        "Out of Stock Alerts",
      ]
    },
    {
      category: "Sales Operations",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      items: [
        "Point of Sale (POS) Billing",
        "Invoice Generation",
        "Multiple POS Closing",
        "Day Closing Procedures"
      ]
    },
    {
      category: "Financial Management",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      items: [
        "Expense Tracking",
        "Financial Reports Generation",
        "Account Ledger Management",
        "Customer Ledger Management",
        "Supplier Ledger Management",
        "Make Payments Records",
        "Receive Payments Records",
        "Tax Calculation & Compliance"
      ]
    },
    {
      category: "User & Access Control",
      icon: UserCheck,
      color: "from-orange-500 to-red-500",
      items: [
        "User Account Management",
        "Role-based Permissions",
        "Staff Access Control",
        "Security Management",
        "Activity Logging",
        "Multi-user Support"
      ]
    },
    {
      category: "Business & Sales Reports",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      items: [
        "Profit & Loss Reports",
        "Sales Performance Reports",
        "Stock Status Reports",
        "Expense Analysis Reports",
        "Day Book Summary",
        "Account Statement Reports"
      ]
    }
  ]

  const useCases = [
    {
      title: "Garments Shop",
      icon: Shirt,
      description: "Perfect for clothing retailers with inventory tracking, size/color variants, and seasonal management."
    },
    {
      title: "General Store", 
      icon: Home,
      description: "Ideal for convenience stores with diverse product categories and quick checkout processes."
    },
    {
      title: "Shoe Shop",
      icon: Package,
      description: "Specialized for footwear retailers with size management and brand categorization."
    },
    {
      title: "Electronics Store",
      icon: Laptop, 
      description: "Designed for tech retailers with warranty tracking and serial number management."
    }
  ]

  const stats = [                                   ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <ShoppingCart className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Point of <span className="gradient-text">Sale System</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Complete POS solution designed for retail businesses of all sizes. 
                Manage inventory, process sales, and analyze customer data with our intuitive interface.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="https://pos.pro-softs.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Try Live Demo
                </motion.a>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-secondary flex items-center justify-center"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo Video
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="space-y-4">
                  {[
                    "Real-time inventory tracking",
                    "Multi-location support", 
                    "Customer management system",
                    "Sales analytics and reporting",
                    "Barcode scanning support",
                    "Employee management",
                    "Tax calculation and reporting"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Complete Feature Set</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to run your retail business efficiently, 
              from inventory management to financial reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-colors duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  {feature.category}
                </h3>
                
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Where To Use</span>
            </h2>
            <p className="text-xl text-slate-300">
              Our POS system is perfect for various retail business types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <useCase.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience our Point of Sale system with a live demo. 
              See how it can streamline your operations and boost your sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://pos.pro-softs.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Try Live Demo
              </motion.a>
              
              <Link
                to="/contact#contact-form"
                className="btn-secondary flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Request Quote
              </Link>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Demo URL: <a href="https://pos.pro-softs.tech/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">https://pos.pro-softs.tech/</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Simple Pricing</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Monthly Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$99<span className="text-lg text-slate-400">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All POS Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Products & Transactions</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />24/7 Support</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 w-full">Get Started</Link>
              </div>
              {/* 6 Months Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">6 Months</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$499<span className="text-lg text-slate-400">/6 months</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All POS Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Products & Transactions</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />24/7 Support</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 w-full">Get Started</Link>
              </div>
              {/* Yearly Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$899<span className="text-lg text-slate-400">/year</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All POS Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Products & Transactions</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />24/7 Support</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 w-full">Get Started</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PointOfSale
