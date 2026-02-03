import React from 'react'
import Image from 'next/image'

const FeatureSection3 = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-10 pt-15 px-5 pb-15 md:flex-row md:justify-between md:gap-20 md:pt-30 md:px-20 md:pb-30'>
        
        {/* LEFT COLUMN */}
        <div className='w-full md:w-1/2 flex flex-col gap-8 md:gap-24'>
            
            {/* Text Content */}
            <div className='flex flex-col gap-4 md:gap-8'>
                <h2 className='font-inter font-medium md:font-semibold text-[36px] leading-tight md:text-[44px] text-[#12161D]'>
                    Find Your Dream <br /> Home Here
                </h2>
                <p className='text-[#61656E] font-inter font-medium text-[18px] leading-relaxed'>
                    You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here.
                </p>
            </div>

            {/* Large Image- Left Side */}
              <div className='hidden md:block relative w-full h-200  overflow-hidden rounded-lg'>
                  <Image
                      src="/img5.jpg"
                      alt="House 1"
                      fill                            
                      className='object-cover object-center' 
                      sizes="50vw"
                  />
              </div>
        </div>


        {/* RIGHT COLUMN */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-12 '>
            
            {/* Desktop */}
            <div className='hidden md:flex flex-col gap-12'>
                 
                 {/* Top Image */}
                 <Image 
                    src="/img7.jpg" 
                    alt="House 2"
                    width={3705} 
                    height={3850} 
                    className='w-full rounded-lg object-cover'
                    sizes="50vw"
                 />     
            </div>
            <div className='hidden md:block h-full w-150  '>
                <Image 
                    src="/img6.jpg" 
                    alt="House 3"
                    width={4096} 
                    height={2304} 
                    className='w-full rounded-lg object-cover'
                    sizes="50vw" 
                 />
            </div>

            {/* Mobile Layout */}
            <div className='md:hidden flex gap-3 h-64'>
                <div className='relative w-1/2 h-full'>
                    <Image 
                        src="/img5.jpg" 
                        alt="House 1"
                        fill 
                        className='object-cover rounded-lg'
                        sizes="50vw"
                    />
                </div>
                <div className='w-1/2 h-full flex flex-col gap-3'>
                    <div className='relative h-3/5 w-full'>
                        <Image 
                            src="/img7.jpg" 
                            alt="House 2"
                            fill 
                            className='object-cover rounded-lg'
                            sizes="50vw"
                        />
                    </div>
                    <div className='relative h-2/5 w-full'>
                         <Image 
                            src="/img6.jpg" 
                            alt="House 3"
                            fill 
                            className='object-cover rounded-lg'
                            sizes="50vw"
                          />
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default FeatureSection3