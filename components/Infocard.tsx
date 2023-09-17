import Image from 'next/image';
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

interface RoomData {
    key: string; 
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat: number;
  }

const Infocard = ({ img, location, title, description, star, price, total, long, lat } : RoomData) => {
  return (
    <div className='sm:flex  flex-row py-7 px-2 border-b border-gray-400 cursor-pointer 
        hover:opacity-70 hover:shadow-lg transition duration-200 ease-out first:border-t 
        last:border-b-0 select-none'>
        <div className='relative m-auto sm:m-2 flex-shrink-0 h-52 w-96 sm:h-48 sm:w-64 md:h-52 md:w-80'>
            <Image src= {img} alt ="search-info-images" fill={true}
                className='object-cover rounded-2xl'/>
        </div>
        <div className='flex flex-col flex-grow py-5 sm:pb-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b border-gray-400 w-20 pt-2'></div>
            <p className='text-xs pt-2 text-gray-700 flex-grow'>{description}</p>
            <div className='flex justify-between'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-orange-500' />
                    {star}
                </p>
                <div>
                    <p className='font-semibold text-lg lg:text-2xl pb-2'>{price}</p>
                    <p className='text-right font-light'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infocard