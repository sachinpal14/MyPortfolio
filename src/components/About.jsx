
import { assests, hero_desc } from "../consonants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-l-neutral-900 ">
      <h2 className="my-20 text-center text-4xl ">About <span className="text-neutral-500">Me</span></h2>

      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{x: -100, opacity:0}}
      transition={{duration:0.5,delay:0.3}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-3/4" src={assests.wall} alt="" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{x:0,opacity:1}}
        initial={{x:100,opacity:0}}
        transition={{duration:0.5,delay:0.3}}
        className="w-full lg:w-1/2">
          <div className="flex items-center lg:justify-start md:justify-center ">
            <p className="my-8 max-w-xl py-6 tracking-tight">{hero_desc}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About