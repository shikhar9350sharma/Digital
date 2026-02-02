import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    
    <nav className='absolute top-0 z-50 w-full h-20 px-4  flex justify-between items-center bg-transparent text-white font-inter'>
        {/* Menu  */}

        <div className='mr-0 rounded-full bg-white text-black p-2 md:mr-36 flex items-center gap-2 cursor-pointer'>
            <img src="material-symbols_menu.svg" alt="menu" className="w-6 h-6" />
            <span className="text-sm font-medium">Menu</span>
        </div>
        {/* Logo */}
        <div className='absolute left-1/2 -translate-x-1/2 md:static md:transform-none'>
          <img src="Group 3.svg" alt="logo" />
        </div>

        {/* Desktop Links - Hidden on mobile  */}
        <ul className='hidden md:flex items-center gap-6 font-semibold text-[16px]'>
            <Link href="/contact"><li>Contact Us</li></Link>
            <Link href="/about"><li>About Us</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar