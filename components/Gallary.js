import React from 'react'
import Image from 'next/image'

const Gallary = () => {
  return (
    <section className='w-full h-auto overflow-x-scroll overflow-y-hidden no-scrollbar flex items-center gap-6 pt-15 px-4 pb-15 md:w-full md:h-auto md:justify-center md:gap-10 md:pt-10 md:px-20 md:pb-10'>
        {/* Image 1 */}
        <Image 
            src="/img2.jpg" 
            alt="Gallery 1" 
            width={4096} 
            height={2341}
            className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm'
            sizes="(max-width: 768px) 80vw, 33vw" 
        />
        {/* Image 2 */}
        <Image 
            src="/img3.jpg" 
            alt="Gallery 2" 
            width={4096} 
            height={2304}
            className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm'
            sizes="(max-width: 768px) 80vw, 33vw"
        />
        {/* Image 3 */}
        <Image 
            src="/img4.jpg" 
            alt="Gallery 3" 
            width={4096} 
            height={2549}
            className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm'
            sizes="(max-width: 768px) 80vw, 33vw"
        />
    </section>
  )
}

export default Gallary