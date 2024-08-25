import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion"

 const iconduration=(duration) => ({
    initial: {y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    },
    
 })

const Technologies = () => {
  return (
    <motion.div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1.5,delay:0.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{x:-100,opacity:0}}
         transition={{duration:1.5,delay:0.3}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconduration(2.5)}
           initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconduration(3)}
            initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNextjsLine className='text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconduration(5)}
            initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
            variants={iconduration(4)}
            initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoNodejs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconduration(2)}
            initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className='text-7xl text-sky-700'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Technologies