import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const Navigate = useNavigate()
  return (
    <div className='flex  h-16 items-center justify-between' >
         <div className='flex flex-col px-4 text-xs'>
         <p>generaltonde@gmail.com</p>
         <p>+27 61 310 1642</p>
         </div>
     
      
       <div className="flex items-center px- font-bold ">
        <span className="px-2 mx-2 cursor-pointer" onClick={()=> Navigate("/")}>Home</span>
        <span  className="px-2 mx-2 cursor-pointer" onClick={()=> Navigate("skills")}>Services</span>
        <span  className="px-2 mx-2 cursor-pointer" onClick={()=> Navigate("aboutme")}>About Me</span>
        <span  className="px-2 mx-2 cursor-pointer" onClick={()=> Navigate("projects")}>My Work</span>
        <span  className="px-2 mx-2 cursor-pointer w-28" onClick={()=> Navigate("contacts")}>Contact me</span>
       </div>

    </div>
  )
}

export default Header