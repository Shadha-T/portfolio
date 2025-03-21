import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-4 px-6  md:flex-row shadow-md'>
        <div className=' flex flex-shrink-0 items-center'>
           <h1 className='text-3xl bg-gradient-to-l from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-bold'>sha</h1> 
        </div>
        <div className='flex items-center m-8 justify-center gap-4 text-2xl'>
       
        <FaFacebookSquare />
        </div>
    </nav>
  )
}

export default Navbar
