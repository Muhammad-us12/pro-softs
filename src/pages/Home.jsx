import React from 'react'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import ServicesSection from '../components/ServicesSection'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ProductShowcase />
      <ServicesSection />
    </div>
  )
}

export default Home
