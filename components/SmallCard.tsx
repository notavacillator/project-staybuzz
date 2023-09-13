import React from 'react'
import Image from 'next/image';

type SmallCardProps = {
    img: string;
    location: string;
    distance: string;
  };

function SmallCard({img, location, distance}: SmallCardProps) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-300 ease-in-out'>
        {/* left */}
        <div className='relative h-16 w-16'>
            <Image
                className="object-fill rounded-lg"
                src={img} alt='small-card-image' width={100} height={100}
            />
        </div>
        {/* right */}
        <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500 font-light text-xs'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard