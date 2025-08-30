import React from 'react'

export default function Footer() {
  return (
    <footer id="about" className="border-t border-neutral-200 bg-white px-6 md:px-10 py-12">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Trail & Ember</h3>
          <p className="mt-2 text-sm text-neutral-600">Hand-poured in small batches using renewable soy wax and phthalate-free fragrance. We donate 1% of profits to park conservation.</p>
        </div>
        <div>
          <h4 className="font-medium">Stay in the loop</h4>
          <p className="mt-2 text-sm text-neutral-600">Be first to know about limited releases and restocks.</p>
          <form className="mt-3 flex gap-2 max-w-sm">
            <input type="email" required placeholder="Email address" className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            <button className="rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">Subscribe</button>
          </form>
        </div>
        <div>
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm text-neutral-700">
            <li><a href="#scents" className="hover:underline">Shop Scents</a></li>
            <li><a href="#gifting" className="hover:underline">Gift Packaging</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-8 flex items-center justify-between text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Trail & Ember. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
