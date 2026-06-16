import React from "react";
import Image from "next/image";
import { Shield, Leaf, MapPin, Heart, Award, Users, Home, TrendingUp } from "lucide-react";

const page = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-stone-700" />,
      title: "Secure & Trusted",
      description: "Every property is verified with complete legal documentation and transparent pricing.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-stone-700" />,
      title: "Eco-Friendly Living",
      description: "Sustainable designs with green spaces, solar readiness, and energy-efficient infrastructure.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-stone-700" />,
      title: "Prime Locations",
      description: "Strategically located near schools, hospitals, shopping centers, and transport hubs.",
    },
    {
      icon: <Heart className="w-8 h-8 text-stone-700" />,
      title: "Community First",
      description: "Designed for families with playgrounds, parks, and shared recreational spaces.",
    },
    {
      icon: <Award className="w-8 h-8 text-stone-700" />,
      title: "Premium Quality",
      description: "Built with top-grade materials and modern architecture that stands the test of time.",
    },
    {
      icon: <Users className="w-8 h-8 text-stone-700" />,
      title: "Expert Support",
      description: "Dedicated team from inquiry to handover — we guide you at every step.",
    },
  ];

  const stats = [
    { number: "+100", label: "Units Ready", icon: <Home className="w-6 h-6" /> },
    { number: "+60K", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "+70K", label: "Positive Reviews", icon: <Heart className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/img2.jpg"
          alt="Modern Living Room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide">
            About Perumnas
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light">
            Building homes that inspire. Creating communities that thrive.
          </p>
        </div>
      </section>

      {/* ===== MISSION STATEMENT ===== */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
          Our Story
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed max-w-3xl mx-auto">
          Founded with a vision to transform urban living, Perumnas has grown into one of 
          Indonesia&apos;s most trusted housing developers. We believe that a home is more than 
          just walls — it&apos;s where memories are made, families grow, and dreams take shape. 
          With over 15 years of experience, we continue to deliver affordable luxury with 
          uncompromising quality.
        </p>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-stone-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <div className="mb-3 text-stone-300">{stat.icon}</div>
              <span className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</span>
              <span className="text-stone-400 text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMAGE GRID GALLERY ===== */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center mb-4">
          Our Spaces
        </h2>
        <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto">
          Thoughtfully designed interiors that blend comfort with elegance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Image */}
          <div className="md:col-span-2 lg:col-span-2 relative h-80 md:h-96 rounded-2xl overflow-hidden group">
            <Image
              src="/img2.jpg"
              alt="Living Room Interior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-medium">Spacious Living Areas</h3>
              <p className="text-white/80 text-sm mt-1">Open-plan designs with natural lighting</p>
            </div>
          </div>

          {/* Tall Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group">
            <Image
              src="/img3.jpg"
              alt="Bathroom Interior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-medium">Modern Bathrooms</h3>
              <p className="text-white/80 text-sm mt-1">Spa-inspired relaxation</p>
            </div>
          </div>

          {/* Square Image */}
          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <Image
              src="/img4.jpg"
              alt="Bedroom Interior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-medium">Cozy Bedrooms</h3>
              <p className="text-white/80 text-sm mt-1">Restful retreats with a view</p>
            </div>
          </div>

          {/* Wide Image */}
          <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden group">
            <Image
              src="/img2.jpg"
              alt="Kitchen and Dining"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-medium">Gourmet Kitchens</h3>
              <p className="text-white/80 text-sm mt-1">Designed for modern lifestyles</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS GRID ===== */}
      <section className="py-20 px-6 md:px-20 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center mb-4">
            Why Choose Perumnas?
          </h2>
          <p className="text-stone-500 text-center mb-16 max-w-xl mx-auto">
            We go beyond building houses — we create lifestyles worth living.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-medium text-stone-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
          Ready to Find Your Home?
        </h2>
        <p className="text-stone-500 mb-8 max-w-xl mx-auto">
          Let our team guide you to the perfect residence tailored to your needs.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition-colors font-medium"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
};

export default page;

