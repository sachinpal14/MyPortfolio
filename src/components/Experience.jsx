import React from 'react'
import { EXPERIENCES } from '../consonants'
import { motion } from "framer-motion"
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5 ,delay:0.5}}
      className='text-4xl text-center my-20'>Experiences And Skills</motion.h2>
      <div>
      {EXPERIENCES.map((exper,index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1,delay:0.2}}
                className='w-full lg:w-1/2'>
                <p className='mb-2 text-sm text-neutral-400'>{exper.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1,delay:0.3}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{exper.role} - {" "}<span className='text-purple-100 text-sm'> {exper.company}</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{exper.description}</p>
                    {exper.technologies.map((tech,index) => (

                       
                          <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 max-[520px]:inline-flex  max-[520px]:mt-2  max-[520px]:mr-1'>{tech}</span>
                      
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
