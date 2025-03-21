import React from "react";
import pic from "../assets/girl-png.webp";
import { motion } from "framer-motion";

const Main = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-10 lg:pb-24 px-4 sm:px-8 lg:px-16">
      {/* Responsive Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight mt-10 lg:mt-16"
            >
              Shadha
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-xl font-light tracking-tighter text-neutral-500"
            >
             I am a dedicated and result driven MERN full stack developer with a solid foundation in React.js,Node.js,MongoDB,Express.js.
            .My journey in web development began with a curiosity for creating dynamic,responsive interfaces.I specialize in developing scalable,user-centric applications , and have a proven track record of delivering high quality projects
            </motion.p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={pic}
            alt="Profile"
            className="w-72 sm:w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
