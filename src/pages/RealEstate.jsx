import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Home, 
  MapPin, 
  Search, 
  FileText, 
  Gift, 
  Video, 
  MessageSquare,
  Users,
  PlusCircle,
  UserPlus,
  Building,
  DollarSign,
  BookOpen,
  Calculator,
  Settings,
  BarChart3,
  Shield,
  Star,
  TrendingUp,
  ExternalLink,
  Play,
  Check,
  Download
} from 'lucide-react'

const RealEstate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const websiteFeatures = [
    {
      category: "Property Management",
      icon: Home,
      color: "from-green-500 to-emerald-500",
      items: [
        "Property Listings (Sale & Rent)",
        "Detailed Property Information",
        "Property Image Galleries",
        "Property Virtual Tours"
      ]
    },
    {
      category: "Location & Search",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Top Operating Locations Display",
        "Featured Housing Societies",
        "Advanced Property Search",
        "Location-based Filtering"
      ]
    },
    {
      category: "Content Management",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      items: [
        "Real Estate Blogs",
        "Property Offers & Deals",
        "YouTube Video Integration",
        "Market News & Updates"
      ]
    },
    {
      category: "Customer Engagement",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      items: [
        "Contact Forms",
        "Direct Agent Connection",
        "Lead Capture System",
        "Customer Inquiry Management"
      ]
    }
  ]

  const adminFeatures = [
    {
      category: "Content Administration",
      icon: PlusCircle,
      color: "from-indigo-500 to-blue-500",
      items: [
        "Blog Management System",
        "Offer Creation & Management",
        "YouTube Video Management",
        "Website Content Control"
      ]
    },
    {
      category: "Lead & Agent Management",
      icon: UserPlus,
      color: "from-green-500 to-teal-500",
      items: [
        "Client Lead Assignment",
        "Agent Panel Access",
        "Agent Performance Tracking",
        "Lead Distribution System"
      ]
    },
    {
      category: "Property & Sales Management",
      icon: Building,
      color: "from-yellow-500 to-orange-500",
      items: [
        "Property Addition & Editing",
        "File Sales Management",
        "Purchase Management",
        "Property Status Tracking"
      ]
    },
    {
      category: "Financial Management",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      items: [
        "Customer Ledger Management",
        "Accounts Management",
        "Payment & Receivables Tracking",
        "Account Ledger System"
      ]
    },
    {
      category: "Operations & Reporting",
      icon: BarChart3,
      color: "from-red-500 to-pink-500",
      items: [
        "Office Expense Tracking",
        "Categorized Expense Management",
        "Comprehensive Reports Generation",
        "Financial Analytics"
      ]
    },
    {
      category: "User & Access Control",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
      items: [
        "User Management System",
        "Role-based Permissions",
        "Access Control Management",
        "Security Administration"
      ]
    }
  ]

  const useCases = [
    {
      title: "Real Estate Agencies",
      icon: Building,
      description: "Complete solution for real estate agencies managing multiple properties and agents."
    },
    {
      title: "Property Developers", 
      icon: Home,
      description: "Perfect for developers showcasing new projects and managing sales processes."
    },
    {
      title: "Independent Agents",
      icon: Users,
      description: "Individual agents can manage their listings and client relationships effectively."
    },
    {
      title: "Property Investors",
      icon: TrendingUp, 
      description: "Investors can track their portfolio and manage rental properties efficiently."
    }
  ]

  const stats = [
    { label: "Properties Listed", value: "1000+", icon: Home },
    { label: "Client Satisfaction", value: "4.8", icon: Star },
    { label: "Successful Sales", value: "500+", icon: TrendingUp },
    { label: "Active Agents", value: "50+", icon: Users }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <Home className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Real Estate <span className="gradient-text">Management System</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Comprehensive property management system for real estate agencies, property managers, and individual landlords. 
                Streamline your operations from listings to sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact#contact-form"
                    className="btn-primary bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Request Demo
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact#contact-form"
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
                    <stat.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
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
                    "Property listing management",
                    "Client and lead tracking",
                    "Document storage and sharing",
                    "Financial tracking and reporting",
                    "Agent performance monitoring",
                    "Customer relationship management",
                    "Automated notifications",
                    "Mobile-responsive design"
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

      {/* Website Features Section */}
      <section ref={ref} className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Website Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything your real estate website needs to attract and convert visitors into clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {websiteFeatures.map((feature, index) => (
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
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Admin Panel Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Admin Panel Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful administrative tools to manage your real estate business efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminFeatures.map((feature, index) => (
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
                
                <h3 className="text-xl font-bold text-white mb-6">
                  {feature.category}
                </h3>
                
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
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
              <span className="gradient-text">Perfect For</span>
            </h2>
            <p className="text-xl text-slate-300">
              Our real estate system adapts to various business models and requirements
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group-hover:scale-105">
                  <useCase.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
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
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Revolutionize Your Real Estate Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience our comprehensive real estate management system. 
              See how it can streamline your operations and boost your sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact#contact-form"
                  className="btn-primary bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Request Demo
                </Link>
              </motion.div>
              
              <Link
                to="/contact#contact-form"
                className="btn-secondary flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Request Quote
              </Link>
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
              <span className="gradient-text">Flexible Pricing</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Monthly Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$149<span className="text-lg text-slate-400">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All Real Estate Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Property Listings</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />24/7 Support</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-green-500 to-emerald-500 w-full">Get Started</Link>
              </div>
              {/* 6 Months Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">6 Months</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$749<span className="text-lg text-slate-400">/6 months</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All Real Estate Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Property Listings</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Priority Support</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-green-500 to-emerald-500 w-full">Get Started</Link>
              </div>
              {/* Yearly Plan */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$1349<span className="text-lg text-slate-400">/year</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />All Real Estate Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Unlimited Property Listings</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Dedicated Account Manager</li>
                </ul>
                <Link to="/contact#contact-form" className="btn-primary bg-gradient-to-r from-green-500 to-emerald-500 w-full">Get Started</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RealEstate
