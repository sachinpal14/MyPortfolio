import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Navbar = () => {
    
  return (
   <nav className= 'mb-8 flex py-6 items-center justify-between w-full'>
    <div className='flex flex-shrink-0 items-center'>
           <h1 className=' text-5xl font-thin'>SP</h1>  {/*logos*/}
        </div>
        <div className='m-8 flex items-center text-xl cursor-pointer justify-center gap-4'>
          <a href="https://github.com/settings/profile"><FaGithub/></a>
        
        <a href="https://www.linkedin.com/in/sachin-pal-1402pika1708">
        <FaLinkedin/>
        </a>
        <a href="https://x.com/sachinpalsp1402">  <FaTwitter/></a>
        </div>
    
   </nav>
        
  )
}

export default Navbar