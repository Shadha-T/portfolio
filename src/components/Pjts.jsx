import React from 'react'
import {PROJECTS} from '../comp'
import {motion} from 'framer-motion'



const Pjts = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-4">
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        className='my-20  md:my-20 text-center text-2xl  md:text-4xl '>Projects</motion.h1>
      
  
    {
        PROJECTS.map((item,index)=>(
<div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
    <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1}}
     className='w-full lg:w-1/4'>
    <img src={item.image} alt={item.title} width={150} height={150} className='mb-6 rounded'/>
    </motion.div>
  <motion.div
   whileInView={{opacity:1,x:0}}
   initial={{opacity:0,x:-100}}
   transition={{duration:1}}
   className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold '>{item.title} </h6>
            
            <p className='mb-4 text-neutral-500'> {item.description}</p>
            {
            item.technologies.map((tech,index)=>(
                    <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-white'>{tech}</span>
            ))}
  </motion.div>

</div>
        )

        )
    }
      </div>
  )
}

export default Pjts
