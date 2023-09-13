/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]'>
        <Image
            src="https://firebasestorage.googleapis.com/v0/b/staybuzz-ef4d9.appspot.com/o/boat-banner.jpg?alt=media&token=121b7634-05dc-4ed8-9aa0-aaac0c63f032"
            alt ="boat-cover-banner" priority={false}
            fill className='object-left object-cover' 
        />
        <div className="absolute top-1/4 w-full text-center ">
            <p className='md:text-xl sm:text-lg font-light'>Not sure where to go? Perfect</p>
            <button className='text-orange-600 bg-white px-6 py-3 shadow-md rounded-full opacity-90 font-bold my-4 hover:shadow-xl hover:opacity-100 active:scale-90 transition duration-150'>
                I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner