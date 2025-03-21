import React from 'react'
import {motion} from 'framer-motion'

const Edu = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className="text-center text-4xl my-20">
        My Education
        </motion.h1>
      <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
       className='max-w-xl w-full mx-auto shadow-2xl'>
      <p className=" text-center text-3xl font-semibold">BSC Computer Science</p>
      <p className=" text-center text-sm text-gray-500">2020 - 2023</p>
      <p className='text-center'>Calicut University</p>

      </motion.div>
     

    </div>
  )
}

export default Edu
