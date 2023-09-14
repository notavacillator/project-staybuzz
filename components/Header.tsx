"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {  
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon
} from '@heroicons/react/24/solid';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range'; 

function Header() {
  const [searchInput, setSearchInput] = useState("");
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); 
  
  const [noOfGuests, setNoOfGuests] = useState(1)

  const handleInputChange = (e : any) => {
    const inputValue = parseInt(e.target.value, 10); // Convert the input value to an integer
    if (!isNaN(inputValue)) {
      setNoOfGuests(inputValue); // Set the state with the parsed integer value
    }
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges : any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput("");
  }
  
  return (
    <header className='grid items-center sticky top-0 z-20 max-h-14 grid-cols-3  bg-white shadow-md py-2 md:px-3 backdrop-blur-md bg-opacity-50'>
        {/* First section - Logo  */}
        <div className='relative flex items-center h-8 cursor-pointer my-auto'>
            {/* Logo Symbol   */}
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/staybuzz-ef4d9.appspot.com/o/logo_airb_styled-removebg.png?alt=media&token=c0fd54af-2677-4c50-aa54-3448900e6914"
                alt ="logo" 
                width={60} height={60} className='object-contain' 
            />
            {/* Named logo  */}
            {/* <Image
                className='hidden xl:inline-flex object-left'
                src="https://firebasestorage.googleapis.com/v0/b/staybuzz-ef4d9.appspot.com/o/logo_name_bgremoved.png?alt=media&token=f1e8ab9f-55bb-469b-bbb7-726c02d4808d"
                alt ="logo-name"
                width={200} height={100}  
            /> */}
        </div>

        {/* Second section - input search field.  */}
        <div className='flex items-center  rounded-full h-10  sm:border-2 border-b-3 sm:shadow-md shadow-sm bg-white overflow-hidden'>
            <input onChange={(e) => (setSearchInput(e.target.value))} value={searchInput} className = "mx-3 px-4 bg-transparent outline-none flex-grow text-gray-500 placeholder-gray-400" type="text" name="main-search" id="main-search" placeholder='  Search '/>
            <MagnifyingGlassIcon className="hidden md:inline-flex w-6 h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer mx-2"/>
        </div>

        {/* Third section  */}
        <div className='flex items-center justify-end space-x-4 text-gray-500 sm:mr-2 mr-2'>
          <p className='hidden lg:inline-flex cursor-pointer font-light hover:font-normal text-sm'>Become a host</p>
          <GlobeAltIcon className='hidden sm:inline-flex h-6 cursor-pointer hover:text-black'/>

          <div className='flex items-center space-x-2 px-2 py-1 h-8 rounded-full border-2 cursor-pointer hover:shadow-md bg-white'>
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>
        </div>

        {/* DateRangePicker added - author : YSB  */}
        {searchInput && (
          <div className='bg-white border-collapse rounded-3xl flex flex-col col-span-3 mx-auto mt-2' >
            <DateRangePicker
              ranges = {[selectionRange]}
              minDate={new Date()}
              rangeColors={["#DF5B66"]}
              onChange={handleSelect}
            />
            <div className='bg-white  flex items-center border-b pb-4  justify-around mx-14'>
              <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests : </h2>
              <UsersIcon className='h-5'/>
              <input 
                className = "w-12 pl-2 outline-none text-lg text-pink-700"  
                type="number" min={1} 
                value={noOfGuests} 
                onChange={handleInputChange}
              />
            </div>
            <div className='flex my-2'>
              <button onClick = {resetInput} className='flex-grow text-gray-500 border-r-2 '> Cancel </button>
              <button className='flex-grow text-red-500 font-semibold border-l'> Search</button>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header