import React from 'react'
import image from "../assets/about.png"

const AboutMe = () => {
  return (
    <div className='flex justify-center  mt-8 pr-20'>

        <div className='mr-20 '>
           <h1 className='text-[50px] font-bold pb-8 text-gray-600'>About me</h1>
         <div className='bg-purple-200 h-84 w-64 rounded-lg'>
           <img src={image} alt="" className='h-92 w-64 mr-12 pb-8 rounded-lg' />
        </div>
        </div>

        <div className=' w-160 '>
          <p className=' text-sm text-gray-600 mt-4 '>I'm a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript and React, recently completing my front-end development course. I enjoy creating responsive, user-friendly websites and am constantly exploring other mordern frameworks like Angular and  to enhance my skills. With a keen eye for design and a love for clean, efficient code, I aim to build engaging digital experiences that make an impact. When I'm not coding, you'll find me experimenting with new web technologies or contributing to open-source projects. Let's connect and build something amazing together!</p>
       
         <div className='text-gray-600 mt-2 mb-2 font-bold text-sm'>
            <span className='pr-8'>EDUCATION</span> 
            <span className='pr-8'>SKILLS</span>
            <span>EXPERIENCE</span>
          </div>

          <div className='education hidden'>
          <h5 className='text-sm font-bold text-indigo-600'>Zaio Institute of Technology </h5>
          <p className='text-sm text-gray-600'>Front-End Engineer</p>

            <h5 className='text-sm font-bold pt-2 text-indigo-600'>Univeristy of London GoldSmiths</h5>
            <p className='text-sm text-gray-600'>Web Design</p>
          </div>

          <div className=''>
          <h5 className='text-sm  font-bold text-indigo-500'>Technical skills and tools</h5>
          <h5 className='text-sm font-bold text-gray-600'>HTML5, CSS3, JavaScript</h5>
          <h5 className='text-sm font-bold text-gray-600'>React</h5>
          <h5 className='text-sm font-bold text-gray-600'>Tailwind</h5>
          <h5 className='text-sm font-bold text-gray-600'>TypeScript</h5>
          <h5 className='text-sm font-bold text-gray-600'>Responsive Design</h5>
          <h5 className='text-sm font-bold text-gray-600'>Git, GitHub</h5>

          <h5 className='text-sm pt-2 font-bold text-indigo-500'>Soft skills</h5>
          <h5 className='text-sm font-bold text-gray-600'>Problem-solving</h5>
          <h5 className='text-sm font-bold text-gray-600'>Communication </h5>
          <h5 className='text-sm font-bold text-gray-600'>Attention to detail</h5>
          <h5 className='text-sm font-bold text-gray-600'>collaboration</h5>




          </div>
          <div></div>

        </div>
 
    </div>
  )
}

export default AboutMe