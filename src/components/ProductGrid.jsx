import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const products = [
  {
    id: 'yosemite',
    name: 'Yosemite • Pine & Granite',
    price: 28,
    rating: 5,
    notes: ['Douglas fir', 'Cedarwood', 'Moss'],
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'zion',
    name: 'Zion • Desert Sage',
    price: 28,
    rating: 4,
    notes: ['Sagebrush', 'Juniper', 'Amber'],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'acadia',
    name: 'Acadia • Coastal Spruce',
    price: 28,
    rating: 5,
    notes: ['Sea salt', 'Spruce', 'Vetiver'],
    img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'glacier',
    name: 'Glacier • Alpine Meadow',
    price: 28,
    rating: 5,
    notes: ['Wildflower', 'Balsam', 'Fresh air'],
    img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b8?q=80&w=1932&auto=format&fit=crop',
  },
]

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`} />
      ))}
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="scents" className="relative -mt-16 md:-mt-24 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Shop Scents</h2>
              <p className="mt-1 text-neutral-600">Natural soy candles with layered notes that transport you outdoors.</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">All</button>
              <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">Woody</button>
              <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">Fresh</button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium leading-tight">{p.name}</h3>
                    <span className="font-semibold">${p.price}</span>
                  </div>
                  <div className="mt-1"><Stars count={p.rating} /></div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.notes.map((n) => (
                      <span key={n} className="rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs">{n}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-lg bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-neutral-800">Add to Cart</button>
                    <button className="rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50">Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
