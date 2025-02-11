import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const HomeSidebar = () => {
  return (
    <div className='w-full px-3'>
      <form onSubmit={''} className='w-full flex bg-neutral-300 mt-4 rounded-xl'>
        <input type="text" className='w-full bg-transparent outline-none p-2 pl-3 rounded-md' placeholder='Search' />
        <button type='submit' className=''>
            <Icon icon="mdi:magnify" className='text-3xl text-gray-500 mt-2 mr-2' />
        </button>
      </form>

      <div className='w-full flex items-center justify-between mt-4 px-1'>
        <h1 className='text-lg font-semibold text-white'>Recommended</h1>
        <div className='flex items-center gap-2 text-white cursor-pointer hover:text-gray-300 transition-colors'>
            View <Icon icon="mdi:chevron-right" className='text-xl text-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default HomeSidebar