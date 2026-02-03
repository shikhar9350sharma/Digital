import React from 'react'

const Gallary = () => {
  return (
   
    <section className='w-full h-auto overflow-x-scroll overflow-y-hidden no-scrollbar flex items-center gap-6 pt-15 px-4 pb-15 md:w-full md:h-auto md:justify-center md:gap-10 md:pt-10 md:px-20 md:pb-10'>
        
        {/* Images */}
        <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm' src="img2.jpg" alt="Gallery 1" loading='lazy' />
        <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm' src="img3.jpg" alt="Gallery 2" loading='lazy' />
        <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 object-cover shadow-sm' src="img4.jpg" alt="Gallery 3" loading='lazy' />
        
    </section>
  )
}

export default Gallary