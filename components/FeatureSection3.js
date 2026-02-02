import React from 'react'

const FeatureSection3 = () => {
    return (
        <>
            
            <section className=' hidden w-93.75 h-182.25 md:flex flex-col gap-15 pt-15 px-5 pb-15 md:w-full md:h-337.75 md:gap-20 md:pt-30 md:pr-20 md:pb-30 md:pl-20'>
                <div className=' md:w-full md:h-277.75 flex gap-15'>
                    {/* left  */}
                    <div className=' flex flex-col gap-24'>
                        <div className=' w-83.75 h-64.5 md:h-51.5 md:w-137.5 flex flex-col gap-8 '>
                            <div className='h-24 '><h2 className='font-inter font-medium md:font-semibold text-[36px] leading-12 tracking-[0%] md:text-[44px] md:leading-13 text-[#12161D]'>Find Your Dream <br /> Home Here</h2></div>
                            <div className='h-40 md:h-19.5 '><p className='text-[#61656E] font-inter font-medium text-[18px] leading-6.5 tracking-[0%]'>You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here.</p></div>
                        </div>
                        <div className=''>
                            <img className='md:w-137.5 md:h-160 rounded-lg' src="img5.jpg" alt="img" />
                        </div>
                    </div>
                    {/* right  */}
                    <div className=' flex flex-col gap-12'>
                        <div><img className='md:w-170 md:h-183.5 rounded-lg' src="img7.jpg" alt="img" /></div>
                        <div><img className='md:w-115.25 md:h-77.25  rounded-lg' src="img6.jpg" alt="img" /></div>
                    </div>
                </div>

            </section>
            <section className='md:hidden w-93.75 h-182.25 flex flex-col gap-15 pt-15 px-5 pb-15 '>
                
                {/* top  */}
                <div className='w-83.75 h-64.5 flex flex-col gap-8 '>
                    <div className=' w-full h-24  '>
                        <div className='h-24 w-full'><h2 className='font-inter font-medium  text-[36px] leading-12 tracking-[0%]  text-[#12161D]'>Find Your Dream <br /> Home Here</h2></div>
                            
                    </div>
                    <div><div className='h-32.5 w-full '><p className='text-[#61656E] font-inter font-medium text-[18px] leading-6.5 tracking-[0%]'>You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here.</p></div></div>
                </div>
            
                {/* bottom  */}
                <div className='h-72.5 rounded-[2.09px] flex justify-center items-center gap-4'>
                    <div className='w-[143.95px] h-[167.5px]'><img className='w-full h-full object-center rounded-lg' src="img5.jpg" alt="img" /></div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[177.97px]  h-[192.1px]'><img className=' rounded-lg' src="img7.jpg" alt="img" /></div>
                        <div className='w-[120.65px] h-[80.87]'><img className=' rounded-lg' src="img6.jpg" alt="img" /></div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default FeatureSection3
