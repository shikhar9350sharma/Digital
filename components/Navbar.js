import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute top-0 z-50 w-full h-20 px-4 md:px-20 flex justify-between items-center bg-transparent text-white font-inter'>
        
        
        <div className='md:absolute md:left-1/2 md:-translate-x-1/2'>
          <img src="Group 3.svg" alt="logo" className="h-8 md:h-10" />
        </div>

        <div className='order-last md:order-first rounded-full bg-white text-black py-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm'>
            <img src="material-symbols_menu.svg" alt="menu" className="w-5 h-5" />
            <span className="text-sm font-medium">Menu</span>
        </div>

        <ul className='hidden md:flex items-center gap-6 font-semibold text-[16px]'>
            <Link href="/contact"><li>Contact Us</li></Link>
            <Link href="/about"><li>About Us</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar