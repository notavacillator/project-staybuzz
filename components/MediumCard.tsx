import React from 'react'
import Image from 'next/image'

type MediumCardType = {
    img: string,
    title: string,
}

function MediumCard({img, title}: MediumCardType) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80 overflow-hidden'>
            <Image src={img} alt='med-cards' 
            className='rounded-xl' fill={true} quality={50}/>
        </div>    
        <h2 className='text-2xl mt-2'>{title}</h2>
    </div>
  )
}

export default MediumCard