import React from 'react'
import image from "../assets/tondev.jpg"

const Home = () => {
  return (
   <div className="flex flex-row items-center justify-center text-purple-900 py-32">
    <div className=''>
         <img src={image}  className="w-64 h-64 rounded-full object-cover mr-28" alt="" />
      </div> 
     <div className='text-center w-120 '>
      <h1 className='text-4xl font-bold text-indigo-600 '>Hi, I am Tonderai Mlambo</h1>
      <p className='text-gray-600'>I'm a passionate Front-end developer who loves building user-friendly responsive,
         user-focused mobile and web applications using modern technologies like JavaScript, TypeScript,  React,
          Tailwind, and Node.js. I enjoy turning ideas into clean,
           efficient code and constantly learning new tools to level 
           up my craft.</p>
     </div>

    
   </div>
 
  )
}

export default Home