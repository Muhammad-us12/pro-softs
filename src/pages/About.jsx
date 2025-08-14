import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Award, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We are committed to delivering software solutions that make a real difference in our clients\' business operations.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Our clients\' success is our success. We work closely with each client to understand their unique needs.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards in code quality, security, and performance in all our deliverables.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends to provide cutting-edge solutions to our clients.'
    }
  ]

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
              About <span className="gradient-text">Pro-Softs.tech</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We are a team of passionate software engineers dedicated to creating 
              innovative solutions that transform businesses and empower growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between complex business needs and 
                simple, effective software solutions, Pro-Softs.tech has been at the forefront 
                of digital transformation.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our journey began with a simple belief: that technology should empower businesses, 
                not complicate them. This philosophy drives everything we do, from the initial 
                consultation to the final delivery and ongoing support.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, we're proud to have helped dozens of businesses streamline their operations, 
                increase efficiency, and achieve their goals through our comprehensive software solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">5+</div>
                  <div className="text-xl text-slate-300">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our 
              innovative software solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
