import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full bg-white shadow-md h-16 flex items-center justify-between px-6'>
        <Link to={'/'}>
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors'>Blog Site</h1>
            </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-1 justify-center gap-8'>
            <div className='flex items-center space-x-6'>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Home</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Blogs</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Articles</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>About</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Contact</Link>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700'>
                <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    {isOpen ? (
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    ) : (
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-16 left-0 w-full md:hidden bg-white shadow-md transition-all duration-750 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className='flex flex-col space-y-4 px-6 py-4'>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Home</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Blogs</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Articles</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>About</Link>
                <Link to='' className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar