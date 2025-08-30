import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop"
          alt="Golden light over a pine forest and mountains"
          className="h-[80vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-2 text-white">
          <Flame className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Trail & Ember</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm">
          <a href="#scents" className="hover:text-white transition">Scents</a>
          <a href="#gifting" className="hover:text-white transition">Gift Packaging</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>
        <button className="md:hidden inline-flex items-center gap-2 text-white/90 text-sm">
          <span>Menu</span>
        </button>
      </header>

      <div className="relative z-10 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl py-16 md:py-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur">
            <Leaf className="h-4 w-4" />
            <span className="text-xs">Hand-poured • Inspired by America’s National Parks</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
            Scents that bring the wilderness home
          </h1>
          <p className="mt-4 text-white/90 max-w-xl">
            Small-batch soy candles crafted with essential oils and natural fragrance notes. Each blend is an ode to a beloved park—pine-dusted trails, windswept cliffs, alpine meadows at golden hour.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#scents" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition">
              Shop Scents
            </a>
            <a href="#gifting" className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              Gift Options
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
