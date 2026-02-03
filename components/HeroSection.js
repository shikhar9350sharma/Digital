import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <section className='relative w-full font-inter'>
            <Navbar className='absolute top-0 left-0 w-full z-20' />

            {/* Text Content */}
            <div className='absolute inset-x-0 top-0 z-10 flex flex-col items-center pt-24 md:pt-36 px-6 text-center'>
                <div className='max-w-4xl space-y-4'>
                    <h1 className='text-white text-4xl md:text-7xl font-semibold leading-tight tracking-tight'>
                        More Comfortable. <br /> More Classy.
                    </h1>
                    <p className='text-white text-sm md:text-xl font-light opacity-90'>
                        Make your living experience even more memorable.
                    </p>
                </div>
            </div>

            {/* Image Background */}
            <div className="relative w-full overflow-hidden">
                <Image
                    src="/img1.png"
                    alt="Modern Luxury Home"
                    width={4096}
                    height={4062}
                    className='w-full h-[80vh] md:h-350 object-cover object-center md:object-bottom block'
                    priority={true}
                    sizes="100vw"
                    quality={75}
                />

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent" />
            </div>
        </section>
    )
}
export default HeroSection