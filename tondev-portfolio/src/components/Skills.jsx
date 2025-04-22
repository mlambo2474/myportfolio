import React from 'react'
import uxImage from "../assets/designer3.JPG"
import devImage from "../assets/designer2.png"
import webImage from "../assets/designer6.png"

const Skills = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <img src={uxImage} alt="" className='h-92 w-48 mr-12 rounded-lg'/>
      <img src={devImage} alt="" className='h-92 w-48 mr-12 rounded-lg'/>
      <img src={webImage} alt="" className='h-92 w-48  rounded-lg'/>

    </div>
  )
}

export default Skills