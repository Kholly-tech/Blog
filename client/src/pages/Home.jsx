import React from 'react'
import HomeSidebar from '../components/home/HomeSidebar'
import HomeContent from '../components/home/HomeContent'

const Home = () => {
  return (
    <div className='w-full max-w-[95%] flex justify-center items-center mt-4 mx-auto'>
      <div className='w-full md:w-[70%] flex flex-col md:flex-row gap-10'>
        <HomeContent />
      </div>

      {/* Side Bar */}
      <div className='hidden md:flex max-w-[25%] w-full bg-neutral-900 shadow-md min-h-[calc(70vh)] rounded-xl'>
        <HomeSidebar />
      </div>
    </div>
  )
}

export default Home
