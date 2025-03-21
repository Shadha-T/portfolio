import React from "react";
import {motion} from 'framer-motion'

const Exp = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-4">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
      className="text-center text-4xl my-20">
         My Experience
      </motion.h1>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="max-w-xl w-full mx-auto shadow-2xl p-6 rounded-lg">
        <h1 className="text-3xl font-semibold">MERN Stack Intern</h1>
        <p className="text-2xl text-gray-700">Softroniics</p>
        <p className="text-sm text-gray-500">July 2023 - July 2024</p>
        <p className="text-gray-600 mt-4">
        Developed and maintained full stack web applications using the MERN(MongoDB,Express.js,React.js,Nodejs)
        </p>
        <p className="text-gray-600 mt-2">Participated actively in all phases of software development life cycle,including requirement gathering,design,coding,testing and deployment.</p>

        <p className="text-gray-600 mt-2">Collaborated closely with team members to ensure smooth integration of front-end and back-end components.</p>
        <p className="text-gray-600 mt-2">Implemented efficient and scalable solutions to meet project requirements and deadlines.</p>
      </motion.div>
    </div>
  );
};

export default Exp;
