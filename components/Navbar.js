'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='absolute top-0 z-50 w-full h-20 px-4 md:px-20 flex justify-between items-center bg-transparent text-white font-inter'>
        
        {/* Logo */}
        <div className='md:absolute md:left-1/2 md:-translate-x-1/2'>
          <img src="Group 3.svg" alt="logo" className="h-8 md:h-10" />
        </div>

        {/* Menu Button */}
        <div 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className='order-last md:order-first rounded-full bg-white text-black py-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm hover:bg-gray-100 transition'
        >
            {/* 2. Switch Icon based on state (Menu vs X) */}
            {isMenuOpen ? (
                <X className="w-5 h-5" /> 
            ) : (
                <Menu className="w-5 h-5" />
            )}
            
            <span className="text-sm font-medium">
                {isMenuOpen ? 'Close' : 'Menu'}
            </span>
        </div>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-6 font-semibold text-[16px]'>
            <Link href="/contact"><li>Contact Us</li></Link>
            <Link href="/about"><li>About Us</li></Link>
        </ul>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
            <div className='absolute top-24 right-4 w-48 bg-white rounded-xl shadow-xl p-5 flex flex-col gap-4 md:hidden text-black z-50 animate-in fade-in slide-in-from-top-2'>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <span className='block font-medium text-lg hover:text-gray-600'>Contact Us</span>
                </Link>
                <div className="h-px bg-gray-100 w-full"></div>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    <span className='block font-medium text-lg hover:text-gray-600'>About Us</span>
                </Link>
            </div>
        )}
    </nav>
  )
}

export default Navbar