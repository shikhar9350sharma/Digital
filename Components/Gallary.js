import React from 'react'

const Gallary = () => {
    return (
        <section className='overflow-x-scroll overflow-y-hidden no-scrollbar w-93.75 h-74 md:w-full md:h-100 flex items-center gap-6 pt-15 pr-4 pb-15 pl-4 md:flex-row md:gap-10 md:pt-10 md:pr-20 md:pb-10 md:pl-20 md:mx-auto'>
            
            <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 md:rounded-lg object-cover' src="img2.jpg" alt="img" loading='lazy' />
            <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 md:rounded-lg object-cover' src="img3.jpg" alt="img" loading='lazy' />
            <img className='shrink-0 w-57.5 h-44 rounded-lg md:w-140 md:h-80 md:rounded-lg object-cover' src="img4.jpg" alt="img" loading='lazy' />
            
        </section>
    )
}

export default Gallary