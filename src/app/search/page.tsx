import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { format } from 'date-fns';

interface SearchParamsInterface {
  searchParams: {
    location: string;
    startDate: string;
    endDate: string;
    noOfGuests: string;
  };
}

interface Iplaceholder {
  placeholder: string,
}


async function Page({searchParams} : SearchParamsInterface) {

  // console.log(searchParams);
  let location = searchParams.location;

  const capitalizeLocation = (location : string) => {
    return location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
  };

  const capitalizedLocation = capitalizeLocation(location);

  const { startDate, endDate, noOfGuests } = searchParams;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy"); 
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy"); 
  const range = `${formattedStartDate} - ${formattedEndDate}`; 

  const placeholder = `${capitalizedLocation} | ${range} | ${noOfGuests} ` ; 

  // get the search info 
  const searchResults = await getSearchInfoCards();
  // console.log(searchResults);
  
  return (
    <div>
        <Header placeholder = {placeholder}/>

        <main className='flex'>
            {/* search location header and filters section  */}
            <section className='flex-grow pt-14 px-6'>
                {/* Search Info section */}
                <p className='text-xs'>300+ Stays - {range} for {noOfGuests}  </p>
            
                <h1 className='text-3xl font-semibold mb-6 mt-2'>Stays in {capitalizedLocation}</h1>

                {/* Filter section  */}
                <div className='hidden sm:inline-flex mb-5 whitespace-nowrap space-x-3 text-gray-800'>
                    {/* Used utility custom tailwind class */}
                    <p className='filter-button'>
                            Cancellation Flexibilty
                    </p>
                    <p className='filter-button'>
                            Type of place
                    </p>
                    <p className='filter-button'>
                            Price
                    </p>
                    <p className='filter-button'>
                            More Filters
                    </p>
                </div>
            </section>

            {/* Map Section styles   */}
            {/* className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]" */}
        </main>

        <Footer/>
    </div>
  )
}

export default Page

async function getSearchInfoCards() {
  const response = await fetch('https://jsonkeeper.com/b/5NPS');
  const searchInfoCard = await response.json();
  
  console.log('Fetched data:', searchInfoCard); 
  return searchInfoCard 
};
