import React from 'react'
import Button from "./Button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";


const Contacts = () => {
  return (
    <div className='flex justify-center items-center  pr-20  h-screen snap-start'>
       
           
      <div className="mr-20 ">
        <h1 className='text-[50px] font-bold  text-gray-600'>Contact me</h1>

        <div className="flex flex-col font-md text-gray-600 ">
        <div className='flex items-center my-4'>< MdEmail  style={{ width:"20px", height:"20px", color:"purple" , marginRight: "10px"}}/>generaltonde@gmail.com</div>
          <div className='flex items-center mb-4'>< FaPhone style={{ width:"20px", height:"20px", color:"purple", marginRight: "10px"}}/>+27613101642</div>
        </div>

        <div className="flex  "> 
     <FaGithub style={{width:"30px", height:"30px", color:"purple", marginRight: "20px"}}/>
     <FaLinkedinIn style={{width:"30px", height:"30px", color:"purple", marginRight: "20px"}}/> 
     <BsInstagram style={{width:"30px", height:"30px", color:"purple", marginRight: "20px"}}/>
     <BsTwitterX style={{width:"30px", height:"30px", color:"purple", marginRight: "20px"}}/>
      </div>
      <div className='pt-8 pb-12'>
      <Button>Download CV</Button>
      </div>
      </div>

      <div className="flex flex-col text-gray-600 text-sm ">
        
        <input className=' bg-purple-200 border border-gray-400 w-120 h-8 px-2 mb-2 focus:outline-none ' type="text" placeholder='Your name'/>
        <input className='bg-purple-200 border border-gray-400 w-120 h-8 px-2 mb-2 focus:outline-none' type="email" name="" id="" placeholder='Email' />
        <textarea className='bg-purple-200 border border-gray-400 w-120 h-28 flex px-2 focus:outline-none ' type="text" name="" id="" placeholder='Your message' />
        <div className='pb-4 pt-4'> <Button>Submit</Button></div>
      </div>

    </div>
  )
}

export default Contacts