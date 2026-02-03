import React from 'react'

const FeatureSection3 = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-10 pt-15 px-5 pb-15 md:flex-row md:justify-between md:gap-20 md:pt-30 md:px-20 md:pb-30'>
        
        {/* LEFT COLUMN  */}
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

            {/* Large Image (Image 5) */}
           
            <div className='hidden md:block'>
                <img className='w-full rounded-lg object-cover' src="img5.jpg" alt="House 1" />
            </div>
        </div>


        {/* RIGHT COLUMN (Images on Desktop) */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-12'>
            
            {/* Desktop Layout: Stacked Images */}
            <div className='hidden md:flex flex-col gap-12'>
                 <img className='w-full rounded-lg object-cover' src="img7.jpg" alt="House 2" />
                 <img className='w-[70%] self-end rounded-lg object-cover' src="img6.jpg" alt="House 3" />
            </div>

            {/* Mobile Layout: Gallery Grid */}
            
            <div className='md:hidden flex gap-3 h-64'>
                {/* Left tall image */}
                <div className='w-1/2 h-full'>
                    <img className='w-full h-full object-cover rounded-lg' src="img5.jpg" alt="House 1" />
                </div>
                {/* Right stacked images */}
                <div className='w-1/2 h-full flex flex-col gap-3'>
                    <div className='h-3/5 w-full'>
                        <img className='w-full h-full object-cover rounded-lg' src="img7.jpg" alt="House 2" />
                    </div>
                    <div className='h-2/5 w-full'>
                         <img className='w-full h-full object-cover rounded-lg' src="img6.jpg" alt="House 3" />
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default FeatureSection3