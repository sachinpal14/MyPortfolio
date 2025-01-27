import React from 'react'
import { PROJECTS } from '../consonants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((proj, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-1/4">
              <img src={proj.image} width={250} height={0} className='mb-6 rounded' alt={proj.title} />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full max-w-xl lg:w-3/4">
              <a className='mb-2 font-semibold' href={proj.link_url}>{proj.title}</a>
              <p className='mb-4 text-neutral-400 tracking-tighter'>{proj.description}</p>
              {proj.technologies.map((tech, index) => (


                      <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-900 font-medium text-sm max-[520px]:inline-flex  max-[520px]:mt-2  max-[520px]:mr-1
            '>{tech}</span>
              

              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
