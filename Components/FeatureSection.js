import React from 'react'

const FeatureSection = () => {
  return (
    <section className=' w-93.75 h-159.5  md:w-full md:h-124 flex flex-col md:flex-row items-center justify-center'>
        <div className='content-box w-83.75 h-129.5 gap-8 md:w-7xl md:h-74  flex flex-col md:flex-row'>
            <div className='w-83.75 h-24 md:w-130 md:h-26  '>
                <h1 className='font-inter font-medium text-[36px] md:text-[44px] leading-13 tracking-[0%] text-[#12161D]'>Enjoy Quality Life in Perumnas Housing</h1>
            </div>
            {/* right  */}
            <div className='w-83.75 h-97.5 md:w-170 md:h-74 flex flex-col gap-15  md:gap-20'>
                <div className='w-83.75 h-65 md:w-full md:h-32.5 '>
                    <p className='font-inter font-normal text-[18px] leading-6.5 md:text-[18px] md:leading-6.5 tracking-[0%] text-[#61656E]'>Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.</p>
                </div>
                <div className=' w-full h-17.5  md:h-21.5 flex justify-between'>
                    <div className='flex flex-col  gap-3 w-[111.67px] h-17.5 md:w-[226.67px] md:h-21.5'>
                        <div className='h-8 md:h-12 w-full '>
                            <h2 className='font-inter font-medium text-[24px] leading-8 md:text-[36px] md:leading-12 tracking-[0%]'>+100</h2>
                        </div>
                        <div>
                            <p className='font-inter font-normal text-[18px] leading-6.5 md:text-[18px] md:leading-6.5 tracking-[0%] text-[#61656E]'>Units Ready</p>
                        </div>
                    </div>
                    <div className='flex flex-col  gap-3 w-[111.67px] h-17.5 md:w-[226.67px] md:h-21.5'>
                        <div className='h-8 md:h-12 w-full '>
                            <h2 className='font-inter font-medium text-[24px] leading-8 md:text-[36px] md:leading-12 tracking-[0%]'>+60K</h2>
                        </div>
                        <div>
                            <p className='font-inter font-normal text-[18px] leading-6.5 md:text-[18px] md:leading-6.5 tracking-[0%] text-[#61656E]'>Customers</p>
                        </div>
                    </div>
                    <div className='flex flex-col  gap-3 w-[111.67px] h-17.5 md:w-[226.67px] md:h-21.5'>
                        <div className='h-8 md:h-12 w-full '>
                            <h2 className='font-inter font-medium text-[24px] leading-8 md:text-[36px] md:leading-12 tracking-[0%]'>+70K</h2>
                        </div>
                        <div>
                            <p className='font-inter font-normal text-[18px] leading-6.5 md:text-[18px] md:leading-6.5 tracking-[0%] text-[#61656E]'>Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection
