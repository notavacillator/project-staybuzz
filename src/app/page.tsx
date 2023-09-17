import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Head from 'next/head'
import SmallCard from '../../components/SmallCard'
import MediumCard from '../../components/MediumCard'
import LargeCard from '../../components/LargeCard'
import Footer from '../../components/Footer'


type LocationData = {
  img: string;
  location: string;
  distance: string;
};

type MediumCardType = {
  img: string,
  title: string,
}

type LargeCardPropsType = {
  img : string,
  title: string, 
  description : string, 
  buttonText : string, 
}

export default async function Home() {
  const exploreData = await getPlaces();
  const larCardData = await getLarPlaces();
  // console.log("explore data : " + exploreData);
  // console.log("large card data : " + larCardData);
  // console.log(JSON.stringify(larCardData[1], null, 2));


  return (
    <div className=''>
      
      <Header placeholder = {""}/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* first main section - smaller cards */}
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.map(({img, distance, location}: LocationData) => 
              <SmallCard key={img} img={img} location={location} distance={distance}/>
            )}
          </div>

        </section>

        {/* second main section - medium cards / carousel */}
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Live Anywhere</h2>
          <div className="flex p-3 space-x-3 overflow-scroll scrollbar-hide">
            {larCardData?.map(({img, title} : MediumCardType) => (
                <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
        </section>

        {/* https://firebasestorage.googleapis.com/v0/b/staybuzz-ef4d9.appspot.com/o/large-card-image.webp?alt=media&token=922d688d-5ed3-4ce3-8447-bba5b914f6ec */}
        <LargeCard
           img="https://firebasestorage.googleapis.com/v0/b/staybuzz-ef4d9.appspot.com/o/large-card-image.webp?alt=media&token=922d688d-5ed3-4ce3-8447-bba5b914f6ec"
           title='The Greatest Outdoors'
           description='Wishlist curated by Staybuzz'
           buttonText='Get Inspired'   
        />
      </main>

      <Footer />
    </div>
  )
}

async function getPlaces() {
  const response = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await response.json();
  
  // console.log('Fetched data:', exploreData); 
  return exploreData 
};

async function getLarPlaces() {
  const response = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const larCardData = await response.json();
  
  // console.log('Fetched data:', larCardData); 
  return larCardData 
};




