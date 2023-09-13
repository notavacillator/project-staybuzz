import Image from 'next/image'
import React from 'react'

type LargeCardPropsType = {
    img : string,
    title: string, 
    description : string, 
    buttonText : string, 
}

function LargeCard({img, title, description, buttonText} : LargeCardPropsType) {
  return (
    <section className="relative py-16 ">
        <div className="relative h-96 min-w-full ">
            <Image 
                src={img} alt='large-card-img' fill={true} className='object-cover rounded-2xl'
            />
        </div>

        <div className="absolute top-32 left-12">
            <h3 className='text-4xl mb-3 w-64 font-semibold'>{title}</h3>
            <p>{description}</p>

            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 active:scale-90 transition duration-150'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard