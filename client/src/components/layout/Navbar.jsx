import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full bg-white shadow-md h-16 flex items-center justify-between px-6'>
        <Link to={'/'}>
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors'>Blog Site</h1>
            </div>
        </Link>

        <div className='hidden md:flex flex-1 justify-center gap-8'>
            <div className='flex items-center space-x-6'>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Home</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Blogs</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Articles</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>About</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Contact</Link>
            </div>
        </div>

        <div className='flex md:hidden'>
            <button className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
                onClick={() => {setIsOpen(!isOpen)}}
            >
                <Icon icon='heroicons:bars-3' className='w-10 h-10' />
            </button>
        </div>

        {isOpen && (
            <div className='absolute w-full top-16 right-0 w-48 bg-white shadow-md rounded-md sm:hidden'>
                <div className='flex flex-col items-center gap-4'>
                    <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Home</Link>
                    <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Blogs</Link>
                    <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Articles</Link>
                    <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>About</Link>
                    <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Contact</Link>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar