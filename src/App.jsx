import React from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import PackagingOptions from './components/PackagingOptions'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <main className="relative z-10">
        <ProductGrid />
        <PackagingOptions />
      </main>
      <Footer />
    </div>
  )
}
