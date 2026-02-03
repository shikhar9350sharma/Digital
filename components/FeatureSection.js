import React from 'react'

const FeatureSection = () => {
  return (
    
    <section className='w-full h-auto py-15 px-5 md:px-20 md:py-30 flex flex-col md:flex-row items-center justify-center'>
        
        {/* Main Content Wrapper */}
        <div className='w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-20'>
            
            {/* Left Side (Title) */}
            <div className='w-full md:w-1/2'>
                <h1 className='font-inter font-medium text-[36px] md:text-[44px] leading-tight tracking-[0%] text-[#12161D]'>
                    Enjoy Quality Life in Perumnas Housing
                </h1>
            </div>

            {/* Right Side (Text & Stats) */}
            <div className='w-full md:w-1/2 flex flex-col gap-10'>
                
                {/* Description Text */}
                <div className='w-full'>
                    <p className='font-inter font-normal text-[18px] leading-relaxed text-[#61656E]'>
                        Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.
                    </p>
                </div>

                {/* Stats Row */}

                <div className='w-full flex justify-between items-start'>
                    
                    {/* Stat 1 */}
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-inter font-medium text-[24px] md:text-[36px] text-[#12161D]'>+100</h2>
                        <p className='font-inter font-normal text-[16px] md:text-[18px] text-[#61656E]'>Units Ready</p>
                    </div>

                    {/* Stat 2 */}
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-inter font-medium text-[24px] md:text-[36px] text-[#12161D]'>+60K</h2>
                        <p className='font-inter font-normal text-[16px] md:text-[18px] text-[#61656E]'>Customers</p>
                    </div>

                    {/* Stat 3 */}
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-inter font-medium text-[24px] md:text-[36px] text-[#12161D]'>+70K</h2>
                        <p className='font-inter font-normal text-[16px] md:text-[18px] text-[#61656E]'>Review</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection