import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full h-auto flex flex-col pt-15 px-5 pb-5 mx-auto bg-white md:w-full md:pt-30 md:px-20 md:pb-10'>
        <div className='flex flex-col gap-12 md:flex-row md:justify-between md:gap-20 mb-15 md:mb-20'>
            
            {/* Left Side */}
            <div className='flex flex-col gap-6 md:max-w-[320px]'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src="Logo.svg" alt="Perumnas Logo" className="h-8 md:h-10" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#61656E] font-inter font-medium text-[18px] leading-6.5 tracking-[0%]'>
                        More Comfortable. <br /> More Classy.
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className='grid grid-cols-2 gap-y-10 gap-x-5 md:grid-cols-3 md:gap-20'>
                
                {/* Product */}
                <div className='flex flex-col gap-6'>
                    <h4 className='text-[#12161D] font-inter font-semibold text-[18px] leading-6.5'>Product</h4>
                    <ul className='flex flex-col gap-4 text-[#61656E] font-inter font-normal text-[16px] leading-6'>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Features</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Integrations</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Pricing</li>
                    </ul>
                </div>

                {/* Company */}
                <div className='flex flex-col gap-6'>
                    <h4 className='text-[#12161D] font-inter font-semibold text-[18px] leading-6.5'>Company</h4>
                    <ul className='flex flex-col gap-4 text-[#61656E] font-inter font-normal text-[16px] leading-6'>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>About us</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Blog</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Careers</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Customers</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Brand</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className='flex flex-col gap-6'>
                    <h4 className='text-[#12161D] font-inter font-semibold text-[18px] leading-6.5'>Resources</h4>
                    <ul className='flex flex-col gap-4 text-[#61656E] font-inter font-normal text-[16px] leading-6'>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Community</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Contact</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>DPA</li>
                        <li className='cursor-pointer hover:text-[#12161D] transition-colors'>Terms of service</li>
                    </ul>
                </div>

            </div>
        </div>
        <div className='w-full h-px bg-[#E5E7EB] mb-8'></div>

        {/* Copyright & Legal */}
        <div className='flex flex-col-reverse gap-6 md:flex-row md:justify-between md:items-center'>
            
            {/* Copyright */}
            <p className='text-[#61656E] font-inter font-normal text-[14px] leading-5'>
                © 2022 Perumnas. All rights reserved
            </p>

            {/* Legal Links */}
            <div className='flex flex-wrap gap-6 md:gap-8'>
                <span className='text-[#61656E] font-inter font-normal text-[14px] leading-5 cursor-pointer hover:text-[#12161D]'>Terms of Service</span>
                <span className='text-[#61656E] font-inter font-normal text-[14px] leading-5 cursor-pointer hover:text-[#12161D]'>Policy service</span>
                <span className='text-[#61656E] font-inter font-normal text-[14px] leading-5 cursor-pointer hover:text-[#12161D]'>Cookie Policy</span>
                <span className='text-[#61656E] font-inter font-normal text-[14px] leading-5 cursor-pointer hover:text-[#12161D]'>Partners</span>
            </div>

        </div>
    </footer>
  )
}

export default Footer