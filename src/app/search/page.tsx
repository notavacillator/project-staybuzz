import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

function Page() {
  return (
    <div>
        <Header/>

        <main className='flex'>
            {/* search location header and filters section  */}
            <section className='flex-grow pt-14 px-6'>
                {/* Search Info section */}
                <p className='text-xs'>300+ Stays for 5 number of guests</p>
            
                <h1 className='text-3xl font-semibold mb-6 mt-2'>Stays in Mars</h1>

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