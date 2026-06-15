import React from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const page = () => {
  return (
    <section className="w-full min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-20 pb-10 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
          Let's Find Your Dream Home
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">
          Our team is ready to assist you in finding the perfect residence.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-20 pb-20 max-w-7xl mx-auto">

        {/* Left: Image + Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image src="/interior-contact.jpg" fill className="object-cover" alt="Interior" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
              <Phone className="w-5 h-5 text-stone-600" />
              <span className="text-stone-700">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
              <Mail className="w-5 h-5 text-stone-600" />
              <span className="text-stone-700">hello@perumnas.id</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
              <MapPin className="w-5 h-5 text-stone-600" />
              <span className="text-stone-700">Jl. Perumnas No. 1, Jakarta</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-stone-500 mb-2">Full Name</label>
              <input type="text" className="w-full p-3 bg-stone-50 rounded-lg border-none focus:ring-2 focus:ring-stone-300 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-stone-500 mb-2">Email</label>
              <input type="email" className="w-full p-3 bg-stone-50 rounded-lg border-none focus:ring-2 focus:ring-stone-300 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-stone-500 mb-2">Phone</label>
              <input type="tel" className="w-full p-3 bg-stone-50 rounded-lg border-none focus:ring-2 focus:ring-stone-300 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-stone-500 mb-2">Message</label>
              <textarea rows={4} className="w-full p-3 bg-stone-50 rounded-lg border-none focus:ring-2 focus:ring-stone-300 outline-none resize-none" />
            </div>
            <button className="w-full py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default page
