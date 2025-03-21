import React from 'react'
import pic from '../assets/girl-png.webp'

const Abt = () => {
  return (
    <div className='border-b border-neutral-900  pb-4'>
      <h1 className='text-center my-20 text-4xl'>About
      <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
    <div className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
      <img className='rounded-xl' src={pic} alt='abt'/>

    </div>
    <div className='w-full lg:w-1/2'>
    <div className='flex justify-center lg:justify-start'>
<p className='my-2 max-w-xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis temporibus qui accusamus at, error assumenda. Maiores iusto debitis dolorem qui, adipisci ratione accusantium minima, sapiente, asperiores laborum consectetur rem.</p>
    </div>

    </div>

    </div>
      </div>
      
    </div>
  )
}

export default Abt
