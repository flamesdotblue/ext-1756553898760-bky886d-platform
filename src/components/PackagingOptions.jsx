import React from 'react'
import { Gift, Leaf, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const options = [
  {
    id: 'standard',
    title: 'Standard Jar',
    desc: 'Recyclable amber glass with a minimalist label and wood wick for a soft crackle.',
    perk: 'Plastic-free',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 'giftbox',
    title: 'Gift Box',
    desc: 'Premium kraft box with black ribbon. Perfect for birthdays, weddings, or thank-yous.',
    perk: 'Ready to gift',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1932&auto=format&fit=crop',
  },
  {
    id: 'personal-note',
    title: 'Personal Note',
    desc: 'Add a hand-stamped card with your message. We’ll write it neatly and include it inside.',
    perk: 'Personal touch',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1519681390377-3f6f3b6b7d43?q=80&w=1887&auto=format&fit=crop',
  },
]

export default function PackagingOptions() {
  return (
    <section id="gifting" className="px-6 md:px-10 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Gift Packaging</h2>
            <p className="mt-1 text-neutral-600 max-w-2xl">Thoughtful details from box to bow. Choose sustainable options that make unboxing feel like a breath of fresh air.</p>
          </div>
          <a href="#scents" className="text-sm font-medium underline underline-offset-4">Pair with a scent</a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {options.map((opt, idx) => (
            <motion.article
              key={opt.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <img src={opt.image} alt={opt.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <opt.icon className="h-5 w-5 text-neutral-700" />
                  <h3 className="font-medium">{opt.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{opt.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs">{opt.perk}</span>
                  <button className="rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50">Select</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
