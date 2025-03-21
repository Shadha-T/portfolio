import React from 'react'
import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Cnt = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-4">
        <motion.h1
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
         className='my-16  md:my-20 text-center text-2xl  md:text-4xl  '>Contact me</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            className='my-4'>Calicut,kerala</motion.p>
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            className='my-4 '>shadhat3250@gmail.com</motion.p>
<div className='flex  my-4 justify-center text-4xl gap-4'>
 <a href='https://github.com/Shadha-T/'  target="_blank" ><FaGithub  className='text-black'/></a>
<a href='https://www.linkedin.com/feed/' target='_blank' ><FaLinkedin  className='text-cyan-400'/> </a>
<FaInstagram  className='text-pink-700'/>
</div>
        </div>
      
    </div>
  )
}

export default Cnt
