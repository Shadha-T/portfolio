import React from 'react'
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { animate, motion } from 'framer-motion';


const icons = (duration)=>({
  initial:{y:-10},
  animate:{y:[10,-10]},
  transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
  }

})
const Tech = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>What Can I Do</motion.h1>
      
      <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={icons(2.5)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
        <FaReact className='text-5xl text-cyan-500'/>
       </motion.div>
       <motion.div
        variants={icons(3)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <DiMongodb className='text-5xl text-green-700' />
       </motion.div>
       <motion.div 
        variants={icons(5)}
        initial="initial"
        animate='animate'
       className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <SiExpress  className='text-5xl'/>
       </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate'
       className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <FaNodeJs className='text-5xl text-green-400'/>
       </motion.div>
      
      
       <motion.div
 variants={icons(6)}
 initial="initial"
 animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <FaHtml5  className='text-5xl text-red-600'/>
       </motion.div>
       <motion.div
        variants={icons(4)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <FaCss3 className='text-5xl text-cyan-500'/>
       </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <IoLogoJavascript className='text-5xl text-yellow-300'/>
       </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <FaGithub className='text-5xl text-black'/>
       </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate' 
       className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <SiRedux className='text-5xl text-violet-500'/>
      </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <SiTailwindcss className='text-5xl text-cyan-500'/>
       </motion.div>
       <motion.div
        variants={icons(2)}
        initial="initial"
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4 '>
       <SiFirebase className='text-5xl text-yellow-300'/>
       </motion.div>
     
      <motion.div 
       variants={icons(2)}
       initial="initial"
       animate='animate'
      className='rounded-2xl border-4 border-neutral-800 p-4 '>
      <FaBootstrap  className='text-5xl text-violet-500'/>
      </motion.div>
      </motion.div>

      
    </div>
  )
}

export default Tech
